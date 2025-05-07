// app/blog/[slug]/page.tsx

import { getPostBySlug, sanitizeContent } from "@/lib/api"; // Ensure these are correctly typed
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import NavBar from "@/components/layout/Navbar"; // Ensure this component is fine

// Define the shape of the resolved params object (the object inside the Promise)
type ResolvedPageParams = {
  slug: string;
};

// Define the type for the 'params' prop that the page will receive.
type PageParamsProp = Promise<ResolvedPageParams>;

export default async function BlogPostPage({
  params, // This 'params' variable IS the Promise, matching your RootLayout example
}: {
  params: PageParamsProp;
}) {
  // 1. Await the 'params' Promise to get the actual resolved parameters object.
  // This directly addresses the Next.js error.
  const resolvedParams = await params;

  // 2. Now that `resolvedParams` holds the actual object (e.g., { slug: "your-slug" }),
  // extract the slug.
  const slug = resolvedParams.slug;

  // Basic validation for the extracted slug
  if (!slug || typeof slug !== "string") {
    console.error("Error: Invalid slug after awaiting params.", slug);
    notFound();
    return null; // Should be unreachable if notFound works
  }

  // 3. Use the resolved 'slug' to fetch your post data
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
    return null; // Should be unreachable
  }

  // From here, the rest of the component logic uses the resolved `post` data
  const content = typeof post.content === "string" ? post.content : "";
  const sanitizedHtml = sanitizeContent(content);

  const postDate = post.date ? new Date(post.date) : null;
  const formattedDate = postDate
    ? format(postDate, "MMMM d, yyyy") // Standard year format
    : "Date Unavailable";

  const categoryName = post.categories?.nodes?.[0]?.name || "Uncategorized";
  const title = typeof post.title === "string" ? post.title : "Blog Post";

  const featuredImageUrl = post.featuredImage?.node?.sourceUrl;
  const featuredImageAlt =
    post.featuredImage?.node?.altText || title || "Blog post featured image";

  return (
    <>
      <NavBar initialStyle="white" />
      <section className="bg-primary-light pt-32 pb-16 md:pt-40 md:pb-20 lg:pb-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col items-center max-w-screen-md lg:max-w-screen-lg mx-auto">
            {categoryName !== "Uncategorized" && (
              <p className="text-sm text-paragraph-gray mb-2 md:mb-3">
                {categoryName}
              </p>
            )}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-text-dark max-w-4xl mx-auto">
              {title}
            </h1>
            <p className="text-center text-base text-paragraph-gray mt-4 mb-8 md:mt-5 md:mb-10">
              {formattedDate}
            </p>
            {featuredImageUrl && typeof featuredImageUrl === "string" && (
              <div className="relative w-full aspect-video md:aspect-[2/1] lg:h-[550px] max-h-[680px] mb-8 md:mb-12 lg:mb-16 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={featuredImageUrl}
                  alt={featuredImageAlt}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
            <article className="prose lg:prose-xl w-full max-w-full">
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </article>
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-dark transition-colors font-medium"
              >
                <span
                  aria-hidden="true"
                  className="transform rotate-180 inline-block"
                >
                  →
                </span>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

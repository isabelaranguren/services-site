import { getPostBySlug, sanitizeContent } from "@/lib/api"; // Adjust import path as needed
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns"; // For consistent date formatting (npm install date-fns)
import NavBar from "@/components/layout/Navbar";

export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} | Renovation Blog`,
    description: post.summary || `Read about ${post.title}`,
    // Add other metadata fields: openGraph, twitter, etc.
    // openGraph: {
    //   title: post.title,
    //   description: post.summary,
    //   images: [post.featuredImageUrl || '/default-og-image.jpg'],
    // },
  };
}
// --- End App Router Metadata ---

type Props = {
  params: { slug: string };
};

// Make sure your getPostBySlug fetches all necessary fields:
// title, date, category, categorySlug (optional), featuredImageUrl, content
// And potentially `prevPost: { slug, title }` and `nextPost: { slug, title }`
// You might need a separate getAdjacentPosts function or include it in getPostBySlug response

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);
  

  if (!post) {
    notFound(); // Triggers Next.js 404 page
  }

  // Use your sanitize function if needed on the raw HTML content
  // Ensure post.content contains the HTML string

  // Format date consistently
  const formattedDate = post.date
    ? format(new Date(post.date), "MMMM d, yyyy") // e.g., May 18, 2022
    : "Date Unavailable";

  const categorySlug =
    post.category?.toLowerCase().replace(/\s+/g, "-") || "uncategorized";
  const categoryUrl = `/posts-categories/${categorySlug}`;

  return (
    // Assuming Navbar and Footer are handled by a Root Layout (app/layout.tsx)
    <>
      <NavBar />
      <section className="bg-primary-light pt-24 pb-16 md:pt-32 md:pb-20 lg:pb-24">
        {" "}
        {/* Adjust background if needed */}
        {/* Container - Corresponds to .base-container */}
        <div className="max-w-screen-xl mx-auto px-4">
          {/* Content Wrapper - Corresponds to .blog-template-wrapper */}
          <div className="flex flex-col items-center max-w-screen-md lg:max-w-screen-lg mx-auto">
            {/* Category Link */}
            {post.category && (
              <Link href={categoryUrl} legacyBehavior>
                <a className="inline-block bg-primary text-text-dark rounded-full px-4 py-1.5 text-sm leading-tight hover:bg-dark hover:text-white transition-colors mb-4 md:mb-6">
                  {post.category}
                </a>
              </Link>
            )}

            {/* Post Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-text-dark max-w-4xl mx-auto">
              {post.title}
            </h1>

            {/* Date */}
            <p className="text-center text-base text-paragraph-gray mt-4 mb-8 md:mt-5 md:mb-10">
              {formattedDate}
            </p>

            {/* Featured Image */}
            {post.featuredImageUrl && (
              <div className="relative w-full aspect-video md:aspect-[2/1] lg:h-[550px] max-h-[680px] mb-8 md:mb-12 lg:mb-16 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={post.featuredImageUrl} // Use the correct path format (e.g., /images/...)
                  alt={post.title || "Blog post featured image"}
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            )}

            <article
              className="prose prose-lg lg:prose-xl max-w-none w-full
                                prose-headings:text-text-dark prose-headings:font-semibold
                                prose-p:text-paragraph-gray prose-p:leading-relaxed
                                prose-a:text-primary hover:prose-a:text-dark prose-a:transition-colors
                                prose-strong:text-text-dark
                                prose-blockquote:border-l-0 prose-blockquote:text-center prose-blockquote:font-semibold prose-blockquote:not-italic prose-blockquote:text-xl md:prose-blockquote:text-2xl prose-blockquote:text-text-dark prose-blockquote:my-8 md:prose-blockquote:my-10 prose-blockquote:py-4 prose-blockquote:px-0 prose-blockquote:border-primary
                                prose-ul:list-disc prose-ol:list-decimal prose-li:my-1 prose-li:marker:text-primary
                                prose-img:rounded-md prose-img:my-8"
            >
              {/* Render sanitized HTML content */}
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </article>
          </div>
        </div>
      </section>
      {/* Assuming Footer is included in Layout or added separately */}
      {/* <Footer /> */}
    </>
  );
}

import { getPostBySlug, sanitizeContent } from "@/lib/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
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
    description: post.excerpt
      ? post.excerpt.replace(/<[^>]*>/g, "").substring(0, 160)
      : "Read our latest renovation blog post",
  };
}

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound(); // Triggers Next.js 404 page
  }

  const sanitizedHtml = sanitizeContent(post.content || "");

  // Format date consistently
  const formattedDate = post.date
    ? format(new Date(post.date), "MMMM d, yyyy")
    : "Date Unavailable";

  const categoryName = post.categories?.nodes?.[0]?.name || "Uncategorized";

  return (
    <>
      <NavBar initialStyle="white" />
      <section className="bg-primary-light pt-32 pb-16 md:pt-40 md:pb-20 lg:pb-24">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col items-center max-w-screen-md lg:max-w-screen-lg mx-auto">
            {categoryName}

            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center text-text-dark max-w-4xl mx-auto">
              {post.title}
            </h1>

            <p className="text-center text-base text-paragraph-gray mt-4 mb-8 md:mt-5 md:mb-10">
              {formattedDate}
            </p>

            {post.featuredImage?.node?.sourceUrl && (
              <div className="relative w-full aspect-video md:aspect-[2/1] lg:h-[550px] max-h-[680px] mb-8 md:mb-12 lg:mb-16 overflow-hidden rounded-lg shadow-md">
                <Image
                  src={post.featuredImage.node.sourceUrl}
                  alt={
                    post.featuredImage.node.altText ||
                    post.title ||
                    "Blog post featured image"
                  }
                  fill
                  className="object-cover"
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
                prose-blockquote:border-l-primary prose-blockquote:pl-4 prose-blockquote:text-text-dark prose-blockquote:italic
                prose-ul:list-disc prose-ol:list-decimal prose-li:text-paragraph-gray prose-li:marker:text-primary
                prose-img:rounded-md prose-img:my-8
                prose-table:border-collapse prose-td:border prose-td:border-gray-300 prose-td:p-2
                prose-th:border prose-th:border-gray-300 prose-th:p-2 prose-th:bg-gray-100"
            >
              <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
            </article>

            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-primary hover:text-dark transition-colors font-medium"
              >
                <span className="transform rotate-180">→</span>
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

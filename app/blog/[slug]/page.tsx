import { getPostBySlug, sanitizeContent } from "@/lib/api"; // Adjust import path
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function BlogPage({ params }: Props) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Use your sanitize function if needed
  const sanitizedHtml = sanitizeContent(post.content || "");

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{new Date(post.date).toLocaleDateString()}</p>
      {/* Display featured image, author, categories etc. */}
      <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    </article>
  );
}


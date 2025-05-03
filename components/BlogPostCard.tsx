import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react'; 

interface PostData {
  slug: string; // Assuming slug is always required for the URL
  title: string; // Assuming title is always required
  date?: string | Date; // Date can be optional, accept string or Date object
  summary?: string; // Optional summary
  category?: string; // Optional category
  imageUrl?: string;
  imageAlt?: string; 
}

interface BlogPostCardProps {
  post: PostData;
}

const BlogPostCard: FC<BlogPostCardProps> = ({ post }) => {
  const {
    slug,
    title,
    date,
    summary = "No summary available.", // Default summary
    category,
    imageUrl,
    imageAlt,
  } = post;

  const formattedDate = date
    ? new Date(date).toLocaleDateString("en-US", {
        // Handles both string and Date types
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : "No Date";

  const categorySlug =
    category?.toLowerCase().replace(/\s+/g, "-") || "uncategorized";
  const postUrl = `/blog/${slug}`;
  const categoryUrl = `/categories/${categorySlug}`;

  const finalImageUrl = imageUrl || "/images/placeholder-blog.jpg";
  const finalImageAlt = imageAlt || title || "Blog post image"; // Use title as a fallback alt text

  return (
    <article className="flex flex-col justify-between pt-5 border-t border-gray-300">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col space-y-1">
          <div className="text-sm text-text-dark uppercase tracking-wide">
            {formattedDate}
          </div>
          <Link
            href={postUrl}
            className="text-2xl font-semibold text-text-dark hover:text-text-dark/70 transition-colors duration-300 inline-block"
          >
            {title}
          </Link>
        </div>
        <div
          className="mt-0 mb-0 text-paragraph-gray leading-relaxed line-clamp-3"
          dangerouslySetInnerHTML={{ __html: summary }} 
        />
        <Link href={postUrl} className="block overflow-hidden mt-4 group/image">
          <Image
            src={finalImageUrl}
            alt={finalImageAlt}
            width={500}
            height={280}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover/image:scale-108"
            loading="lazy"
          />
        </Link>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-x-5 gap-y-3 pt-4 mt-auto">
        {/* Category Link: Render only if category exists */}
        <div>
          {category && (
            <Link
              href={categoryUrl}
              className="inline-flex bg-primary text-text-dark capitalize rounded-full px-3.5 py-1.5 text-sm leading-tight hover:bg-dark hover:text-white transition-colors duration-300"
            >
              {category}
            </Link>
          )}
        </div>

        {/* Read More Link */}
        <div>
          <Link
            href={postUrl}
            className="inline-flex items-center text-text-dark hover:text-text-dark/70 transition-colors duration-300 py-1"
          >
            Read more
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogPostCard;

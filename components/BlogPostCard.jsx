import Image from 'next/image';
import Link from 'next/link';

// Helper function for formatting date (optional, install date-fns if needed: npm install date-fns)
// import { format } from 'date-fns';

const BlogPostCard = ({ post }) => {
  // Basic date formatting, replace with a library like date-fns for more robust formatting
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
    : 'No Date';

  const categorySlug = post.category?.toLowerCase().replace(/\s+/g, '-') || 'uncategorized';
  const postUrl = `/blog-posts/${post.slug}`;
  const categoryUrl = `/posts-categories/${categorySlug}`;

  // Fallback image if imageUrl is missing
  const imageUrl = post.imageUrl || '/images/placeholder-blog.jpg'; // Add a placeholder image in public/images
  const imageAlt = post.imageAlt || post.title || 'Blog post image';


  return (
    // Corresponds to blog-collection-item-home
    <article className="flex flex-col justify-between pt-5 border-t border-gray-300"> {/* Use appropriate border color */}
      {/* Corresponds to top-blog-item-wrap */}
      <div className="flex flex-col space-y-4">
        {/* Corresponds to blog-item-title-wrap */}
        <div className="flex flex-col space-y-1">
           {/* Corresponds to blog-post-date */}
          <div className="text-sm text-text-dark uppercase tracking-wide">{formattedDate}</div>
           {/* Corresponds to blog-heading-link */}
          <Link 
            href={postUrl}
            className="text-2xl font-semibold text-text-dark hover:text-text-dark/70 transition-colors duration-300 inline-block"
          >
            {post.title}
          </Link>
        </div>
         {/* Corresponds to p.no-margin */}
        <p className="mt-0 mb-0 text-paragraph-gray leading-relaxed">
          {post.summary}
        </p>
         {/* Corresponds to blog-grid-image-link */}
        <Link 
          href={postUrl}
          className="block overflow-hidden mt-4 group/image"
        >
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={500}
            height={280}
            className="w-full h-72 object-cover transition-transform duration-500 group-hover/image:scale-108"
            loading="lazy"
          />
        </Link>
      </div>

      {/* Corresponds to bottom-blog-item-wrap */}
      <div className="flex justify-between items-center flex-wrap gap-x-5 gap-y-3 pt-4 mt-auto"> {/* mt-auto pushes to bottom */}
        {/* Corresponds to blog-category-link wrapper */}
        <div>
          {post.category && (
            <Link 
              href={categoryUrl}
              className="inline-flex bg-primary text-text-dark capitalize rounded-full px-3.5 py-1.5 text-sm leading-tight hover:bg-dark hover:text-white transition-colors duration-300"
            >
              {post.category}
            </Link>
          )}
        </div>
        {/* Corresponds to blog-link-wrap / Read more button */}
        {/* Note: Arrow styling from 'with-arrow-no-padding' is omitted for simplicity */}
        <div className="">
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
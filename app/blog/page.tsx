import React from "react";
import BlogPostCard from "@/components/BlogPostCard"; // Your Card component
import type { PostData } from "@/components/BlogPostCard"; // Import the interface from BlogPostCard
import PageHeroIII from "@/components/Hero/PageHeroIII"; // Your Hero component
import NavBar from "@/components/layout/Navbar"; // Your Navbar component
import { getAllPosts } from "@/lib/api"; // Data fetching function (adjust path if needed)
import type { Post as FetchedPost } from "@/types/wordpress"; // WordPress Post type (adjust path)

export const metadata = {
  title: "Blog",
  description:
    "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project.",
};

// Helper function to strip basic HTML tags and decode entities from excerpt
const stripHtml = (html: string | null | undefined): string => {
  if (!html) return "";
  // Create a temporary element to leverage browser's decoding
  if (typeof window !== "undefined") {
    // Only run in browser context if needed, otherwise use simpler regex
    try {
      let doc = new DOMParser().parseFromString(html, "text/html");
      return doc.body.textContent || "";
    } catch (e) {
      // Fallback for environments without DOMParser or if parsing fails
      return html.replace(/<[^>]*>/g, "").replace(/\[&hellip;\]/g, "...");
    }
  }
  // Basic fallback for server-side rendering if DOMParser isn't available/desired
  return html
    .replace(/<p>/gi, "")
    .replace(/<\/p>/gi, " ")
    .replace(/\[&hellip;\]/g, "...")
    .replace(/<[^>]*>/g, "")
    .trim();
};

const Blog = async () => {
  // Fetch posts from WordPress
  const fetchedPosts: FetchedPost[] = await getAllPosts();

  const adaptPostDataForCard = (post: FetchedPost): PostData => {
    return {
      slug: post.slug,
      title: post.title,

      date: post.date, // Pass the date string directly, card handles formatting
      summary: stripHtml(post.excerpt), // Clean the excerpt for summary
      imageUrl: post.featuredImage?.node?.sourceUrl, // Pass URL or undefined, card handles placeholder
      imageAlt: post.featuredImage?.node?.altText, // Pass alt text or undefined, card handles fallback
      category: post.categories?.nodes?.[0]?.name, // Use first category name or undefined
    };
  };

  return (
    <>
      <NavBar initialStyle="transparent" />
      <PageHeroIII
        preTitle="Blog"
        title="Latest News"
        description="We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality."
        imageUrl="/images/services-hero-bg.jpg"
      />
      <section className="bg-primary-light py-16 md:py-20 lg:py-32">
        <div className="max-w-screen-lg mx-auto px-4">
          {fetchedPosts && fetchedPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {fetchedPosts.map((post) => (
                <BlogPostCard key={post.id} post={adaptPostDataForCard(post)} />
              ))}
            </div>
          ) : (
            <div className="text-center text-paragraph-gray py-10">
              No blog posts found.
            </div>
          )}
          {/* TODO: Add Pagination component here if needed */}
        </div>
      </section>
    </>
  );
};

export default Blog;

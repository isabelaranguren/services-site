import React from "react";
import BlogPostCard from "@/components/ui/BlogPostCard";
import PageHeroIII from "@/components/Hero/PageHeroIII"; // Your Hero component
import NavBar from "@/components/layout/Navbar"; // Your Navbar component
import { getAllPosts } from "@/lib/api"; // Data fetching function (adjust path if needed)
import type { Post as FetchedPost } from "@/types/wordpress"; // WordPress Post type (adjust path)

type PostData = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
};

export const metadata = {
  title: "Blog",
  description:
    "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project.",
};

const stripHtml = (html: string | null | undefined): string => {
  if (!html) return "";

  // For server components, we'll use regex approach
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
      // Required fields for PostData
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
        <div className="max-w-screen-xl mx-auto px-4">
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
        </div>
      </section>
    </>
  );
};

export default Blog;

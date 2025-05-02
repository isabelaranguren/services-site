import React from 'react'
import PageHeroIII from '../components/PageHeroIII';
import NavBar from '../components/Navbar';
import BlogPostCard from '../components/BlogPostCard';

export const metadata = {
  title: "Blog",
  description:
    "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project.",
};

const postsData = [
  {
    slug: "how-to-keep-your-renovated-space-looking-like-new",
    date: "2024-11-29", // Use ISO format (YYYY-MM-DD) for easier parsing
    title: "How to Keep Your Renovated Space Looking Like New",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/1.jpg", // Use correct path in /public/images
    imageAlt: "Renovated space",
    category: "Renovation",
  },
  {
    slug: "how-we-helped-a-local-business-redefine-their-space",
    date: "2024-11-29",
    title: "How We Helped a Local Business Redefine Their Space",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/2.jpg",
    imageAlt: "Business space",
    category: "News",
  },
  {
    slug: "how-to-choose-the-right-contractor-for-your-renovation",
    date: "2024-11-29",
    title: "How to Choose the Right Contractor for Your Renovation",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/3.jpg",
    imageAlt: "Contractor tools",
    category: "Renovation",
  },
  {
    slug: "our-favorite-home-transformations-of-the-year",
    date: "2024-11-29",
    title: "Our Favorite Home Transformations of the Year",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/4.jpg",
    imageAlt: "Home transformation",
    category: "Renovation",
  },
  {
    slug: "key-considerations-for-renovating-a-commercial-space",
    date: "2024-12-03",
    title: "Key Considerations for Renovating a Commercial Space",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/blog-5.jpg",
    imageAlt: "Commercial space sketch",
    category: "Design",
  },
  {
    slug: "top-5-eco-friendly-upgrades-for-sustainable-living",
    date: "2024-11-29",
    title: "Top 5 Eco-Friendly Upgrades for Sustainable Living",
    summary:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
    imageUrl: "/images/blog-6.jpg",
    imageAlt: "Eco-friendly home",
    category: "News",
  },
];


const Blog = () => {
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
        {" "}
        {/* Adjust py-* for padding */}
        {/* Corresponds to .base-container */}
        <div className="max-w-screen-xl mx-auto px-4">
          {" "}
          {/* Adjust max-w-* and px-* as needed */}
          {postsData.length > 0 ? (
            // Corresponds to .blog-collection-grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
              {" "}
              {/* Adjust gap-* */}
              {postsData.map((post) => (
                <BlogPostCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            // Corresponds to .w-dyn-empty or similar
            <div className="text-center text-paragraph-gray py-10">
              No blog posts found.
            </div>
          )}
          {/* TODO: Add Pagination component here if needed */}
          {/* <div className="mt-16 flex justify-center"> ... pagination ... </div> */}
        </div>
      </section>
    </>
  );
}

export default Blog;

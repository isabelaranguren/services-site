import NavBar from "@/components/layout/Navbar";
import PageHeroIII from "@/components/Hero/PageHeroIII";
import AboutSection from "@/components/sections/AboutSection";
import SideBySideComponent from "@/components/sections/ SideBySideComponent";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};

export default function About() {
  return (
    <>
      <NavBar initialStyle="colored" />
      <PageHeroIII
        preTitle="Our Story"
        title="About Us"
        description="Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality."
      />
      <AboutSection />

      <SideBySideComponent
        mediaType="image"
        mediaUrl="/luz_upscaled_retry.jpeg"
        mediaAlt="Feature One"
        pretitle="Our Founder"
        title="Meet Our Founder"
        description="Luz Martinez brings over a decade of leadership in restaurant and service industry management, combined with her experience as Project Manager Director in customer service at HP, where she led a team of 35+. Her transition into construction stemmed from a deep desire to create and build—a passion that led her to launch her own company."
        description2="Today, her company is a trusted name in remodeling and design, known for its personal touch, reliable service, and wide-ranging expertise."
        mediaOnLeft={true}
        ctaText="Contact Us"
        ctaLink="/contact"
      />

      <SideBySideComponent
        mediaType="video"
        mediaUrl="/about.mp4"
        videoAutoplay={true}
        videoControls={false}
        videoMuted={true}
        mediaAlt="Feature Two"
        pretitle="Our Journey"
        title="Luz's Journey"
        description="Over the last 12 years, Lucy’s business has grown from small residential renovations to large-scale commercial projects. Her journey reflects resilience, innovation, and a commitment to delivering quality craftsmanship."
        description2="Lucy's story is all about her passion, her ability to adapt, and her determination to get things done right. With her in charge, the company doesn’t just build impressive projects; it builds strong, lasting relationships with clients based on trust and consistently good work. Her diverse background is a big key to the company's success and its ongoing commitment to doing a great job."
        mediaOnLeft={false}
        ctaText="Learn More"
        ctaLink="/services"
      />
    </>
  );
}

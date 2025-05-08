import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { servicesSchema } from "@/lib/schema";
import Head from "next/head";

const featuredProject = {
  slug: "interior-design",
  title: "Interior & Exterior Design",
  description:
    "Bring your vision to life with personalized interior design services. We create stylish, cohesive spaces that reflect your taste and optimize comfort, lighting, and layout.",
  videoUrl: "/interior-design.mp4",
  posterImage: "/interior-design.png",
  imageAlt: "Modern living room with thoughtfully arranged furniture",
};

const secondFeaturedProject = {
  slug: "more-services",
  title: "Need More Services?",
  description:
    "Transform your space with handcrafted, custom cabinetry designed to perfectly fit your needs. Our master craftsmen create beautiful, functional storage solutions that combine timeless style with modern functionality.",
  imageUrl: "/images/house-construction-2.jpg",
  imageAlt: "Elegant custom cabinets with fine woodworking details",
};

const otherProjects = [
  {
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Upgrade your bathroom into a relaxing and modern retreat with expert tilework, sleek countertops, and stylish finishes. We handle every detail to ensure a clean, functional, and elegant transformation.",
    imageUrl: "/images/bathroom-1.jpg",
    imageAlt: "Tile and countertop installation in a modern bathroom",
  },
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "Revamp your kitchen with tailored layouts, updated cabinetry, premium surfaces, and beautiful backsplashes. Our remodeling services blend function and flair to create your dream cooking space.",
    imageUrl: "/images/kitchen.jpg",
    imageAlt: "Custom backsplash installed in a stylish kitchen",
  },
  {
    slug: "painting",
    title: "Painting",
    description:
      "Refresh your interiors or exteriors with professional painting services. We use high-quality paints and expert techniques to deliver smooth, lasting finishes that elevate your space.",
    imageUrl: "/images/painting.jpg",
    imageAlt: "Freshly painted interior with modern color palette",
  },
  {
    slug: "flooring",
    title: "Flooring",
    description:
      "Enhance your home with durable and beautiful flooring options—from hardwood to luxury vinyl. We ensure flawless installation that complements your interior design and stands the test of time.",
    imageUrl: "/images/floors-2.jpg",
    imageAlt: "New wood flooring being installed in a living room",
  },
];

export const metadata = {
  title: "Services",
  description:
    "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project.",
};

function Services() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(servicesSchema),
          }}
        />
      </Head>
      <NavBar />
      <PageHeroII
        preTitle="/ Projects /"
        title="Reflect your lifestyle, and vision."
        description="We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality."
      />
      <section className="bg-white">
        <div className="relative overflow-hidden h-[540px]">
          <ProjectCard project={featuredProject} featured={true} />
        </div>
        {/* Other projects in grid */}
        <div className="max-w-none px-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
            {otherProjects.map((project) => (
              <div
                key={project.slug}
                className="relative overflow-hidden aspect-video bg-gray-100"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        {/* Second featured project - displayed in the same style as the first one */}
        <div className="relative overflow-hidden h-[540px]">
          <ProjectCard project={secondFeaturedProject} featured={true} />
        </div>
      </section>
    </>
  );
}

export default Services;

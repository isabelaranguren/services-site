import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

const featuredProject = {
  slug: "interior-design",
  title: "Interior Design",
  description:
    "Bring your vision to life with personalized interior design services. We create stylish, cohesive spaces that reflect your taste and optimize comfort, lighting, and layout.",
  imageUrl: "/images/interior-design.jpg",
  imageAlt: "Modern living room with thoughtfully arranged furniture",
};

const otherProjects = [
  {
    slug: "bathroon-remodeling",
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
    slug: "Painting",
    title: "Painting",
    description:
      "Refresh your interiors or exteriors with professional painting services. We use high-quality paints and expert techniques to deliver smooth, lasting finishes that elevate your space.",
    imageUrl: "/images/painting.jpg",
    imageAlt: "Freshly painted interior with modern color palette",
  },
  {
    slug: "Flooring",
    title: "Flooring",
    description:
      "Enhance your home with durable and beautiful flooring options—from hardwood to luxury vinyl. We ensure flawless installation that complements your interior design and stands the test of time.",
    imageUrl: "/floors.jpg",
    imageAlt: "New wood flooring being installed in a living room",
  },
  
];

interface Project {
  slug: string;
  title: string;
  imageUrl: string;
  description: string;
}

function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="relative block overflow-hidden group bg-gray-900 h-full" // Keep relative and group
    >
      {/* Background Image */}
      <Image
        src={project.imageUrl}
        alt={`Image of ${project.title}`}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105 z-0"
        sizes={featured ? "100vw" : "(max-width: 640px) 100vw, 50vw"}
        priority={featured}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      <div className="absolute bottom-0 left-0 z-20 mb-10 ml-10 mr-10 max-w-xl">
        <h3
          className={`font-semibold text-white
                     border-l border-[#afafaf80]
                     pl-4
                     mb-2
                     transition-all duration-300 ease-in-out
                     ${
                       featured
                         ? "text-3xl md:text-4xl"
                         : "text-2xl md:text-3xl"
                     }`}
        >
          {project.title}
        </h3>
        <p
          className={`text-gray-300 text-sm leading-relaxed line-clamp-2 md:line-clamp-3 ${
            featured ? "md:text-base" : ""
          }`}
        >
          {project.description}
        </p>
      </div>

      <div
        className="absolute inset-0 flex justify-center items-center z-30
                      opacity-0 group-hover:opacity-100
                      scale-90 group-hover:scale-100
                      transition-all duration-300 ease-in-out"
      >
        <div className="inline-block border border-white/50 rounded-full p-3 bg-black/20 group-hover:bg-white/20">
          <svg
            className="w-6 h-6 text-white" // Increased size slightly
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </div>
      </div>
    </Link>
  );
}

export const metadata = {
  title: "Services",
  description:
    "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project.",
};

function Services() {
  return (
    <>
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
      </section>
    </>
  );
}

export default Services;

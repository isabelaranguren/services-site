import PageHeroII from "@/components/Hero/PageHeroII";
import NavBar from "@/components/layout/Navbar";
import Image from "next/image";
import Link from "next/link";

const featuredProject = {
  slug: "workplace-wonders",
  title: "Workplace Wonders",
  imageUrl: "/images/1.jpg", 
  description:
    "We believe your space should reflect your unique personality, lifestyle, and vision. Whether it's a cozy home renovation or a bold commercial transformation, we are dedicated to turning your ideas into reality.",
};

const otherProjects = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    imageUrl: "/images/1.jpg",
    description:
      "With years of experience, and a commitment to quality, we take pride in creating spaces that inspire.",
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    imageUrl: "/images/2.jpg",
    description:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
  },
  {
    slug: "bathroon-renovation",
    title: "Bathroom Renovation",
    imageUrl: "/images/bathroom-reno.jpg",
    description:
      "Dedicated to turning your ideas into reality, whether it's a cozy home renovation or a bold commercial transformation.",
  },
  {
    slug: "home-reno",
    title: "Home Renovation",
    imageUrl: "/images/2.jpg",
    description:
      "Creating spaces that inspire through craftsmanship, communication, and attention to detail.",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    imageUrl: "/images/3.jpg",
    description:
      "Creating spaces that inspire through craftsmanship, communication, and attention to detail.",
  },
  {
    slug: "urban-oasis",
    title: "Urban Oasis",
    imageUrl: "/images/4.jpg",
    description:
      "We specialize in residential and commercial renovations. With years of experience...",
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
      {/* Overlay */}
      {/* Using the last specified overlay: black with 50% opacity */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

      {/* Text Content Wrapper - Using styles from previous step */}
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
  description: "Explore the remodeling services we offer in Houston, including kitchens, bathrooms, basements, home additions, and more. See how Lake Property Solutions can help with your next project."
};


function Services() {
  return (
    <>
    <NavBar/>
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

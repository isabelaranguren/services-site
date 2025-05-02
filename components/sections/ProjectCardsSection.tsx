import Image from "next/image"; // Import next/image

const projects = [
  {
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    imageUrl: "/images/kitchen-reno.webp",
    description:
      "With years of experience, and a commitment to quality, we take pride in creating spaces that inspire.",
  },
  {
    slug: "basement-finishing",
    title: "Basement Finishing",
    imageUrl: "/images/basement-reno.jpg",
    description:
      "We believe your space should reflect your unique personality, lifestyle, and vision.",
  },
  {
    slug: "bathroon-renovation",
    title: "Bathroon Renovation",
    imageUrl: "/images/bathroom-reno.jpg",
    description:
      "Dedicated to turning your ideas into reality, whether it's a cozy home renovation or a bold commercial transformation.",
  },
  {
    slug: "home-additions",
    title: "Home Additions",
    imageUrl: "/images/4.jpg",
    description:
      "Creating spaces that inspire through craftsmanship, communication, and attention to detail.",
  },
];

function ProjectCardsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {" "}
          {projects.map((project) => (
            <div key={project.slug} className="group">
              <a
                href={`/projects/${project.slug}`}
                className="block mb-5 overflow-hidden relative h-[400px] bg-gray-100" /* <-- HEIGHT CHANGE HERE */
              >
                <Image
                  src={project.imageUrl}
                  alt={`Image of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </a>
              <div>
                <a
                  href={`/projects/${project.slug}`}
                  className="block text-xl lg:text-2xl font-semibold text-gray-900 hover:text-amber-600 transition mb-1 line-clamp-2"
                >
                  {project.title}
                </a>
                <p className="text-gray-600 text-sm lg:text-base leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectCardsSection;

import FourBannerSection from "../components/sections/FourBannerSection";

export const metadata = {
  title: "About Us",
  description: "Learn more about our company.",
};

export default function About() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
      <FourBannerSection />
    </div>
  );
}

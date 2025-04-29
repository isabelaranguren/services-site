import PageHero from "../components/PageHero";
import PictureGrid from "../components/PictureGrid";
import ContactSection from "../components/sections/ContactSection";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with us to learn more about our services and how we can help you.",
};

export default function Contact() {
  return (
    <div>
      <PageHero
        title="We’re creating environments that feel like home."
        description="We specialize in residential and commercial renovations that blend functionality with beauty. With years of experience, a passion for design, and a commitment to quality, we create spaces that inspire."
      />
      <PictureGrid />
      <ContactSection />
    </div>
  );
}

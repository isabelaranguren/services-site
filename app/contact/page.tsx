import NavBar from "../components/Navbar";
import PageHero from "../components/PageHero";
import PictureGrid from "../components/PictureGrid";
import ContactSection from "../components/sections/ContactSection";

export const metadata = {
  title: "Contact Us",
  description: "Ready to start your next project? Contact Luna Property Solutions for a free consultation or to ask any questions—we’re here to help.",
};

export default function Contact() {
  return (
    <div>
      <NavBar initialStyle="white" />

      <PageHero
        title="We’re creating environments that feel like home."
        description="We specialize in residential and commercial renovations that blend functionality with beauty. With years of experience, a passion for design, and a commitment to quality, we create spaces that inspire."
      />
      <PictureGrid />
      <ContactSection />
    </div>
  );
}

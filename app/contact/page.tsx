import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/Hero/PageHero";
import NavBar from "@/components/layout/Navbar";
import PictureGrid from "@/components/PictureGrid";
import { BUSINESS_INFO } from "@/lib/constants";
import { contactPageSchema } from "@/lib/schema";
import Head from "next/head";

export const metadata = {
  title: "Contact Us",
  description: "Ready to start your next project? Contact Luna Property Solutions for a free consultation or to ask any questions—we’re here to help.",
};

export default function Contact() {
  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(contactPageSchema),
          }}  
        />
      </Head>
      <NavBar initialStyle="white" />
      <PageHero
        title="We’re creating environments that feel like home."
        description="We specialize in residential and commercial renovations that blend functionality with beauty. With years of experience, a passion for design, and a commitment to quality, we create spaces that inspire."
      />
      <PictureGrid />
      <section className="py-16 md:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-col gap-12 md:flex-row md:gap-12 lg:gap-[50px]">
            <div className="flex w-full flex-col gap-8 md:w-2/5 md:gap-12">
              <div>
                <h5 className="mb-5 text-xl font-semibold text-text-dark">
                  Contact Us
                </h5>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="block text-base text-dark-gray transition-colors hover:text-primary"
                >
                  {BUSINESS_INFO.phone}
                </a>
                <a
                  href={`mailto:${BUSINESS_INFO.email}`}
                  className="mt-2.5 block text-base text-dark-gray transition-colors hover:text-primary"
                >
                  {BUSINESS_INFO.email}
                </a>
              </div>
            </div>

            {/* Right Block: Form */}
            <div className="w-full md:w-3/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

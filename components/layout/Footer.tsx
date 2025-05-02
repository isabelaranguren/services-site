import Link from "next/link";
import React from "react";
import { BUSINESS_INFO } from "@/lib/constants";

const Footer = () => {
  return (
    <footer className="bg-[#2d3c56] px-4 pb-16 pt-16 md:pb-20 md:pt-20 lg:pt-20 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-10 md:mb-20 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-col gap-10 lg:max-w-[55%] lg:gap-12">
            <p className="text-4xl font-normal uppercase leading-tight ">
              Let's Build Something Amazing Together.
            </p>
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              <Link
                href="/home-1"
                className="text-base capitalize text-primary transition-colors"
              >
                home
              </Link>
              <Link
                href="/projects"
                className="text-base capitalize text-primary transition-colors hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/about-us"
                className="text-base capitalize text-primary transition-colors hover:text-white"
              >
                about us
              </Link>
              <Link
                href="/services"
                className="text-base capitalize text-primary transition-colors hover:text-white"
              >
                Services
              </Link>
              <Link
                href="/contact-us"
                className="text-base capitalize text-primary transition-colors hover:text-white"
              >
                contact
              </Link>
            </nav>
          </div>
          <div className="flex w-full flex-col gap-8 border-t border-primary pt-8 lg:w-auto lg:max-w-[40%] lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-16">
            <div>
              <div className="mb-2 text-sm capitalize text-primary">
                / Main office /
              </div>{" "}
              <p className="text-2xl leading-tight  lg:text-3xl">
                {" "}
                {/* .adress-footer */}
                359 Vanderbilt Ave, Brooklyn, NY 11238, USA
              </p>
            </div>
            <div className="flex gap-5">
              {" "}
              <Link
                href="http://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary transition-colors hover:text-white"
              >
                IG
              </Link>
              <Link
                href="http://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary transition-colors hover:text-white"
              >
                TW
              </Link>
              <Link
                href="http://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary transition-colors hover:text-white"
              >
                FB
              </Link>
              <Link
                href="http://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl text-primary transition-colors hover:text-white"
              >
                LI
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 text-center text-base md:flex-row md:text-left">
          <div className="text-primary">
            © {BUSINESS_INFO.name}. All Rights Reserved.
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:gap-4">
            <div className="text-primary">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
              >
                Template
              </a>{" "}
              by{" "}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
              >
                IA
              </a>
            </div>
            <div className="text-primary">
              Powered by{" "}
              <a
                href="https://webflow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors hover:text-primary"
              >
                Webflow
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

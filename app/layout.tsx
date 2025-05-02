import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import NavBar from "./components/Navbar";
import Footer from "./components/layout/Footer";
import { localBusinessSchema } from "./lib/schema";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Home Renovations & Additions in Houston | Luna Property Solutions",
  description:
    "We help homeowners in Houston bring their ideas to life with kitchen remodels, bathroom updates, basement finishing, and more. Practical design, honest work, and a team that listens.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([localBusinessSchema]),
          }}
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

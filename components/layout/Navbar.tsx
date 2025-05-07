"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { BUSINESS_INFO } from "@/lib/constants";
import Button from "../ui/Button";

type NavStyle = "white" | "colored" | "transparent";

interface NavBarProps {
  initialStyle?: NavStyle;
  bgColor?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  initialStyle = "white", // Default to 'white' if no prop is passed
  bgColor = "bg-[#2d3c56]",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- Dropdown Logic ---
  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  let finalNavClasses = "fixed top-0 w-full z-50 transition-all duration-300 ";
  let finalTextClasses = "text-sm font-medium ";
  let finalIconClasses = "";
  let finalLogoSrc = BUSINESS_INFO.brand.logo; // Default logo
  // Removed unused variable finalButtonVariant

  if (scrolled) {
    finalNavClasses += `${bgColor} shadow border-b border-white/20`; // Use specified bgColor, add shadow and subtle border
    finalTextClasses += "text-white hover:text-gray-200";
    finalIconClasses = "text-white hover:text-gray-200";
    finalLogoSrc = BUSINESS_INFO.brand.logo_white; // Use white logo
    // Removed unused assignment to finalButtonVariant
  } else {
    switch (initialStyle) {
      case "colored":
        finalNavClasses += `${bgColor}`; // Use specified bgColor
        finalTextClasses += "text-white hover:text-gray-200";
        finalIconClasses = "text-white hover:text-gray-200";
        finalLogoSrc = BUSINESS_INFO.brand.logo_white;
        break;
      case "transparent":
        finalNavClasses += "bg-transparent";
        finalTextClasses += "text-white hover:text-gray-200";
        finalIconClasses = "text-white hover:text-gray-200";
        finalLogoSrc = BUSINESS_INFO.brand.logo_white; // Use white logo initially
        break;
      case "white":
      default:
        finalNavClasses += "bg-white";
        finalTextClasses += "text-gray-700 hover:text-gray-900";
        finalIconClasses = "text-gray-500 hover:text-gray-900";
        finalLogoSrc = BUSINESS_INFO.brand.logo; // Use standard logo
        break;
    }
  }

  const navClasses = finalNavClasses;
  const textClasses = finalTextClasses;
  const iconClasses = finalIconClasses;
  const logoSrc = finalLogoSrc;

  // --- Component Return ---
  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMenus}
              className="flex items-center gap-2"
            >
              <div>
                <Image
                  src={logoSrc} // Dynamic logo source
                  alt={BUSINESS_INFO.name}
                  width={100}
                  height={40}
                  style={{ height: "40px", width: "auto" }}
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center gap-8">
            {navigationItems.map((item, index) => (
              <div key={item.name || index} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className={`flex items-center gap-1 ${textClasses}`} // Dynamic text classes
                      aria-haspopup="true"
                      aria-expanded={openDropdown === index}
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          openDropdown === index ? "rotate-180" : ""
                        } `}
                        aria-hidden="true"
                        style={{ color: "currentColor" }} // Inherit text color
                      />
                    </button>
                    {/* Dropdown always white */}
                    {openDropdown === index && (
                      <div className="absolute left-0 mt-2 w-64 origin-top-left bg-white shadow-lg border border-gray-200 rounded-md ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subitem.name || subindex}
                              href={subitem.href}
                              onClick={closeMenus}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                              role="menuitem"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={textClasses} // Dynamic text classes
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="primary"
              href={`tel:${BUSINESS_INFO.phone}`}
            >
              Give Us a Call
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${iconClasses}`} // Dynamic icon classes
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Always white background for readability */}
      {isOpen && (
        <div
          className="md:hidden bg-white shadow-lg border-t border-gray-200"
          id="mobile-menu"
        >
          <div className="px-4 pt-2 pb-4 space-y-3 sm:px-6">
            {/* Mobile Nav Items */}
            {navigationItems.map((item, index) => (
              <div key={`mobile-${item.name || index}`}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex w-full items-center justify-between py-2 text-gray-700 hover:text-gray-900 text-base font-medium rounded-md"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform text-gray-500 ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4 mt-1 space-y-1 flex flex-col border-l border-gray-200">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={`mobile-sub-${subitem.name || subindex}`}
                            href={subitem.href}
                            onClick={closeMenus}
                            className="block py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 text-base rounded-md px-3"
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={closeMenus}
                    className="block py-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 text-base font-medium rounded-md px-3"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            {/* Mobile Action Button */}
            <div className="pt-4 border-t border-gray-200">
              <Button variant="primary" className="w-full" onClick={closeMenus}>
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;

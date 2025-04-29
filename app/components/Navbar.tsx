"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { navigationItems } from "@/data/navigation";
import Button from "./ui/Button";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (index: number) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenus = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow border-b border-gray-200" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              onClick={closeMenus}
              className="flex items-center gap-2"
            >
              <span className="bg-blue-600 text-white p-1 text-xs flex items-center justify-center w-6 h-6">
                ◆
              </span>
              <span className="text-2xl font-bold text-gray-900">
                renovation
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center gap-8">
            {navigationItems.map((item, index) => (
              <div key={index} className="relative">
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center gap-1 text-gray-700 hover:text-gray-900 text-sm font-medium"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="absolute mt-2 w-64 bg-white shadow border border-gray-200">
                        <div className="flex flex-col">
                          {item.submenu.map((subitem, subindex) => (
                            <Link
                              key={subindex}
                              href={subitem.href}
                              onClick={() => setOpenDropdown(null)}
                              className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
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
                    className="text-gray-700 hover:text-gray-900 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="primary">Contact Us</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-500 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex w-full items-center justify-between text-gray-700 hover:text-gray-900 text-base"
                    >
                      {item.name}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          openDropdown === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === index && (
                      <div className="pl-4 mt-2 flex flex-col border-l border-gray-200">
                        {item.submenu.map((subitem, subindex) => (
                          <Link
                            key={subindex}
                            href={subitem.href}
                            onClick={closeMenus}
                            className="block py-2 text-gray-700 hover:text-gray-900 text-base"
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
                    className="block text-gray-700 hover:text-gray-900 text-base"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
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

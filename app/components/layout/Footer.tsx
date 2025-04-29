import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Renovation. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

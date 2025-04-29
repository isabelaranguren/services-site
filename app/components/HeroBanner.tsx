import React from "react";

const HeroBanner = () => {
  const colors = {
    dark: "#241c18",
    primary: "#d2c3b2",
    white: "#ffffff",
    darkGray50: "rgba(175, 175, 175, 0.5)", // #afafaf80
    darkGray30: "rgba(175, 175, 175, 0.3)", // #afafaf4d
  };

  const bannerStyle: React.CSSProperties = {
    backgroundColor: colors.dark,
    backgroundImage: `linear-gradient(180deg, rgba(210, 195, 178, 0.1), ${colors.dark})`, // #d2c3b21a to dark
  };

  const inputStyle: React.CSSProperties = {
    borderColor: colors.darkGray50,
    backgroundColor: "transparent",
    color: colors.white,
  };

  // Styles for the button - combining Tailwind and inline for complex parts
  // NOTE: Background image and precise padding-right for arrow might need custom CSS or adjustments
  const buttonStyle: React.CSSProperties = {
    borderColor: colors.darkGray30,
    backgroundColor: colors.darkGray30,
    color: colors.white,
    // Add backdrop-filter potentially via Tailwind class if configured, or ignore if not critical
    // backgroundImage: 'url("...")', // Add your arrow image URL here
    // backgroundPosition: 'right 30px center', // Adjust position as needed
    // backgroundSize: '70px 10px', // Adjust size
    // backgroundRepeat: 'no-repeat',
    // paddingRight: '54px', // Adjust base padding accordingly
  };

  return (
    <div className="relative h-[400px] bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg">Get in touch with our team</p>
      </div>
    </div>
  );
};

export default HeroBanner;

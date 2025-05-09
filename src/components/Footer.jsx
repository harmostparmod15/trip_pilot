// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto w-full">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TripPilot. All rights reserved.
        </p>

        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-sm">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

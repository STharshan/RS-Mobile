import React, { useState } from "react";
import {
  FiFacebook,
  FiMenu,
  FiX,
} from "react-icons/fi";
import ThemeToggle from "./ThemeToggle"; // Your theme toggle component

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: <FiFacebook />, href: "https://www.facebook.com/people/RS-Mobile-Services/100092690151352/" },
  ];

  return (
    <nav className="bg-[#1b1b1b] text-white px-6 md:px-12 lg:px-20 shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-18">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/logo.png" // Replace with your logo
            alt="Crank Logo"
            className="w-36 h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-1 font-semibold text-white hover:text-[#ef5a24] transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition-colors"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Theme Toggle */}
        <div className="">
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden bg-[#ef5a24] p-2 rounded-full text-xl"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#222] rounded-lg p-4 space-y-3">
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-gray-200 hover:text-[#ef5a24] border-b border-gray-700 last:border-0 transition-colors"
            >
              {item.name}
            </a>
          ))}

          <div className="flex gap-3 pt-4">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition-colors"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

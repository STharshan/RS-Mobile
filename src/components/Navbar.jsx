import React, { useState } from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { FaPinterest } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-[#1b1b1b] text-white px-6 md:px-12 lg:px-20 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">

                {/* Logo */}
                <div className="flex items-center gap-3">
                    <img
                        src="/logo.png" // 👈 your logo file
                        alt="Crank Logo"
                        className="w-50 h-22 object-contain"
                    />
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-8">
                    {[
                        { name: "Home", active: true },
                        { name: "About Us" },
                        { name: "Services" },
                        { name: "Contact" },
                    ].map((item) => (
                        <button
                            key={item.name}
                            className={`flex items-center gap-1 font-semibold text-white hover:text-[#ef5a24]
                                }`}
                        >
                            {item.name}
                        </button>
                    ))}
                </div>

                {/* Social Icons */}
                <div className="hidden lg:flex items-center gap-3">
                    <div className="flex items-center gap-3">
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiFacebook />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiTwitter />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiInstagram />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FaPinterest />
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden bg-[#ef5a24] p-2 rounded-full text-xl"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="lg:hidden mt-4 bg-[#222] rounded-lg p-4 space-y-3">
                    {[
                        "Home",
                        "About Us",
                        "Services",
                        "Contact",
                    ].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block py-2 text-gray-200 hover:text-[#ef5a24] border-b border-gray-700 last:border-0"
                        >
                            {item}
                        </a>
                    ))}

                    <div className="flex gap-3 pt-4">
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiFacebook />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiTwitter />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FiInstagram />
                        </a>
                        <a href="#" className="bg-[#2c2c2c] p-2 rounded-full hover:bg-[#ef5a24] transition">
                            <FaPinterest />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

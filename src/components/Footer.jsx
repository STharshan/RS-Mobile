import React from "react";
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {

    return (
        <footer className="bg-black border-t border-gray-800 py-12">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Company Info */}
                    <div>
                        <div className="flex items-center space-x-3">
                            <span className="text-2xl font-bold bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                                RS <span className="text-gray-400">Mobile Services</span>
                            </span>
                        </div>
                        <p className="text-gray-400 mb-4">
                            High-quality performance tuning and emissions solutions for cars
                            and LCVs. Maximize your vehicle’s power, efficiency, and
                            reliability.
                        </p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a
                                //href="https://www.facebook.com/share/16eb5kcuGU/?mibextid=wwXIfr"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebookF
                                    className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors"
                                    size={20}
                                />
                            </a>

                            {/* Instagram */}
                            <a
                                //href="https://www.instagram.com/afmokperformance/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram
                                    className="text-gray-400 hover:text-pink-600 cursor-pointer transition-colors"
                                    size={20}
                                />
                            </a>

                            {/* TikTok */}
                            <a
                                //href="https://www.tiktok.com/@afmok.performance"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                            >
                                <FaTiktok
                                    className="text-gray-400 hover:text-gray-600 cursor-pointer transition-colors"
                                    size={20}
                                />
                            </a>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                            Services
                        </h3>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    MOT Repair
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Brakes
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Suspensions
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Car Services
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Diagnostics
                                </a>
                            </li>
                            <li>
                                <a href="#services" className="hover:text-white transition-colors">
                                    Fleet & Lease
                                </a>
                            </li>
                            {/* <li>
                <Link to="/privacy-policy" className="hover:text-gray-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-gray-300">
                  Terms & Conditions
                </Link>
              </li> */}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                            Contact Info
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            {/* Address */}
                            <li className="flex items-start space-x-3">
                                <FaMapMarkerAlt className="text-[#00c6ff] mt-1" size={18} />
                                <a
                                    href="https://maps.app.goo.gl/RMSZjnx8tHW65SYF9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors"
                                    aria-label="View AF-MOK Performance on Google Maps"
                                >
                                    10 Campion Grove,
                                    <br />
                                    Stamford PE9 4BY,
                                    <br />
                                    United Kingdom
                                </a>
                            </li>

                            {/* Phone */}
                            <li className="flex items-center space-x-3">
                                <FaPhoneAlt className="text-[#00c6ff]" size={18} />
                                <a
                                    href="tel:+44 1780 917600"
                                    className="hover:text-white transition-colors"
                                    aria-label="Call AF-MOK Performance"
                                >
                                    +44 1780 917600
                                </a>
                            </li>

                            {/* Email */}
                            <li className="flex items-center space-x-3">
                                <FaEnvelope className="text-[#00c6ff]" size={18} />
                                <a
                                    href="mailto:sam.ferries@rsmobileservices.co.uk"
                                    className="hover:text-white transition-colors break-all"
                                    aria-label="Email AF-MOK Performance"
                                >
                                    sam.ferries@rsmobileservices.co.uk
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 RS Mobile Services. All rights reserved.</p>
                </div>

                {/* Bottom Bar */}
                <div className="mt-2 text-center font-semibold text-gray-400">
                    <p>
                        Powered by{" "}
                        <a
                            href="https://www.ansely.co.uk/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#4ab8e9] hover:underline"
                        >
                            Ansely
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}

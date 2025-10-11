import React from "react";
import { FaFacebookF, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

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
            <p className="text-gray-400 mb-4 mt-3 leading-relaxed">
              From oil changes to engine diagnostics, our fully equipped vans ensure your vehicle runs smoothly without the hassle of visiting a workshop.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/RS-Mobile-Services/100092690151352/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF
                  className="text-gray-400 hover:text-blue-600 cursor-pointer transition-colors duration-300"
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
              {[
                "MOT Repair",
                "Brakes",
                "Suspensions",
                "Car Services",
                "Diagnostics",
                "Fleet & Lease",
              ].map((service, index) => (
                <li key={index}>
                  <a href="#services" className="hover:text-white transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Contact Info
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-[#00c6ff] mt-1" size={18} />
                <a
                  href="https://maps.app.goo.gl/RMSZjnx8tHW65SYF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  40 Mile Radius From Stamford
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-[#00c6ff]" size={18} />
                <a
                  href="tel:+441780917600"
                  className="hover:text-white transition-colors duration-300"
                >
                  +44 1780 917600
                </a>
              </li>

              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-[#00c6ff]" size={18} />
                <a
                  href="mailto:sam.ferries@rsmobileservices.co.uk"
                  className="hover:text-white transition-colors duration-300 break-all"
                >
                  sam.ferries@rsmobileservices.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 RS Mobile Services. All rights reserved.</p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-2 flex flex-col sm:flex-row justify-center items-center gap-3 text-center font-semibold text-gray-400">
          {/* Left: Terms & Privacy */}
          <div className="flex gap-4 text-sm">
            <Link
              to="/terms"
              className="text-gray-400 hover:text-[#00c6ff] transition duration-300"
            >
              Terms & Conditions
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-[#00c6ff] transition duration-300"
            >
              Privacy Policy
            </Link>
          </div>

          {/* Center: Powered by Ansely (unchanged) */}
          <p className="text-center font-semibold text-gray-400">
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

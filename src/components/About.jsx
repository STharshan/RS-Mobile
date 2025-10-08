import React from "react";
import { FaToolbox } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const AboutSection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        
        {/* LEFT IMAGES */}
        <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
          {/* Background image (moved higher) */}
          <div
            className="absolute -top-6 sm:-top-8 md:-top-10 left-4 sm:left-6 
                       w-64 sm:w-72 md:w-80 h-[350px] sm:h-[390px] md:h-[430px] 
                       z-0 rounded-sm overflow-hidden"
          >
            <img
              src="image.png"
              alt="Workshop background"
              className="w-full h-full object-cover opacity-80"
            />
          </div>

          {/* Foreground image (moved lower) */}
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=500&fit=crop"
            alt="Mechanic"
            className="relative z-10 rounded-sm shadow-lg w-[260px] sm:w-[280px] md:w-[320px] 
                       h-[340px] sm:h-[380px] md:h-[420px] object-cover mt-10 sm:mt-12 md:mt-16"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2">
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <FaToolbox className="text-[#ef5a24] text-lg sm:text-xl" />
            <p className="text-[#ef5a24] font-semibold uppercase tracking-wide text-xs sm:text-sm">
              Who We Are
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3 sm:mb-4 leading-tight sm:leading-snug">
            WHERE IT ALL STARTED
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
            <span className="block font-semibold text-gray-900 mb-2">
              Delivering Expert Mobile Vehicle Maintenance
            </span>
            RS Mobile Services was founded by <strong>Sam Ferries</strong> to bring professional car repair 
            and servicing directly to customers through a fully equipped mobile setup. 
            The business is now solely owned and operated by Sam, built on trust, skill, and convenience.
          </p>

          {/* Profile + Bullet Points */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Profile Box */}
            <div className="bg-gray-100 p-4 rounded-lg flex items-center gap-3 sm:gap-4 shadow-sm w-80">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt="Sam Ferries"
                className="w-14 h-14 rounded-full object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-sm sm:text-base">Sam Ferries</h4>
                <p className="text-gray-500 text-xs sm:text-sm">Founder, RS Mobile Services</p>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              <li className="flex items-start gap-2 sm:gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] flex-shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">Our experience is proven</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] flex-shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">Qualified, reliable, and service-driven</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3">
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] flex-shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">
                  Decades of expertise across top automotive brands
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

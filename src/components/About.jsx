import React, { useEffect } from "react";
import { FaToolbox } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });
  }, []);

  return (
    <section
      id="about"
      className="bg-white scroll-m-10 dark:bg-black text-black dark:text-gray-100 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mt-10">
        {/* LEFT IMAGES */}
        <div
          className="relative flex justify-center lg:justify-end order-2 lg:order-1"
          data-aos="fade-right"
        >
          {/* Background image */}
          <div
            className="absolute -top-6 sm:-top-8 md:-top-10 left-4 sm:left-6 
                       w-64 sm:w-72 md:w-80 h-[350px] sm:h-[390px] md:h-[430px] 
                       z-0 rounded-sm overflow-hidden"
          >
            <img
              src="image.png"
              alt="Workshop background"
              className="w-full h-full object-cover opacity-80 dark:opacity-60 transition-opacity duration-500"
            />
          </div>

          {/* Foreground image */}
          <img
            src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=500&fit=crop"
            alt="Mechanic"
            className="relative z-10 rounded-sm shadow-lg w-[260px] sm:w-[280px] md:w-[320px] 
                       h-[340px] sm:h-[380px] md:h-[420px] object-cover mt-10 sm:mt-12 md:mt-16"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="order-1 lg:order-2" data-aos="fade-left" data-aos-delay="200">
          {/* Subtitle */}
          <div className="flex items-center gap-2 mb-3">
            <FaToolbox className="text-[#ef5a24] dark:text-[#4ab8e9]  text-lg sm:text-xl" />
            <p className="text-[#ef5a24] dark:text-[#4ab8e9]  font-semibold text-lg uppercase tracking-wide sm:text-sm">
              Who We Are
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 sm:mb-4 leading-tight sm:leading-snug">
            WHERE IT ALL STARTED
          </h2>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 md:mb-10 leading-relaxed text-sm sm:text-base">
            <span className="block font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Delivering Expert Mobile Vehicle Maintenance
            </span>
            RS Mobile Services was founded by <strong>Sam Ferries</strong> to bring professional car repair
            and servicing directly to customers through a fully equipped mobile setup. 
            The business is now solely owned and operated by Sam, built on trust, skill, and convenience.
          </p>

          {/* Profile + Bullet Points */}
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Profile Box */}
            <div
              className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg flex items-center gap-3 sm:gap-4 shadow-sm w-80 transition-colors duration-500"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <img
                src="test.png"
                alt="Sam Ferries"
                className="w-18 h-10  object-cover flex-shrink-0"
              />
              <div>
                <h4 className="text-gray-900 dark:text-gray-100 font-semibold text-sm sm:text-base">
                  Sam Ferries
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">
                  Founder, RS Mobile Services
                </p>
              </div>
            </div>

            {/* Bullet List */}
            <ul className="space-y-3 sm:space-y-4 text-gray-700 dark:text-gray-300">
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] dark:text-[#4ab8e9] flex-shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">Our experience is proven</span>
              </li>
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] dark:text-[#4ab8e9] flex-shrink-0 mt-1 text-lg" />
                <span className="text-sm sm:text-base">
                  Qualified, reliable, and service-driven
                </span>
              </li>
              <li
                className="flex items-start gap-2 sm:gap-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <IoMdCheckmarkCircleOutline className="text-[#ef5a24] dark:text-[#4ab8e9] flex-shrink-0 mt-1 text-lg" />
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

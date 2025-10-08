// src/components/FindUs.jsx
"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FindUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section
      className="py-16 px-4 bg-white dark:bg-black transition-colors duration-500"
      id="find-us"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <p
          className="text-[#ef5a24] dark:text-[#4ab8e9] font-semibold tracking-widest mb-3 uppercase text-lg"
          data-aos="fade-up"
        >
          Find Us
        </p>

        <h2
          className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-8"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Visit Our Workshop Location
        </h2>

        {/* Google Map */}
        <div
          className="rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 w-full h-[400px]"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <iframe
            title="Google Map - RS Mobile Services"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d151.24596664559945!2d-0.514958!3d52.6611432!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487789090fcbab6d%3A0xa43484cc851f8227!2sRS%20Mobile%20Services%20LTD!5e0!3m2!1sen!2slk!4v1759940991750!5m2!1sen!2slk"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

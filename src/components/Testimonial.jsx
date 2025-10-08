import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Bennett",
    role: "Client",
    image: "/test.png",
    text: "With over four decades of experience providing solutions Everything you need to start selling",
  },
  {
    name: "Grace Rashford",
    role: "Client",
    image: "https://i.pravatar.cc/150?img=2",
    text: "With over four decades of experience providing solutions Everything you need to start selling",
  },
  {
    name: "Stefanie Ronu",
    role: "AutoExpert",
    image: "https://i.pravatar.cc/150?img=3",
    text: "With over four decades of experience providing solutions Everything you need to start selling",
  },
  {
    name: "John Smith",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Professional and reliable service. Highly recommend their expertise and support!",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth; // scroll by container width
      if (direction === "left") {
        current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="py-1 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#ef5a24] font-semibold tracking-widest uppercase">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
            What say people about <br /> our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-15 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition flex items-center justify-center z-20"
        >
          <FaChevronLeft size={20} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-15 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-red-500 hover:text-white transition flex items-center justify-center z-20"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory px-2 py-1 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 h-70 bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-t-[#ef5a24] border-r-[100px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-white p-1 bg-[#ef5a24]">
                      <img
                        src="/test.png"
                        alt={testimonial.name}
                        className="w-22 mt-3 h-10 mx-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-100 py-3 px-4 rounded">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed pb-6">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

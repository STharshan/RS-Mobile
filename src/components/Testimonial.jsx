import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Michael Bennett",
    role: "Client",
    image: "https://i.pravatar.cc/150?img=1",
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
];

export default function Testimonials() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-3">
            <FaQuoteLeft className="text-red-600 text-xl" />
            <p className="text-red-600 font-semibold tracking-wider uppercase text-sm">
              OUR TESTIMONIALS
            </p>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            What say people about
            <br />
            our company
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden relative"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[100px] border-t-red-600 border-r-[100px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6">
                <div className="flex items-center gap-4 mb-6">
                  {/* Profile Image with Dotted Border */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-white p-1 bg-red-600">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Role on Gray Background */}
                  <div className="flex-1 bg-gray-100 py-3 px-4 rounded">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
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
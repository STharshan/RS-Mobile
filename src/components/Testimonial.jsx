import React, { useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    name: "Chris Theobald",
    role: "Client",
    image: "/test.png",
    text: "Incredible service!! Working away car lost all power. Within hour and a half Sam was there and fixed the issue and had me back on the road. Couldn’t fault him at all. Top man! Thank you again!",
  },
  {
    name: "Simon McGregor",
    role: "Client",
    image: "https://i.pravatar.cc/150?img=2",
    text: `This guy has helped me out twice! The first time I had broken down on the M1 and was recovered home by the RAC but was let down by a main dealer who wasn’t interested! so I rang RS mobile who was out when he promised and fixed my car and another fault quickly and efficiently and all for a reasonable price!
Highly recommended!`,
  },
  {
    name: "Emma Daley",
    role: "AutoExpert",
    image: "https://i.pravatar.cc/150?img=3",
    text: "Absolutely amazing thought it was one thing just turned out to be another really friendly and helped me get back on the road I appreciate the help would 100% recommend use again",
  },
  {
    name: "Daniel McDonald",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Brilliant service from the outset, I messaged RS mobile services as my car needed new brake pads/discs, Sam responded straight away and the very next day popped round and swiftly replaced the pads and discs for me at a very reasonable price. Will definitely use again and highly recommend. Thanks again Sam!",
  },
  {
    name: "Naomi Boddington",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "From initial contact to finished repair the service was brill! Highly recommend and will use for all car requirements moving forward!",
  },
  {
    name: "Sherryl Edwards",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: `Excellent service from RS Mobile Services. It’s great to have someone come to the house while I was at work instead of having to book in at a garage.
Definitely recommend them`,
  },
  {
    name: "Rob Fishlock",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Was visiting the area for long break and had car issues. They came out, diagnosed the issue, sourced the part and fixed within 24 hours which enabled me to get home as planned. Great price and service, highly recommend them",
  },
  {
    name: "Daniel McDonald",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Brilliant service from the outset, I messaged RS mobile services as my car needed new brake pads/discs, Sam responded straight away and the very next day popped round and swiftly replaced the pads and discs for me at a very reasonable price. Will definitely use again and highly recommend. Thanks again Sam!",
  },
  {
    name: "emma smart",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: "Sam was so good from the start. Quick to reply when I was enquiring and reliable to the end. Even collected and dropped off my car for me . Highly recommend and will definitely use him again . Honest from the start , as to what work actually needed doing . Some repairs and a full service , value for money and so reliable . Thank you so much Sam !!",
  },
  {
    name: "Barrie Worley",
    role: "Partner",
    image: "https://i.pravatar.cc/150?img=4",
    text: `Sam came to our house to replace our car battery. Fantastic service and will definitely be using his services again. Sam is prompt, polite and professional. Thanks Sam.`,
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 bg-white dark:bg-black transition-colors duration-500 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#ef5a24] dark:text-[#4ab8e9] font-semibold tracking-widest uppercase text-lg">
            Our Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mt-2">
            What people say about <br /> our company
          </h2>
        </div>

        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-[#4ab8e9] p-3 rounded-full shadow-md hover:bg-[#ef5a24] hover:text-white transition z-20 group"
        >
          <FaChevronLeft className="transition-transform duration-300 group-hover:-translate-x-1" size={18} />
        </button>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-[#4ab8e9] p-3 rounded-full shadow-md hover:bg-[#ef5a24] hover:text-white transition z-20 group"
        >
          <FaChevronRight className="transition-transform duration-300 group-hover:translate-x-1" size={18} />
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollRef}
          className="flex space-x-6  overflow-x-auto  scroll-smooth snap-x snap-mandatory px-2 py-8 hide-scrollbar"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="fade-up"           // Added AOS animation
              data-aos-delay={index * 100} // Optional stagger effect
              className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-[#4ab8e9] active:shadow-[#4ab8e9] dark:hover:shadow-[#ef5a24] dark:active:shadow-[#ef5a24] relative snap-start"
            >
              {/* Red Corner Triangle */}
              <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] border-t-[#ef5a24] border-r-[80px] border-r-transparent"></div>

              {/* Profile Section */}
              <div className="relative pt-6 px-6 pb-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-dashed border-white p-1 bg-[#ef5a24]">
                      <img
                        src="test.png"
                        alt={testimonial.name}
                        className="w-22 mt-3 h-10 mx-auto object-cover"
                      />
                    </div>
                  </div>

                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 py-3 px-4 rounded-lg">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Client
                    </p>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed">
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

import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function InputField({
  label,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  error,
  required = false,
  textarea = false,
  rows = 3,
}) {
  const baseClasses =
    "w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 transition-colors duration-200";
  const lightClasses =
    "bg-white border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-[#4ab8e9]";
  const darkClasses =
    "bg-slate-800 border-slate-700 text-white placeholder-slate-400 focus:ring-[#4ab8e9]";
  const errorClasses = error ? "border-red-500 focus:ring-red-500" : "";

  return (
    <div data-aos="fade-up">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
          className={`${baseClasses} ${errorClasses} ${lightClasses} dark:${darkClasses}`}
          required={required}
        />
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`${baseClasses} ${errorClasses} ${lightClasses} dark:${darkClasses}`}
          required={required}
        />
      )}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    carReg: "",
    makeModel: "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState({ phone: "", email: "" });

  const phoneRegex = /^(?:\+44|0)[1-9]\d{8,9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phone") {
      setErrors((prev) => ({
        ...prev,
        phone: phoneRegex.test(value)
          ? ""
          : "Invalid UK phone number. Use +44 or 0 followed by 9–10 digits.",
      }));
    }

    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        email: emailRegex.test(value) ? "" : "Invalid email address format.",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (errors.phone || errors.email) return;

    const waMessage = `Hello, I need assistance. Here are the details:\n\nName: ${formData.fullName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCar Registration: ${formData.carReg}\nMake & Model: ${formData.makeModel}\nLocation: ${formData.location}\nMessage: ${formData.message}`;
    const waHref = `https://wa.me/447494481443?text=${encodeURIComponent(
      waMessage
    )}`;
    window.open(waHref, "_blank");

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      carReg: "",
      makeModel: "",
      location: "",
      message: "",
    });
  };

  const phoneDisplay = "+44 1780 917600";
  const phoneHref = "tel:+44 1780 917600";
  const emailDisplay = "sam.ferries@rsmobileservices.co.uk";
  const address = `10 Campion Grove, Stamford PE9 4BY, United Kingdom`;

  return (
    <section
      id="contact"
      data-aos="fade-up"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-12">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="100">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <p className="text-[#ef5a24] font-semibold uppercase tracking-wide text-lg">
              GET IN TOUCH
            </p>
          </h2>
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 mb-3 max-w-3xl mx-auto sm:mb-4 leading-tight sm:leading-snug">
            Ready to start your transformation? Contact us today and take the
            first step towards peak performance.
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT: Contact Info */}
          <div data-aos="fade-right" data-aos-delay="200">
            <div className="bg-white dark:bg-gray-800 shadow-xl hover:shadow-[#4ab8e9]  z-10 border border-slate-200 dark:border-slate-700 rounded-xl p-6 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-[#ef5a24] mb-6">
                Contact Information
              </h3>

              {/* Address */}
              <div className="flex items-start space-x-4 mb-6">
                <a
                  href="https://maps.app.goo.gl/RMSZjnx8tHW65SYF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4"
                >
                  <div className="bg-gray-100 dark:bg-neutral-700 text-black dark:text-white p-3 rounded-lg shadow-sm">
                    <FaMapMarkerAlt size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#ef5a24]">
                      Address
                    </h4>
                    <p className="text-[#ef5a24] dark:text-gray-300 hover:text-[#4ab8e9] whitespace-pre-line">
                      {address}
                    </p>
                  </div>
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gray-100 dark:bg-neutral-700 text-black dark:text-white p-3 rounded-lg shadow-sm">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#ef5a24]">Phone</h4>
                  <a
                    href={phoneHref}
                    className="text-[#ef5a24] hover:text-[#4ab8e9] transition"
                  >
                    {phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="bg-gray-100 dark:bg-neutral-700 text-black dark:text-white p-3 rounded-lg shadow-sm">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#ef5a24]">Email</h4>
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailDisplay}&su=Inquiry%20of%20Website`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#ef5a24] hover:text-[#4ab8e9] transition"
                  >
                    {emailDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div data-aos="fade-left" data-aos-delay="300">
            <div className="bg-white dark:bg-gray-800 border hover:shadow-[#4ab8e9]  border-slate-200 dark:border-slate-700 rounded-xl transition-colors duration-300 shadow-xl z-10">
              <div className="p-6 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <InputField
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    error={errors.email}
                    required
                  />
                  <InputField
                    name="phone"
                    type="tel"
                    placeholder="+44 7123 456789 or 07123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    error={errors.phone}
                    required
                  />

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <InputField
                      name="carReg"
                      placeholder="Car Registration"
                      value={formData.carReg}
                      onChange={handleChange}
                    />
                    <InputField
                      name="makeModel"
                      placeholder="Make and Model"
                      value={formData.makeModel}
                      onChange={handleChange}
                    />
                    <InputField
                      name="location"
                      placeholder="Location"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>

                  <InputField
                    name="message"
                    placeholder="Tell us about your car issue"
                    value={formData.message}
                    onChange={handleChange}
                    textarea
                    rows={6}
                    required
                  />

                  <button
                    type="submit"
                    disabled={!!errors.phone || !!errors.email}
                    className="w-full bg-gradient-to-r from-[#4ab8e9] via-white to-[#ef5a24] text-black dark:from-[#4ab8e9] dark:via-gray-900 dark:to-[#ef5a24] dark:text-white hover:opacity-90 text-lg px-6 py-3 rounded-lg font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send Message Via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

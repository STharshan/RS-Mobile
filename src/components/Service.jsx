import React, { useState, useEffect } from 'react';
import {
  FaOilCan,
  FaCarCrash,
  FaCog,
  FaClipboardList,
  FaCarBattery,
  FaPaintBrush,
  FaSyncAlt,
  FaTools,
  FaTimes,
  FaWrench
} from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-60"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-gray-900 rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-500"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <service.icon className="w-8 h-8 text-[#ef5a24]" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              {service.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-600 dark:text-gray-300" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed">
              {service.description}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {Array.isArray(service.features)
                ? service.features.join('\n')
                : service.features}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onClick, aosDelay }) => {
  const Icon = service.icon;
  const isHighlighted = service.bgColor && service.bgColor.includes('[#ef5a24]');

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={aosDelay}
      className={`${
        service.bgColor || 'bg-white dark:bg-gray-800'
      } p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 hover:shadow-[#4ab8e9] `}
      onClick={onClick}
    >
      <div className="mb-4">
        <Icon
          className={`w-12 h-12 md:w-16 md:h-16 ${
            isHighlighted ? 'text-white' : 'text-[#ef5a24]'
          }`}
        />
      </div>
      <h3
        className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${
          isHighlighted ? 'text-white' : 'text-gray-900 dark:text-white'
        }`}
      >
        {service.title}
      </h3>
      <p
        className={`text-sm md:text-base mb-4 md:mb-6 leading-relaxed ${
          isHighlighted ? 'text-white' : 'text-gray-600 dark:text-gray-300'
        }`}
      >
        {service.desc}
      </p>

      <button
        className={`block font-semibold text-sm md:text-base transition-colors border-b-2 pb-1 ${
          isHighlighted
            ? 'text-white border-white hover:opacity-80'
            : 'text-[#ef5a24] border-[#ef5a24] hover:text-[#4ab8e9] hover:border-[#4ab8e9]'
        } mt-4`}
      >
        Read More
      </button>
    </div>
  );
};

export default function CarServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  const services = [
    {
      icon: FaOilCan,
      title: 'MOT Repairs',
      desc: 'Comprehensive MOT repairs ensuring your vehicle meets all safety and legal standards.',
      description:
        'Keep your car road-legal with our expert mobile MOT repair services in Stamford.',
      features: `Whether your vehicle has failed its MOT or you want it checked beforehand, we come to you to handle all necessary repairs — from brakes and suspensions to emissions and lighting faults. Our fully equipped vans mean you don’t need to visit a garage.\nWe’ll ensure your car meets all DVSA standards, helping you pass your MOT quickly and hassle-free.`,
    },
    {
      icon: FaWrench,
      title: 'Brakes',
      desc: 'Professional brake checks, repairs, and replacements for safe, confident stopping power.',
      description:
        'Stay safe on the road with our mobile brake repair and replacement services in Stamford.',
      features: `We inspect brake pads, discs, callipers, and fluid levels using professional diagnostic tools. Whether your brakes are squeaking, grinding, or feel soft, our mechanics will repair or replace components at your location — saving you time and ensuring maximum stopping performance.\nWe only use high-quality parts for lasting safety and reliability.`,
    },
    {
      icon: FaTools,
      title: 'Suspensions',
      desc: 'Expert suspension diagnostics and repairs for smoother rides and improved handling.',
      description:
        'Experience smoother, more controlled driving with our suspension repair and inspection services across Stamford and nearby areas.',
      features: [
        `We handle everything from worn shock absorbers and springs to full suspension rebuilds — all done from our mobile workshop vans. Uneven tyre wear, knocking sounds, or poor handling can all indicate suspension issues, and we’ll diagnose and repair them on-site for your convenience.`,
      ],
    },
    {
      icon: FaClipboardList,
      title: 'Car Services',
      desc: 'Full and interim car servicing to keep your vehicle performing flawlessly.',
      description:
        'Keep your vehicle performing at its best with our mobile car servicing in Stamford.',
      features: [
        `We offer both full and interim service packages tailored to your vehicle’s needs. Our team carries out oil and filter changes, fluid checks, battery inspections, and more — all at your home or workplace.\nNo need to visit a garage — we bring dealership-level servicing directly to your door, helping you save time and maintain warranty compliance.`,
      ],
    },
    {
      icon: FaCog,
      title: 'Diagnostics',
      desc: 'Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast.',
      description:
        'Identify vehicle problems fast with our mobile car diagnostics service in Stamford, Lincolnshire.',
      features: [
        `Using advanced diagnostic equipment, we can read engine fault codes, analyse performance data, and pinpoint issues before they become costly repairs.\nFrom check-engine lights to electrical problems, we’ll come to you, diagnose the fault, and advise on the best solution — all in one visit.`,
      ],
    },
    {
      icon: FaSyncAlt,
      title: 'Fleet & Lease',
      desc: 'Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready.',
      description:
        'Keep your business moving with our fleet and lease vehicle maintenance services in Stamford and surrounding areas.',
      features: [
        `We provide mobile servicing and repairs for companies managing multiple vehicles, ensuring minimal downtime and consistent reliability.\nWith a dedicated account manager and priority call-outs, you’ll always have a trusted partner keeping your fleet road-ready.`,
      ],
    },
  ];

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300);
  };

  return (
    <>
      <section
        id='services'
        data-aos="fade-up"
        className="relative py-12 md:py-20 px-4 md:px-8 overflow-hidden bg-white dark:bg-black transition-colors duration-500"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute right-0 top-0 w-1/2 h-full">
            <svg viewBox="0 0 200 200" className="w-full h-full">
              <path
                d="M 20 100 Q 60 60, 100 100 T 180 100"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
              <path
                d="M 20 120 Q 60 80, 100 120 T 180 120"
                stroke="white"
                strokeWidth="2"
                fill="none"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-gray-700 dark:text-gray-300 text-lg font-semibold tracking-wider mb-2">
              OUR SERVICES
            </p>
            <h2 className="text-gray-900 dark:text-white text-3xl md:text-5xl lg:text-6xl font-bold">
              WE PROVIDE BEST SERVICES
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                onClick={() => handleServiceClick(service)}
                aosDelay={index * 100} // stagger effect
              />
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        service={selectedService}
      />
    </>
  );
}

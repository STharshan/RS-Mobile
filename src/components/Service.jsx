import React, { useState } from 'react';
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

const ServiceModal = ({ isOpen, onClose, service }) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50" onClick={onClose}>
      <div 
        className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <service.icon className="w-8 h-8 text-red-600" />
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{service.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaTimes className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8">
          <div className="space-y-6">
            <div>
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                {service.description}
              </p>
            </div>

            {service.details && (
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Details</h3>
                <div className="space-y-4">
                  {service.details.map((detail, index) => (
                    <div key={index} className="border-l-4 border-red-600 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-1">{detail.title}</h4>
                      <p className="text-gray-700 text-sm">{detail.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-200">
              <button className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Book This Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onClick }) => {
  const Icon = service.icon;
  const isHighlighted = service.bgColor && service.bgColor.includes('red-600');
  
  return (
    <div 
      className={`${service.bgColor || 'bg-white'} p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer transform hover:-translate-y-1 flex flex-col`}
      onClick={onClick}
    >
      <div className="mb-4">
        <Icon className={`w-12 h-12 md:w-16 md:h-16 ${isHighlighted ? 'text-white' : 'text-red-600'}`} />
      </div>
      <h3 className={`text-xl md:text-2xl font-bold mb-3 md:mb-4 ${isHighlighted ? 'text-white' : 'text-gray-900'}`}>
        {service.title}
      </h3>
      <p className={`text-sm md:text-base mb-4 md:mb-6 leading-relaxed flex-grow ${isHighlighted ? 'text-white' : 'text-gray-600'}`}>
        {service.description}
      </p>
      <button className={`font-semibold text-sm md:text-base transition-colors border-b-2 pb-1 self-start ${
        isHighlighted 
          ? 'text-white border-white hover:opacity-80' 
          : 'text-red-600 border-red-600 hover:text-red-700 hover:border-red-700'
      }`}>
        Read More
      </button>
    </div>
  );
};

export default function CarServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Services data in JSON format
  const servicesData = {
    "services": [
      {
        "icon": "FaCarCrash",
        "title": "MOT Repairs",
        "description": "Comprehensive MOT repairs ensuring your vehicle meets all safety and legal standards.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      },
      {
        "icon": "FaWrench",
        "title": "Brakes",
        "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      },
      {
        "icon": "FaCog",
        "title": "Suspensions",
        "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      },
      {
        "icon": "FaClipboardList",
        "title": "Car Services",
        "description": "Full and interim car servicing to keep your vehicle performing flawlessly.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      },
      {
        "icon": "FaTools",
        "title": "Diagnostics",
        "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      },
      {
        "icon": "FaSyncAlt",
        "title": "Fleet & Lease",
        "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready.",
        "details": [
          {
            "title": "Brakes",
            "description": "Professional brake checks, repairs, and replacements for safe, confident stopping power."
          },
          {
            "title": "Suspensions",
            "description": "Expert suspension diagnostics and repairs for smoother rides and improved handling."
          },
          {
            "title": "Car Services",
            "description": "Full and interim car servicing to keep your vehicle performing flawlessly."
          },
          {
            "title": "Diagnostics",
            "description": "Advanced fault-finding using modern diagnostic tools to identify and resolve issues fast."
          },
          {
            "title": "Fleet & Lease",
            "description": "Tailored maintenance and servicing solutions to keep fleet and lease vehicles road-ready."
          }
        ]
      }
    ]
  };

  // Icon mapping
  const iconMap = {
    FaCarCrash,
    FaWrench,
    FaCog,
    FaClipboardList,
    FaTools,
    FaCarBattery,
    FaSyncAlt
  };

  // Convert JSON data to component format
  const services = servicesData.services.map(service => ({
    ...service,
    icon: iconMap[service.icon]
  }));

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
      <section className="relative bg-white py-12 md:py-20 px-4 md:px-8 overflow-hidden ">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 ">
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
            <div className='text-center'>
              <p className="text-black text-xs md:text-sm font-semibold tracking-wider mb-2">
                OUR SERVICES
              </p>
              <h2 className="text-black text-3xl md:text-5xl lg:text-6xl font-bold mb-10">
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
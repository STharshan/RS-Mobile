import React from 'react';
import { FaCar } from 'react-icons/fa';
import { FiSettings, FiTool } from 'react-icons/fi';
import { MdOutlinePayment } from 'react-icons/md';

const services = [
    {
        id: 1,
        title: 'On-Site Support',
        description: 'Do I Need to Bring My Vehicle to a Garage?',
        desc: "Our mobile mechanics come to you, working from fully equipped vans coordinated through our central hub. If a ramp is needed, we’ll bring your vehicle to our own facility.",
        icon: <FaCar className="w-20 h-20 mx-auto mb-4 text-[#ef5a24]" />,
    },
    {
        id: 2,
        title: 'Dedicated Care',
        description: 'Will I Get a Different Mechanic Every Time?',
        desc: "We prioritise continuity. Wherever possible, you’ll have the same mechanic each time — and fleet clients enjoy a dedicated account manager for ongoing support.",
        icon: <FiSettings className="w-20 h-20 mx-auto mb-4 text-[#ef5a24]" />,
    },
    {
        id: 3,
        title: 'No Hidden Extras',
        description: 'Will Extra Services Be Pushed Onto Me?',
        desc: "Never. Every visit includes a free health check, and we’ll only suggest what’s genuinely required — no upselling, no pressure.",
        icon: <FiTool className="w-20 h-20 mx-auto mb-4 text-[#ef5a24]" />,
    },
    {
        id: 4,
        title: 'Smart Payment Plans',
        description: 'I Don’t Have the Funds Now — Can I Still Benefit?',
        desc: "Yes. Choose a one-off payment or spread costs with our flexible service plans. We’re the first in the UK to offer an MOT Plan with a Guaranteed Pass.",
        icon: <MdOutlinePayment className="w-20 h-20 mx-auto mb-4 text-[#ef5a24]" />,
    },
];

const ServiceSection = () => {
    return (
        <section className="py-20 px-6 bg-white dark:bg-gray-900 text-black dark:text-gray-100 transition-colors duration-300">
            {/* Section Title */}
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100">
                    Latest Service
                </h2>
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4">
                    Easy Drive Maintenance Your Mobile Garage Bringing the Workshop to You
                </p>
            </div>

            {/* Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto gap-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 text-center transition-colors duration-300"
                    >
                        {service.icon}
                        <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-800 dark:text-gray-200 text-lg">{service.description}</p>
                        <p className="text-gray-600 dark:text-gray-400 mt-4">{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceSection;

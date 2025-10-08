import React from "react";
import { FiArrowRight, FiPlay } from "react-icons/fi";

const HeroSection = () => {
    return (
        <>

            <section className="bg-[#111111] text-white min-h-screen flex items-center rounded-b-4xl justify-center px-6 md:px-12 lg:px-20">
                <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                            Where Quality Is A <br />
                            <span className="text-[#4ab8e9]">Service Meets The Open Road</span>
                        </h1>

                        <p className="text-gray-300 max-w-md">
                            Car service is essential for maintaining the performance and
                            longevity of your vehicle. From oil changes to engine diagnostics —
                            we’ve got you covered.
                        </p>

                        <div className="flex items-center gap-5 pt-4">
                            <button className="border-2 border-[#4ab8e9] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-[#4ab8e9] transition font-semibold">
                                Get Started <FiArrowRight className="text-lg" />
                            </button>

                            <button className="w-14 h-14 rounded-full border-2 border-gray-500 flex items-center justify-center hover:border-[#4ab8e9] transition">
                                <FiPlay className="text-2xl" />
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative">
                        <img
                            src="image.png"  // Reference the uploaded image here
                            alt="Car Service"
                            className="w-full h-100 rounded-3xl shadow-lg object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* New Section with Stats */}
            <section className="bg-white text-black shadow-lg py-10 -mt-12 justify-center w-[70%] px-6 md:px-12 lg:px-20 rounded-2xl max-w-5xl mx-auto translate-x-0 z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-7xl  items-center">
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">600+</h3>
                        <p className="text-gray-800">Team Member</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">2k+</h3>
                        <p className="text-gray-800">Service Complete</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">53+</h3>
                        <p className="text-gray-800">Winning Award</p>
                    </div>
                    <div className="text-center">
                        <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold">3k+</h3>
                        <p className="text-gray-800">Client Review</p>
                    </div>
                </div>
            </section>

        </>
    );
};

export default HeroSection;

"use client";

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // ⬅️ Import useNavigate
import { ArrowRight } from "lucide-react";
import a1 from "../assets/a1.svg";

const About = () => {
  const aboutRef = useRef(null);
  const navigate = useNavigate(); // ⬅️ Create navigate function

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/"); // ⬅️ Navigate to Home page
  };

  const navigateToProducts = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/allproduct"); // ⬅️ Navigate to All Products page
  };

  return (
    <div
      className="md:px-[106px]
     overflow-x-hidden mx-auto px-4 py-8"
      ref={aboutRef}
    >
      {/* Breadcrumb */}
      <div className="text-sm mb-10">
        <button
          onClick={navigateToTop}
          className="text-gray-500 hover:text-gray-700"
        >
          Home
        </button>
        {" / "}
        <span className="font-medium">About</span>
      </div>

      {/* Main Content - Switch Order on Mobile */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16">
        {/* Left Column - Content */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl font-serif text-[#283878] mb-6 leading-tight">
            Tyohar jewelry adds elegance to your everyday style.
          </h1>

          <p className="text-gray-700 mb-8 leading-relaxed">
            At Tyohar, we believe every jewel tells a story — one of elegance,
            emotion, and everlasting beauty. Our handcrafted pieces blend
            tradition with modern artistry, designed to make you feel special
            every day. From everyday essentials to once-in-a-lifetime treasures,
            Tyohar offers jewelry for every moment. Explore our stunning
            collections made with precision, passion, and premium craftsmanship.
            Sparkle your way through life with the timeless charm of Tyohar.
          </p>

          <button
            onClick={navigateToProducts}
            className="text-[#283878] flex items-center hover:underline"
          >
            View All Product
            <ArrowRight size={16} className="ml-2" />
          </button>
        </div>

        {/* Right Column - Images */}
        <div className="lg:w-1/2">
          <div className="grid grid-cols-3 gap-4">
            <div className="rounded-lg overflow-hidden mt-6 lg:mt-12">
              <img
                src={a1}
                alt="Tyohar bracelet"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src={a1}
                alt="Tyohar earrings"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden mt-6 lg:mt-12">
              <img
                src={a1}
                alt="Tyohar necklace"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

"use client";
import { useState } from "react";
import { Instagram } from "lucide-react";
import i1 from "../assets/i1.svg";
import i2 from "../assets/i2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
import i5 from "../assets/i5.svg";
import i6 from "../assets/i6.svg";
import i7 from "../assets/i7.svg";
import i8 from "../assets/i8.svg";
import i9 from "../assets/i9.svg";

const ImageGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/tyoharjewels", "_blank");
  };

  const images = [
    { id: 1, src: i1, span: "col-span-6 row-span-6 col-start-4 row-start-4" },
    { id: 2, src: i2, span: "col-span-3 row-span-3 col-start-7 row-start-1" },
    { id: 3, src: i3, span: "col-span-2 row-span-2 col-start-5 row-start-2" },
    { id: 4, src: i4, span: "col-span-2 row-span-2 col-start-4 row-start-10" },
    { id: 5, src: i5, span: "col-span-3 row-span-3 col-start-6 row-start-10" },
    { id: 6, src: i6, span: "col-span-2 row-span-2 col-start-2 row-start-4" },
    { id: 7, src: i7, span: "col-span-3 row-span-3 col-start-1 row-start-6" },
    { id: 8, src: i8, span: "col-span-2 row-span-2 col-start-10 row-start-5" },
    { id: 9, src: i9, span: "col-span-3 row-span-3 col-start-10 row-start-7" },
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:py-12 xl:py-16">
      {/* Instagram Handle */}
      <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <a
          href="https://www.instagram.com/tyoharjewels"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#283878] hover:underline cursor-pointer">
            @tyoharjewels
          </h2>
        </a>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 grid-rows-12 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
        {images.map(({ id, src, span }) => (
          <div
            key={id}
            className={`${span} relative rounded-lg overflow-hidden`}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <img
              src={src}
              alt={`Jewelry ${id}`}
              className="w-full h-full object-cover"
            />
            <div
              className={`
                absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-[#283878] rounded-lg flex items-center justify-center 
                transition-all duration-300 ease-in-out cursor-pointer
                ${
                  hoveredId === id
                    ? "opacity-40 w-[540px] h-[540px]"
                    : "opacity-0 w-[80%] h-[80%] sm:w-[85%] sm:h-[85%] md:w-[80%] md:h-[80%]"
                }
              `}
              onClick={redirectToInstagram}
            >
              <Instagram
                size={24}
                className="text-white sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;

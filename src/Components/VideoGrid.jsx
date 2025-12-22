// // VideoGrid.jsx
// import React from "react";
// // import video1 from "../assets/video1.mp4";
// import video2 from "../assets/video2.mp4";
// import testingimg from "../assets/testingimg.jpg"; // Ensure this path is correct

// const videos = [
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
//   { src: video2 },
// ];

// const VideoGrid = () => {
//   return (
//     <div>
//       {/* Mobile view: horizontal scroll */}
//       <div className="flex md:hidden gap-3 overflow-x-auto p-4 hide-scrollbar">
//         {videos.map((video, index) => (
//           <div
//             key={index}
//             className="min-w-[350px] h-[200px] bg-gray-200 flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
//           >
//             <video controls className="w-[350px] h-full object-cover">
//               <source src={video.src} type="video/mp4" />
//               Your browser does not support the video tag.
//             </video>
//           </div>
//         ))}
//       </div>

//       {/* Desktop view: original grid */}
//       <div className="hidden md:grid grid-cols-8 grid-rows-9 md:gap-3 md:p-25 p-5 gap-1.5">
//         <div className="col-span-2 row-span-4 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <video controls className="w-full h-full object-cover">
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//         <div className="col-span-2 row-span-2 col-start-3 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <img className="w-full h-full object-cover" src={testingimg} alt="" />
//         </div>
//         <div className="col-span-4 row-span-3 col-start-5 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <img className="w-full h-full object-cover" src={testingimg} alt="" />
//         </div>
//         <div className="col-span-2 row-span-2 col-start-1 row-start-5 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <img className="w-full h-full object-cover" src={testingimg} alt="" />
//         </div>
//         <div className="col-span-4 row-span-3 col-start-1 row-start-7 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <img className="w-full h-full object-cover" src={testingimg} alt="" />
//         </div>
//         <div className="col-span-2 row-span-4 col-start-3 row-start-3 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <video controls className="w-full h-full object-cover">
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//         <div className="col-span-4 row-span-2 col-start-5 row-start-8 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <video controls className="w-full h-full object-cover">
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//         <div className="col-span-2 row-span-4 col-start-5 row-start-4 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <video controls className="w-full h-full object-cover">
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//         <div className="col-span-2 row-span-4 col-start-7 row-start-4 bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
//           <video controls className="w-full h-full object-cover">
//             <source src={video2} type="video/mp4" />
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoGrid;

"use client";

import { useState } from "react";
// import { Instagram } from "lucide-react";

import video2 from "../assets/video2.mp4";
// import video2 from "../assets/video2.svg";
import i3 from "../assets/i3.svg";
import i4 from "../assets/i4.svg";
// import video2 from "../assets/video2.svg";
import i6 from "../assets/i6.svg";
// import video2 from "../assets/video2.svg";
import i8 from "../assets/i8.svg";
// import video2 from "../assets/video2.svg";

const VideoGrid = () => {
  const [hoveredId, setHoveredId] = useState(null);

  // const redirectToInstagram = () => {
  //   window.open(
  //     "https://www.instagram.com/tyoharjewels",
  //     "_blank",
  //     "noopener,noreferrer"
  //   );
  // };

  const images = [
    {
      id: 1,
      src: video2,
      span: "col-span-6 row-span-6 col-start-4 row-start-4",
    },
    {
      id: 2,
      src: video2,
      span: "col-span-3 row-span-3 col-start-7 row-start-1",
    },
    { id: 3, src: i3, span: "col-span-2 row-span-2 col-start-5 row-start-2" },
    { id: 4, src: i4, span: "col-span-2 row-span-2 col-start-4 row-start-10" },
    {
      id: 5,
      src: video2,
      span: "col-span-3 row-span-3 col-start-6 row-start-10",
    },
    { id: 6, src: i6, span: "col-span-2 row-span-2 col-start-2 row-start-4" },
    {
      id: 7,
      src: video2,
      span: "col-span-3 row-span-3 col-start-1 row-start-6",
    },
    { id: 8, src: i8, span: "col-span-2 row-span-2 col-start-10 row-start-5" },
    {
      id: 9,
      src: video2,
      span: "col-span-3 row-span-3 col-start-10 row-start-7",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:py-12 xl:py-16">
      {/* Instagram handle */}
      {/* <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <a
          href="https://www.instagram.com/tyoharjewels"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-[#283878] hover:underline cursor-pointer">
            @tyoharjewels
          </h2>
        </a>
      </div> */}

      {/* Image / video grid */}
      <div className="grid grid-cols-12 grid-rows-12 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-8xl mx-auto">
        {images.map(({ id, src, span }) => (
          <div
            key={id}
            className={`${span} relative rounded-lg overflow-hidden`}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* If you later swap an .mp4 into the list this still works */}
            {src.endsWith(".mp4") ? (
              <video
                src={src}
                autoPlay
                loop
                muted
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={src}
                alt={`Jewelry ${id}`}
                className="w-full h-full object-cover"
              />
            )}

            {/* Hover overlay */}
            {/* <div
              onClick={redirectToInstagram}
              className={`
                absolute inset-0 flex items-center justify-center
                bg-[#283878] rounded-lg cursor-pointer
                transition-all duration-300 ease-in-out
                ${hoveredId === id ? "opacity-40" : "opacity-0"}
              `}
            >
              <Instagram
                size={hoveredId === id ? 48 : 28}
                className="text-white drop-shadow"
              />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;

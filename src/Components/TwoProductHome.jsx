// import React from "react";
// import { useNavigate } from "react-router-dom";
// import left from "../assets/left.svg";
// import right from "../assets/right.svg";
// import twoearring from "../assets/twoearring.svg";

// const TwoProductHome = () => {
//   const navigate = useNavigate();

//   const handleViewProduct = (productId) => {
//     navigate(`/product/${productId}`);
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section className="bg-[#283878] py-12 px-4 relative overflow-hidden">
//       {/* Decorative elements */}
//       <div className="absolute hidden md:block top-0 left-0 w-48 h-60 opacity-100">
//         <img
//           src={left}
//           alt="description"
//           className="w-full h-80 object-cover"
//         />
//       </div>
//       <div className="absolute top-0 right-0 w-48 h-64 opacity-100">
//         <img
//           src={right}
//           alt="description"
//           className="w-full h-84 object-cover"
//         />
//       </div>

//       <div className="md:px-[106px] my-4 overflow-x-hidden">
//         <div className="grid md:grid-cols-2 gap-6">
//           {/* First Promo Box */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//             <div className="flex flex-col md:flex-row">
//               <div className="p-6 md:w-3/5 flex flex-col justify-center">
//                 <h2 className="text-[#283878] text-xl md:text-2xl font-bold mb-2">
//                   SPARKLE MORE, SPEND LESS!
//                 </h2>
//                 <p className="text-[#283878] font-medium mb-4">
//                   Up to 40% Off on Selected Jewelry
//                 </p>
//                 <p className="text-gray-700 mb-6 text-justify">
//                   Treat yourself or your loved ones to timeless elegance.
//                   Discover our stunning collection of rings, necklaces,
//                   earrings, and more – all at irresistible prices.
//                 </p>
//                 <div>
//                   <button
//                     onClick={() => handleViewProduct("emerald-earrings")}
//                     className="bg-[#283878] text-white px-6 py-2 rounded-md hover:bg-[#5c0239] transition-colors"
//                   >
//                     View product
//                   </button>
//                 </div>
//               </div>
//               <div className="md:w-2/5 flex items-center justify-center p-6">
//                 <img
//                   src={twoearring}
//                   alt="Emerald Earrings"
//                   className="max-h-48 object-contain"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Second Promo Box */}
//           <div className="bg-white rounded-lg overflow-hidden shadow-lg">
//             <div className="flex flex-col md:flex-row">
//               <div className="p-6 md:w-3/5 flex flex-col justify-center">
//                 <h2 className="text-[#283878] text-xl md:text-2xl font-bold mb-2">
//                   SPARKLE MORE, SPEND LESS!
//                 </h2>
//                 <p className="text-[#283878] font-medium mb-4">
//                   Up to 40% Off on Selected Jewelry
//                 </p>
//                 <p className="text-gray-700 mb-6 text-justify">
//                   Treat yourself or your loved ones to timeless elegance.
//                   Discover our stunning collection of rings, necklaces,
//                   earrings.
//                 </p>
//                 <div>
//                   <button
//                     onClick={() => handleViewProduct("emerald-ring")}
//                     className="bg-[#283878] text-white px-6 py-2 rounded-md hover:bg-[#5c0239] transition-colors"
//                   >
//                     View product
//                   </button>
//                 </div>
//               </div>
//               <div className="md:w-2/5 flex items-center justify-center p-6">
//                 <img
//                   src={twoearring}
//                   alt="Emerald Ring"
//                   className="max-h-48 object-contain"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TwoProductHome;

import React from "react";
import ringhome from "../assets/ringhome.jpg";
import modelhome from "../assets/modelhome.jpg";

const TwoProductHome = () => {
  return (
    <div className="mx-auto">
      <div className="flex flex-col md:flex-row">
        {/* Top Section: Image and Content */}
        <div className="md:w-1/2">
          <img
            src={ringhome}
            alt="Crafting a ring"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2 p-4 flex flex-col justify-center md:px-12">
          <h2 className="text-[34px] font-bold text-[#283878]">
            Why Choose Tyohar
          </h2>
          <ul className="list-disc list-inside text-[16px] text-gray-700 mt-2 space-y-5">
            <li>
              Ethical Sourcing: Lab-Grown Diamonds Are Created In Controlled
              Environments.
            </li>
            <li>Ensuring No Harm To Communities Or The Environment.</li>
            <li>
              Environmental Sustainability: Say No To Destructive Mining
              Practices. Lab-Grown Diamonds Have A Significantly Lower
              Environmental Footprint.
            </li>
            <li>
              Affordability: Enjoy The Beauty And Quality Of Diamonds At A
              Fraction Of The Cost. Our Lab-Grown Diamonds Offer Exceptional
              Value Without Compromising On Brilliance.
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Bottom Section: Content and Image */}
        <div className="md:w-1/2 p-4 order-2 md:order-1 flex flex-col justify-center md:px-12">
          <h2 className="text-[34px] font-bold text-[#283878]">
            Experience Excellence
          </h2>
          <p className="text-gray-700 mt-2 text-[16px]">
            From Everyday Elegance To Once-In-A-Lifetime Celebrations. Elevate
            Your Style With Sparkle’s Exquisite Lab-Grown Diamond Jewelry.
          </p>
          <button className="mt-30 bg-[#283878] w-1/2 text-white px-4 py-2 rounded">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <img
            src={modelhome}
            alt="Model with ring"
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TwoProductHome;

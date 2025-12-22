// "use client";

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import ProductCard from "./ProductCard";

// // Import category icons
// import { ReactComponent as ring } from "../assets/ring.svg";
// import { ReactComponent as earring } from "../assets/earring.svg";
// import { ReactComponent as necklaces } from "../assets/necklaces.svg";
// import { ReactComponent as bracelet } from "../assets/bracelet.svg";
// import { ReactComponent as dimond } from "../assets/dimond.svg";
// import { ReactComponent as wedding } from "../assets/wedding.svg";
// import { ReactComponent as daily } from "../assets/daily.svg";
// import productimage from "../assets/productimage.svg"; // Ensure this path is correct
// import productimage2 from "../assets/productimage2.svg"; // Ensure this path is correct

// // Moved outside to avoid ESLint warning
// const allProducts = [
//   {
//     id: "celestial-navaratna-ring",
//     name: "Celestial Navaratna Diamond Ring for Men",
//     price: 120000.0,
//     category: "RING",
//     gender: "Men",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "infinity-twist-ring",
//     name: "Infinity Twist Solitaire Finger Ring",
//     price: 250000.0,
//     category: "RING",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image,
//   },
//   {
//     id: "gold-leaf-ring",
//     name: "Classic 22 Karat Yellow Gold Leaf Patterned Finger Ring",
//     price: 50000.0,
//     category: "RING",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "pink-dream-ring",
//     name: "Pink Dream Diamond Finger Ring",
//     price: 9000.0,
//     category: "RING",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "emerald-earrings",
//     name: "Emerald Stud Earrings",
//     price: 85000.0,
//     category: "EARRIG",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "butterfly-necklace",
//     name: "Symphony of Love Diamond Necklace",
//     price: 120000.0,
//     category: "NECKLACES",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "emerald-bracelet",
//     name: "Mesmerizing Diamond Bracelet",
//     price: 250000.0,
//     category: "BRACELET",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "diamond-pendant",
//     name: "Radiant Diamond Pendant",
//     price: 75000.0,
//     category: "DIMOND",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "wedding-band",
//     name: "Classic Wedding Band",
//     price: 45000.0,
//     category: "WEDDING",
//     gender: "Men",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
//   {
//     id: "daily-wear-bracelet",
//     name: "Everyday Charm Bracelet",
//     price: 35000.0,
//     category: "DAILYWEAR",
//     gender: "Woman",
//     image: productimage,
//     hoverImage: productimage2, // Use imported image
//   },
// ];

// const Category = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("RING");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);
//   const [, setShowMobileMenu] = useState(false);

//   const categories = [
//     { id: "RING", name: "RING", icon: ring },
//     { id: "EARRIG", name: "EARRIG", icon: earring },
//     { id: "NECKLACES", name: "NECKLACES", icon: necklaces },
//     { id: "BRACELET", name: "BRACELET", icon: bracelet },
//     { id: "DIMOND", name: "DIMOND", icon: dimond },
//     { id: "WEDDING", name: "WEDDING", icon: wedding },
//     { id: "DAILYWEAR", name: "DAILYWEAR", icon: daily },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const filtered = allProducts.filter(
//       (product) => product.category === activeCategory
//     );
//     setFilteredProducts(filtered);
//   }, [activeCategory]);

//   const handleCategoryChange = (categoryId) => {
//     setActiveCategory(categoryId);
//     setShowMobileMenu(false);
//   };

//   const handleViewAll = () => {
//     navigate("/allproduct");
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section className="md:px-[106px] overflow-x-hidden py-3 px-4">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-[#283878]">
//           SHOP BY CATEGORIES
//         </h2>
//         <button
//           onClick={handleViewAll}
//           className="text-[#283878] flex items-center hover:underline"
//         >
//           View all <ArrowRight size={16} className="ml-1" />
//         </button>
//       </div>
//       {/* Desktop Tabs */}
//       {!isMobile && (
//         <div className="mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4 snap-x snap-mandatory">
//           <div className="inline-flex border border-[#283878] rounded-full">
//             {categories.map((category) => {
//               const CategoryIcon = category.icon || "/placeholder.svg";
//               return (
//                 <button
//                   key={category.id}
//                   className={`px-3 py-1.5 rounded-full flex items-center transition-colors text-sm m-1 ${
//                     activeCategory === category.id
//                       ? "bg-[#283878] text-white"
//                       : "text-gray-700 hover:bg-gray-100"
//                   }`}
//                   onClick={() => handleCategoryChange(category.id)}
//                 >
//                   <span className="mr-1 w-5 h-5">
//                     <CategoryIcon
//                       className={`w-full h-full  ${
//                         activeCategory === category.id
//                           ? "text-white"
//                           : "text-black"
//                       }`}
//                     />
//                   </span>
//                   {category.name}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {/* Mobile Category Tabs - Horizontal Scrollable */}
//       {isMobile && (
//         <div className="mb-6 overflow-x-auto scrollbar-hide px-4 snap-x snap-mandatory">
//           <div className="flex gap-2 pb-4">
//             {categories.map((category) => {
//               const CategoryIcon = category.icon || "/placeholder.svg";
//               return (
//                 <button
//                   key={category.id}
//                   className={`px-3 py-1.5 rounded-full flex items-center justify-center transition-colors text-xs font-medium flex-shrink-0 min-w-[90px] max-w-[110px] snap-center ${
//                     activeCategory === category.id
//                       ? "bg-[#283878] text-white"
//                       : "text-gray-700 border border-gray-200 bg-white hover:bg-gray-50"
//                   }`}
//                   onClick={() => handleCategoryChange(category.id)}
//                   aria-pressed={activeCategory === category.id}
//                   aria-label={`Select ${category.name} category`}
//                 >
//                   <span className="mr-1 w-4 h-4 flex-shrink-0">
//                     <CategoryIcon
//                       className={`w-full h-full  ${
//                         activeCategory === category.id
//                           ? "text-white"
//                           : "text-black"
//                       }`}
//                     />
//                   </span>
//                   <span className="truncate">{category.name}</span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       )}
//       {/* Product Display - Horizontal swipe on mobile, grid on desktop */}
//       <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 scrollbar-hide snap-x snap-mandatory">
//         {filteredProducts.map((product) => (
//           <div
//             key={product.id}
//             className="flex-shrink-0 w-3/4 sm:w-full snap-center mr-4 sm:mr-0"
//           >
//             <ProductCard product={product} />
//           </div>
//         ))}
//       </div>
//       {/* No Products Message */}
//       {filteredProducts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-gray-500">No products found in this category.</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Category;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "use client";

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { ArrowRight } from "lucide-react";

// // Import category icons
// import { ReactComponent as Ring } from "../assets/ring.svg";
// import { ReactComponent as Earring } from "../assets/earring.svg";
// import { ReactComponent as Necklaces } from "../assets/necklaces.svg";
// import { ReactComponent as Bracelet } from "../assets/bracelet.svg";
// import productimage from "../assets/productimage.svg";

// const allProducts = [
//   {
//     category: "RING",
//     image: productimage,
//   },
//   {
//     category: "EARRING",
//     image: productimage,
//   },
//   {
//     category: "NECKLACES",
//     image: productimage,
//   },
//   {
//     category: "BRACELET",
//     image: productimage,
//   },
// ];

// const Category = () => {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("RING");
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [isMobile, setIsMobile] = useState(false);

//   const categories = [
//     { id: "RING", name: "RING", icon: Ring, path: "/ring" },
//     { id: "EARRING", name: "EARRING", icon: Earring, path: "/earring" },
//     { id: "NECKLACES", name: "NECKLACES", icon: Necklaces, path: "/necklaces" },
//     { id: "BRACELET", name: "BRACELET", icon: Bracelet, path: "/bracelet" },
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     const filtered = allProducts.filter(
//       (product) => product.category === activeCategory
//     );
//     setFilteredProducts(filtered);
//   }, [activeCategory]);

//   const handleCategoryChange = (categoryId, path) => {
//     setActiveCategory(categoryId);
//     navigate(path);
//     window.scrollTo(0, 0);
//   };

//   const handleViewAll = () => {
//     navigate("/allproduct");
//     window.scrollTo(0, 0);
//   };

//   return (
//     <section className="md:px-[106px] overflow-x-hidden py-12 px-4">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-2xl font-bold text-[#283878]">
//           SHOP BY CATEGORIES
//         </h2>
//         <button
//           onClick={handleViewAll}
//           className="text-[#283878] flex items-center hover:underline"
//         >
//           View all <ArrowRight size={16} className="ml-1" />
//         </button>
//       </div>
//       {/* Category Display */}
//       {/* <div className="mb-8 flex justify-center gap-6 flex-wrap">
//         {categories.map((category) => {
//           const CategoryIcon = category.icon || "/placeholder.svg";
//           return (
//             <div
//               key={category.id}
//               className="flex flex-col items-center cursor-pointer group relative"
//               onClick={() => handleCategoryChange(category.id, category.path)}
//             >
//               <div className="w-16 h-16 mb-2 bg-gray-100 rounded-md flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
//                 <CategoryIcon
//                   className={`w-12 h-12 ${
//                     activeCategory === category.id
//                       ? "text-[#283878]"
//                       : "text-gray-300 group-hover:text-[#283878]"
//                   }`}
//                 />
//               </div>
//               <span
//                 className={`text-sm font-medium ${
//                   activeCategory === category.id
//                     ? "text-blue-600"
//                     : "text-gray-700 group-hover:text-blue-500"
//                 }`}
//               >
//                 {category.name}
//               </span>
//             </div>
//           );
//         })}
//       </div> */}
//       {/* Product Display */}
//       <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 scrollbar-hide snap-x snap-mandatory">
//         {filteredProducts.map((product, index) => (
//           <div
//             key={index}
//             className="flex-shrink-0 w-3/4 sm:w-full snap-center mr-4 sm:mr-0 relative group"
//           >
//             <div className="relative w-full h-64 ">
//               <img
//                 src={product.image}
//                 alt={`${product.category}`}
//                 className="w-full h-full object-cover rounded-md"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 rounded-md">
//                 <span className="text-white text-sm font-medium">
//                   {product.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//       {/* No Products Message */}
//       {filteredProducts.length === 0 && (
//         <div className="text-center py-12">
//           <p className="text-gray-600">No products found in this category.</p>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Category;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import testingimg from "../assets/testingimg.jpg";

const Category = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/allproduct");
    window.scrollTo(0, 0);
  };

  const handleCategoryClick = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const categories = [
    { name: "RING", image: testingimg, path: "/allproduct" },
    { name: "RING", image: "/ring2.jpg", path: "/ring2" },
    { name: "RING", image: "/ring3.jpg", path: "/ring3" },
    { name: "RING", image: "/ring4.jpg", path: "/ring4" },
  ];

  return (
    <div className="md:px-[106px] overflow-x-hidden py-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#283878]">
          SHOP BY CATEGORIES
        </h2>

        <button
          onClick={handleViewAll}
          className="text-[#283878] flex items-center hover:underline"
        >
          View all <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            /* ⬇️ only change: added “group” so the overlay can react to hover */
            className="relative w-full h-0 pb-[100%] bg-gray-200 rounded-md overflow-hidden cursor-pointer group"
            onClick={() => handleCategoryClick(category.path)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#e0e0e0")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#f5f5f5")
            }
          >
            <img
              src={category.image}
              alt={category.name}
              className="absolute top-0 left-0 w-full h-full object-cover"
            />

            {/* ⬇️ overlay: hidden by default, fades in on .group:hover */}
            <div
              className="absolute inset-0 flex items-center justify-center
                            bg-black/40 opacity-0 group-hover:opacity-100
                            transition duration-300"
            >
              <span className="text-white text-lg font-medium">
                {category.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;

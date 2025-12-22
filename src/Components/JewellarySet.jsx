import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import productimage from "../assets/productimage.svg"; // Ensure this path is correct
import productimage2 from "../assets/productimage2.svg"; // Ensure this path is correct

const JewellarySet = () => {
  const navigate = useNavigate();

  const handleViewAll = () => {
    navigate("/allproduct");
    window.scrollTo(0, 0);
  };

  // Sample new arrival products data
  const newArrivals = [
    {
      id: "butterfly-necklace",
      name: "Symphony of Love Diamond Necklace",
      price: 120000.0,
      category: "Necklaces",
      image: productimage,
      hoverImage: productimage2, // Use imported image
    },
    {
      id: "emerald-bracelet",
      name: "Mesmerizing Diamond Bracelet",
      price: 250000.0,
      category: "Bracelet",
      image: productimage,
      hoverImage: productimage2, // Use imported image
    },
    {
      id: "gold-leaf-ring",
      name: "Classic 22 Karat Yellow Gold Leaf Patterned Finger Ring",
      price: 50000.0,
      category: "Ring",
      image: productimage,
      hoverImage: productimage2, // Use imported image
    },
    {
      id: "diamond-earrings",
      name: "Enchanting Floral Diamond Stud Earrings for Kids",
      price: 9000.0,
      category: "Earring",
      image: productimage,
      hoverImage: productimage2, // Use imported image
    },
  ];

  return (
    <section className="md:px-[106px] overflow-x-hidden pb-3 pt-10 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold text-[#283878]">JEWELLERY SET</h2>
        <button
          onClick={handleViewAll}
          className="text-[#283878] flex items-center hover:underline"
        >
          View all <ArrowRight size={16} className="ml-1" />
        </button>
      </div>

      {/* Horizontal swipe on mobile, grid on desktop */}
      <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-6 scrollbar-hide snap-x snap-mandatory">
        {newArrivals.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-3/4 sm:w-full snap-center mr-4 sm:mr-0"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewellarySet;

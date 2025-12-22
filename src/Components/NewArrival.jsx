import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import productimage from "../assets/productimage.svg"; // Ensure this path is correct
import productimage2 from "../assets/productimage2.svg"; // Ensure this path is correct
import testingimg from "../assets/testingimg.jpg"; // Ensure this path is correct
import h2 from "../assets/h2.svg"; // Ensure this path is correct

const NewArrival = () => {
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
      image: testingimg,
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
    <div>
      <section className="md:px-[106px] overflow-x-hidden pb-3 pt-10 px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-[#283878]">NEW ARRIVAL</h2>
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
      {/* Bottom background image section - fixed when scrolling */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${h2})`, // Using the variable from remembered code
            backgroundRepeat: "repeat-x", // Horizontal repeat from remembered code
            backgroundAttachment: "fixed", // Fixed background from remembered code
            backgroundSize: "cover", // Added from uploaded code for full coverage
            backgroundPosition: "center", // Centered background from uploaded code
          }}
        >
          {/* Product image overlay */}
          {/* <div className="container mx-auto h-full relative">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/4">
              <img
                src={sc1} // Using the variable from uploaded code
                alt="Featured Products"
                className="max-h-[350px] object-contain"
              />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NewArrival;

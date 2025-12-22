import React from "react";
import { useNavigate } from "react-router-dom";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
// import flower from "../assets/flower.svg"; // Assuming a flower image for decoration

const Mission = () => {
  const navigate = useNavigate();

  const handleViewProduct = (productId) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };
//47012d  283878
  return (
    <section className="bg-[#283878] py-12 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute hidden md:block top-0 left-0 w-40 h-60 opacity-100">
        <img
          src={left}
          alt="description"
          className="w-full h-70 object-cover"
        />
      </div>
      <div className="absolute top-0 right-0 w-40 h-60 opacity-100">
        <img
          src={right}
          alt="description"
          className="w-full h-70 object-cover"
        />
      </div>

      <div className="md:px-[106px] my-4 overflow-x-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mission Box */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-[#283878] text-xl md:text-2xl font-bold mb-4">
                MISSION
              </h2>
              <p className="text-[#283878] text-justify">
                Treat yourself or your loved ones to timeless elegance. Discover
                our stunning collection of rings, necklaces, earrings, and more
                – all at irresistible prices.
              </p>
              {/* <div className="mt-4">
                <img src={flower} alt="Decorative Flower" className="w-16 h-16 object-contain mx-auto" />
              </div> */}
            </div>
          </div>

          {/* Vision Box */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-[#283878] text-xl md:text-2xl font-bold mb-4">
                VISION
              </h2>
              <p className="text-[#283878] text-justify">
                Treat yourself or your loved ones to timeless elegance. Discover
                our stunning collection of rings, necklaces, earrings.
              </p>
              {/* <div className="mt-4">
                <img src={flower} alt="Decorative Flower" className="w-16 h-16 object-contain mx-auto" />
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

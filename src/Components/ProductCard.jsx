import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import productimage from "../assets/productimage.svg"; // Ensure this path is correct
import productimage2 from "../assets/productimage2.svg"; // 👈 Add a secondary hover image
import testingimg from "../assets/testingimg.jpg"; // Ensure this path is correct

const ProductCard = ({ product, id }) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const defaultProduct = {
    id: "butterfly-necklace",
    name: "Symphony of Love Diamond Necklace",
    price: 120000.0,
    category: "Necklaces",
    image: testingimg,
    hoverImage: productimage2, // 👈 Fallback hover image
  };

  const item = product || defaultProduct;

  const handleProductClick = () => {
    navigate(`/product`);
    // window.scrollTo(0, 0);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    console.log("Added to wishlist:", item.name);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    console.log("Added to cart:", item.name);
  };

  const formatPrice = (price) => {
    return `₹${price.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    })}`;
  };

  const getImageSrc = () => {
    if (isHovered && item.hoverImage) return item.hoverImage;
    return item.image || productimage;
  };

  return (
    <div
      className="relative rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
      onClick={handleProductClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-auto w-full max-w-full overflow-hidden">
        <img
          src={getImageSrc()}
          alt={item.name}
          className="w-full h-auto max-w-full aspect-square object-cover transition-transform duration-500 hover:scale-105"
        />
        {isHovered && (
          <div className="absolute inset-0 bg-black opacity-20 transition-opacity duration-300"></div>
        )}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="bg-[#283878] text-white p-2 rounded-full hover:bg-[#5c0239] transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingBag size={18} />
          </button>
          <button
            onClick={handleWishlistClick}
            className="bg-[#283878] text-white p-2 rounded-full hover:bg-[#5c0239] transition-colors"
            aria-label="Add to wishlist"
          >
            <Heart size={18} />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 bg-white">
        <p className="text-gray-500 text-sm truncate">{item.category}</p>
        <h3 className="text-[#283878] font-medium text-lg mt-1 line-clamp-2 break-words">
          {item.name}
        </h3>
        <p className="text-[#283878] font-bold mt-1">
          {formatPrice(item.price)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

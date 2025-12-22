"use client";

import { useState, useRef, useEffect } from "react";
import productimage from "../assets/productimage.svg";

import {
  Heart,
  ChevronDown,
  ChevronUp,
  Minus,
  Plus,
  ShoppingBag,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const navigate = useNavigate(); // ✅ Moved here

  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [selectedImage, setSelectedImage] = useState(0);
  const mainImageRef = useRef(null);
  const isDesktop = useRef(false);

  // Add these state variables after the existing useState declarations (around line 22)
  const [selectedColor, setSelectedColor] = useState("pink");
  const [selectedPurity, setSelectedPurity] = useState("14 KT");
  const [selectedSize, setSelectedSize] = useState("23 (20.0 mm)");

  // Navigate to top of window on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const checkIfDesktop = () => {
      isDesktop.current = window.innerWidth >= 1024;
    };

    checkIfDesktop();
    window.addEventListener("resize", checkIfDesktop);

    return () => {
      window.removeEventListener("resize", checkIfDesktop);
    };
  }, []);

  const product = {
    id: 1,
    name: "MABEL BUTTERFLY BIG GREEN STONE RING",
    currentPrice: 599.0,
    originalPrice: 1499.0,
    description:
      "Elevate your elegance with the Mabel Butterfly Ring, featuring a bold green stone and delicate butterfly accents. A perfect blend of nature-inspired charm and timeless luxury.",
    outOfStock: true,
    images: [
      productimage,
      "/placeholder.svg?height=200&width=200",
      productimage,
      "/placeholder.svg?height=200&width=200",
    ],
    specification: [
      { label: "Material", value: "925 Sterling Silver" },
      { label: "Stone", value: "Green Emerald" },
      { label: "Design", value: "Butterfly" },
      { label: "Weight", value: "3.5g" },
      { label: "Size", value: "Adjustable" },
    ],
    returnPolicy:
      "Returns accepted within 14 days of delivery. Item must be unworn, undamaged, and in original packaging. Customer is responsible for return shipping costs unless item is defective.",
    reviews: [
      {
        id: 1,
        user: "Priya S.",
        rating: 5,
        comment:
          "Absolutely beautiful! The green stone catches the light perfectly.",
      },
      {
        id: 2,
        user: "Ananya R.",
        rating: 4,
        comment: "Lovely design, but slightly smaller than I expected.",
      },
    ],
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else {
      setQuantity(1);
    }
  };

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const toggleTab = (tab) => {
    setActiveTab((prev) => (prev === tab ? null : tab));
  };

  const handleMouseMove = (e) => {
    if (!isDesktop.current) return;
    const { left, top, width, height } =
      mainImageRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPosition({ x, y });
  };

  const handleMouseEnter = () => {
    if (isDesktop.current) {
      setIsZoomed(true);
    }
  };

  const handleMouseLeave = () => {
    setIsZoomed(false);
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  const handleBuyNow = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    alert("Navigating to checkout page");
  };

  const formatPrice = (price) => price.toLocaleString("en-IN");

  const navigateToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/"); // optional: if you want to go to homepage route
  };

  const navigateToRings = () => {
    navigate("/allproductring");
  };

  return (
    <div
      className="container md:px-[106px]
     overflow-x-hidden mx-auto px-4 py-8"
    >
      {/* Breadcrumb */}
      <div className="text-sm mb-6">
        <button
          onClick={navigateToTop}
          className="text-gray-500 hover:text-gray-700"
        >
          Home
        </button>
        {" / "}
        <button
          onClick={navigateToRings}
          className="text-gray-500 hover:text-gray-700"
        >
          Ring
        </button>
        {" / "}
        <span className="font-medium">
          Mabel Butterfly Big Green Stone Ring
        </span>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 mt-4 md:mt-0">
              {product.images.slice(1).map((image, index) => (
                <button
                  key={index}
                  className={`border rounded-md overflow-hidden w-20 h-20 ${
                    selectedImage === index + 1
                      ? "border-gray-800"
                      : "border-gray-200"
                  }`}
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div
              className="relative flex-1 rounded-md overflow-hidden"
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              ref={mainImageRef}
            >
              <div className="relative w-full aspect-square">
                <img
                  src={product.images[selectedImage] || "/placeholder.svg"}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-200 ${
                    isZoomed ? "scale-150" : ""
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : {}
                  }
                />
              </div>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="relative lg:w-1/2">
          <button
            className="absolute right-0 bg-white p-1.5"
            onClick={toggleWishlist}
          >
            <Heart
              size={24}
              className={
                isWishlisted ? "text-red-500 fill-red-500" : "text-gray-700"
              }
            />
          </button>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {product.name}
          </h1>

          <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-gray-900">
              ₹{formatPrice(product.currentPrice)}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ₹{formatPrice(product.originalPrice)}
            </span>
            {product.outOfStock && (
              <span className="text-sm text-red-500">Out of Stock</span>
            )}
          </div>

          <p className="text-gray-600 mb-8">{product.description}</p>

          {/* Color Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">COLOR</h3>
            <div className="flex gap-2">
              <button
                className={`w-10 h-10 rounded-full bg-[#F8D7DA] ${
                  selectedColor === "pink"
                    ? "ring-2 ring-offset-2 ring-gray-500"
                    : ""
                }`}
                onClick={() => setSelectedColor("pink")}
              />
              <button
                className={`w-10 h-10 rounded-full bg-[#CED4DA] ${
                  selectedColor === "silver"
                    ? "ring-2 ring-offset-2 ring-gray-500"
                    : ""
                }`}
                onClick={() => setSelectedColor("silver")}
              />
              <button
                className={`w-10 h-10 rounded-full bg-[#FFD166] ${
                  selectedColor === "gold"
                    ? "ring-2 ring-offset-2 ring-gray-500"
                    : ""
                }`}
                onClick={() => setSelectedColor("gold")}
              />
            </div>
          </div>

          {/* Purity Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">PURITY</h3>
            <div className="flex gap-2">
              <button
                className={`px-4 py-2 border rounded-full ${
                  selectedPurity === "14 KT"
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedPurity("14 KT")}
              >
                14 KT
              </button>
              <button
                className={`px-4 py-2 border rounded-full ${
                  selectedPurity === "18 KT"
                    ? "border-gray-900"
                    : "border-gray-300"
                }`}
                onClick={() => setSelectedPurity("18 KT")}
              >
                18 KT
              </button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-900 mb-2">SIZE</h3>
            <div className="relative w-[180px]">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-gray-200"
              >
                <option value="23 (20.0 mm)">23 (20.0 mm)</option>
                <option value="24 (21.0 mm)">24 (21.0 mm)</option>
                <option value="25 (22.0 mm)">25 (22.0 mm)</option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                <ChevronDown size={16} />
              </div>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center mb-8">
            <button
              className="w-10 h-10 border border-gray-300 rounded-l-md flex items-center justify-center"
              onClick={decreaseQuantity}
            >
              <Minus size={16} />
            </button>
            <input
              type="text"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-12 h-10 border-t border-b border-gray-300 text-center"
            />
            <button
              className="w-10 h-10 border border-gray-300 rounded-r-md flex items-center justify-center"
              onClick={increaseQuantity}
            >
              <Plus size={16} />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              className="flex-1 bg-[#283878] text-white py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-[#570136] transition-colors"
              onClick={handleAddToCart}
              disabled={product.outOfStock}
            >
              <ShoppingBag size={20} />
              Add to Cart
            </button>
            <button
              className="flex-1 border border-gray-300 py-3 px-6 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
              onClick={handleBuyNow}
              disabled={product.outOfStock}
            >
              Buy Now
            </button>
          </div>

          {/* Tabs */}
          <div className="border-t border-gray-200">
            {/* Specification */}
            <div className="py-4 border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between"
                onClick={() => toggleTab("specification")}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  SPECIFICATION
                </h3>
                {activeTab === "specification" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {activeTab === "specification" && (
                <div className="mt-4 space-y-2">
                  {product.specification.map((spec, index) => (
                    <div key={index} className="flex">
                      <span className="w-1/3 text-gray-500">{spec.label}</span>
                      <span className="w-2/3 text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Return */}
            <div className="py-4 border-b border-gray-200">
              <button
                className="w-full flex items-center justify-between"
                onClick={() => toggleTab("return")}
              >
                <h3 className="text-lg font-medium text-gray-900">
                  RETURN & REFUND
                </h3>
                {activeTab === "return" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {activeTab === "return" && (
                <div className="mt-4">
                  <p className="text-gray-600">{product.returnPolicy}</p>
                </div>
              )}
            </div>

            {/* Review */}
            <div className="py-4">
              <button
                className="w-full flex items-center justify-between"
                onClick={() => toggleTab("review")}
              >
                <h3 className="text-lg font-medium text-gray-900">REVIEW</h3>
                {activeTab === "review" ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {activeTab === "review" && (
                <div className="mt-4 space-y-4">
                  {product.reviews.map((review) => (
                    <div
                      key={review.id}
                      className="border-b border-gray-200 pb-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">{review.user}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={
                                i < review.rating
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

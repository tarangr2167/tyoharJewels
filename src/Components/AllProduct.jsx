"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, ListFilter } from "lucide-react";
import ProductCard from "./ProductCard";
import productimage from "../assets/productimage.svg"; // Ensure this path is correct
import productimage2 from "../assets/productimage2.svg"; // Ensure this path is correctt
import { useNavigate } from "react-router-dom";

const AllProduct = () => {
  const navigate = useNavigate(); // ✅ Moved here

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([1200, 25000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isColorOpen, setIsColorOpen] = useState(false);
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);

  const handleHomeClick = () => {
    navigate("/");
  };

  const products = [
    {
      id: 1,
      name: "Symphony of Love Diamond Necklace",
      category: "NECKLACE",
      price: 120000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "green",
      gender: "WOMEN",
      relatedProducts: [2, 7],
    },
    {
      id: 2,
      name: "Mesmerizing Diamond Bracelet",
      category: "BRACELET",
      price: 250000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "green",
      gender: "WOMEN",
      relatedProducts: [1, 7],
    },
    {
      id: 3,
      name: "Classic 22 Karat Yellow Gold Leaf Patterned Finger Ring",
      category: "RING",
      price: 90000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "gold",
      gender: "WOMEN",
      relatedProducts: [5, 8],
    },
    {
      id: 4,
      name: "Infinity Twist Solitaire Finger Ring",
      category: "SOLITAIRE RING",
      price: 250000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "silver",
      gender: "WOMEN",
      relatedProducts: [],
    },
    {
      id: 5,
      name: "Classic 22 Karat Yellow Gold Leaf Patterned Finger Ring",
      category: "RING",
      price: 100000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "gold",
      gender: "WOMEN",
      relatedProducts: [3, 8],
    },
    {
      id: 6,
      name: "Pink Dream Diamond Finger Ring",
      category: "RING",
      price: 90000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "pink",
      gender: "WOMEN",
      relatedProducts: [9],
    },
    {
      id: 7,
      name: "Mesmerizing Diamond Bracelet",
      category: "BRACELET",
      price: 250000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "green",
      gender: "WOMEN",
      relatedProducts: [1, 2],
    },
    {
      id: 8,
      name: "Classic 22 Karat Yellow Gold Leaf Patterned Finger Ring",
      category: "RING",
      price: 90000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "gold",
      gender: "WOMEN",
      relatedProducts: [3, 5],
    },
    {
      id: 9,
      name: "Enchanting Floral Diamond Stud Earrings for Kids",
      category: "EARRINGS",
      price: 90000.0,
      image: productimage,
      hoverImage: productimage2, // Use imported image
      color: "pink",
      gender: "KIDS",
      relatedProducts: [6],
    },
  ];

  const categories = [
    "ALL PRODUCT",
    "ENGAGEMENT RING",
    "SOLITAIRE RING",
    "COUPLE BANDS",
    "COCKTAIL RING",
    "MENS RING",
  ];

  const colors = [
    { name: "gold", hex: "#FFD700" },
    { name: "silver", hex: "#C0C0C0" },
    { name: "pink", hex: "#FFB6C1" },
  ];

  const genders = ["MEN", "WOMEN", "KIDS", "UNISEX"];

  useEffect(() => {
    let result = [...products];

    if (
      selectedCategories.length > 0 &&
      !selectedCategories.includes("ALL PRODUCT")
    ) {
      result = result.filter((product) =>
        selectedCategories.includes(product.category)
      );
    }

    if (selectedColors.length > 0) {
      result = result.filter((product) =>
        selectedColors.includes(product.color)
      );
    }

    if (selectedGenders.length > 0) {
      result = result.filter((product) =>
        selectedGenders.includes(product.gender)
      );
    }

    result = result.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    if (
      selectedCategories.length > 0 ||
      selectedColors.length > 0 ||
      selectedGenders.length > 0
    ) {
      const relatedIds = new Set();
      result.forEach((product) => {
        product.relatedProducts?.forEach((id) => relatedIds.add(id));
      });
      const relatedProducts = products.filter((product) =>
        relatedIds.has(product.id)
      );
      result = [...new Set([...result, ...relatedProducts])];
    }

    setFilteredProducts(result);
  }, [selectedCategories, selectedColors, selectedGenders, priceRange]);

  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "ALL PRODUCT") {
      if (selectedCategories.includes("ALL PRODUCT")) {
        setSelectedCategories([]);
      } else {
        setSelectedCategories(["ALL PRODUCT"]);
      }
    } else {
      if (selectedCategories.includes("ALL PRODUCT")) {
        setSelectedCategories([category]);
      } else {
        if (selectedCategories.includes(category)) {
          setSelectedCategories(
            selectedCategories.filter((c) => c !== category)
          );
        } else {
          setSelectedCategories([...selectedCategories, category]);
        }
      }
    }
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleGenderChange = (gender) => {
    if (selectedGenders.includes(gender)) {
      setSelectedGenders(selectedGenders.filter((g) => g !== gender));
    } else {
      setSelectedGenders([...selectedGenders, gender]);
    }
  };

  const handlePriceChange = (e) => {
    setPriceRange([Number.parseInt(e.target.value), priceRange[1]]);
  };

  const formatPrice = (price) => {
    return price.toLocaleString("en-IN");
  };

  useEffect(() => {
    // Prevent body scrolling when filter panel is open on mobile
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFilterOpen]);

  return (
    <div
      className="md:px-[106px] my-8
     overflow-x-hidden"
    >
      {/* Add CSS for fade-in animation */}
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div className="text-sm mb-8">
        <span
          onClick={handleHomeClick}
          className="text-gray-500 ml-4 cursor-pointer hover:underline"
        >
          Home
        </span>{" "}
        / <span className="font-medium">Ring</span>
      </div>

      <div className=" gap-8">
        {/* Mobile Filter Button */}
        <button
          className="block md:hidden flex items-center gap-2 px-2 py-2 text-sm mx-4 mt-4 border rounded-md bg-white shadow"
          onClick={() => setIsFilterOpen(true)}
        >
          <ListFilter className="w-5 h-5 text-black" />
        </button>
        <div className="flex flex-col lg:flex-row">
          {/* Mobile Filter Slide-in Panel */}
          <div
            className={`fixed inset-0 bg-black/70 z-50 lg:hidden transition-opacity duration-300 ${
              isFilterOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <div
              className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
                isFilterOpen ? "translate-x-0" : "-translate-x-full"
              } overflow-y-auto`}
            >
              <div className="p-4 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="p-1 rounded-full hover:bg-gray-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="p-4">
                {/* Categories */}
                <div className="mb-6 border-b border-[#121212] pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  >
                    <h3 className="font-medium text-gray-800 uppercase">
                      Categories
                    </h3>
                    {isCategoryOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {isCategoryOpen && (
                    <div className="space-y-2">
                      {categories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-${category}`}
                            checked={selectedCategories.includes(category)}
                            onChange={() => handleCategoryChange(category)}
                            className="h-4 w-4 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`mobile-${category}`}
                            className="ml-2 text-sm text-gray-600"
                          >
                            {category}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Colors */}
                <div className="mb-6 border-b border-[#121212] pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => setIsColorOpen(!isColorOpen)}
                  >
                    <h3 className="font-medium text-gray-800 uppercase">
                      Color
                    </h3>
                    {isColorOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {isColorOpen && (
                    <div className="flex flex-wrap gap-2">
                      {colors.map((color) => (
                        <div
                          key={color.name}
                          className={`h-8 w-8 rounded-full cursor-pointer border-2 ${
                            selectedColors.includes(color.name)
                              ? "border-gray-800"
                              : "border-transparent"
                          }`}
                          style={{ backgroundColor: color.hex }}
                          onClick={() => handleColorChange(color.name)}
                        />
                      ))}
                    </div>
                  )}
                </div>

                {/* Gender */}
                <div className="mb-6 border-b border-[#121212] pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => setIsGenderOpen(!isGenderOpen)}
                  >
                    <h3 className="font-medium text-gray-800 uppercase">
                      Gender
                    </h3>
                    {isGenderOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {isGenderOpen && (
                    <div className="space-y-2">
                      {genders.map((gender) => (
                        <div key={gender} className="flex items-center">
                          <input
                            type="checkbox"
                            id={`mobile-${gender}`}
                            checked={selectedGenders.includes(gender)}
                            onChange={() => handleGenderChange(gender)}
                            className="h-4 w-4 border-gray-300 rounded"
                          />
                          <label
                            htmlFor={`mobile-${gender}`}
                            className="ml-2 text-sm text-gray-600"
                          >
                            {gender}
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Price Range */}
                <div className="pb-4">
                  <div
                    className="flex items-center justify-between cursor-pointer mb-3"
                    onClick={() => setIsPriceOpen(!isPriceOpen)}
                  >
                    <h3 className="font-medium text-gray-800 uppercase">
                      Price
                    </h3>
                    {isPriceOpen ? (
                      <ChevronUp size={16} />
                    ) : (
                      <ChevronDown size={16} />
                    )}
                  </div>
                  {isPriceOpen && (
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-600">
                          ₹{formatPrice(priceRange[0])}
                        </span>
                        <span className="text-sm text-gray-600">
                          ₹{formatPrice(priceRange[1])}
                        </span>
                      </div>
                      <input
                        type="range"
                        min="1200"
                        max="250000"
                        value={priceRange[0]}
                        onChange={handlePriceChange}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                    </div>
                  )}
                </div>

                <button
                  onClick={() => setIsFilterOpen(false)}
                  className="w-full bg-[#4A0635] text-white py-3 rounded-md mt-4 font-medium"
                >
                  Apply Filters
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Sidebar Filters - Only visible on desktop */}
          <div className="hidden lg:block lg:w-1/4">
            <div className="bg-white ml-4 rounded-md">
              {/* Categories */}
              <div className="mb-6 border-b border-[#121212]">
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                >
                  <h3 className="font-medium text-gray-800 uppercase">
                    Categories
                  </h3>
                  {isCategoryOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {isCategoryOpen && (
                  <div className="space-y-2 mb-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="checkbox"
                          id={category}
                          checked={selectedCategories.includes(category)}
                          onChange={() => handleCategoryChange(category)}
                          className="h-4 w-4 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={category}
                          className="ml-2 text-sm text-gray-600"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Colors */}
              <div className="mb-6 border-b border-[#121212]">
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setIsColorOpen(!isColorOpen)}
                >
                  <h3 className="font-medium text-gray-800 uppercase">Color</h3>
                  {isColorOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {isColorOpen && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {colors.map((color) => (
                      <div
                        key={color.name}
                        className={`h-8 w-8 rounded-full cursor-pointer border-2 ${
                          selectedColors.includes(color.name)
                            ? "border-gray-800"
                            : "border-transparent"
                        }`}
                        style={{ backgroundColor: color.hex }}
                        onClick={() => handleColorChange(color.name)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Gender */}
              <div className="mb-6 border-b border-[#121212]">
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setIsGenderOpen(!isGenderOpen)}
                >
                  <h3 className="font-medium text-gray-800 uppercase">
                    Gender
                  </h3>
                  {isGenderOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {isGenderOpen && (
                  <div className="space-y-2 mb-2">
                    {genders.map((gender) => (
                      <div key={gender} className="flex items-center">
                        <input
                          type="checkbox"
                          id={gender}
                          checked={selectedGenders.includes(gender)}
                          onChange={() => handleGenderChange(gender)}
                          className="h-4 w-4 border-gray-300 rounded"
                        />
                        <label
                          htmlFor={gender}
                          className="ml-2 text-sm text-gray-600"
                        >
                          {gender}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Price Range */}
              <div className="border-b border-[#121212] ">
                <div
                  className="flex items-center justify-between cursor-pointer mb-3"
                  onClick={() => setIsPriceOpen(!isPriceOpen)}
                >
                  <h3 className="font-medium text-gray-800 uppercase">Price</h3>
                  {isPriceOpen ? (
                    <ChevronUp size={16} />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                </div>
                {isPriceOpen && (
                  <div className="mb-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-600">
                        ₹{formatPrice(priceRange[0])}
                      </span>
                      <span className="text-sm text-gray-600">
                        ₹{formatPrice(priceRange[1])}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1200"
                      max="250000"
                      value={priceRange[0]}
                      onChange={handlePriceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className=" g:w-3/4">
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-4">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div key={product.id} className="relative fade-in">
                    <ProductCard product={product} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500">
                    No products found matching your filters.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;

"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  ShoppingBag,
  Heart,
  User,
  ChevronRight,
} from "lucide-react";
import Cart from "../Components/Cart";
import Wishlist from "../Components/WishList";
import ring from "../assets/ring.svg?url";
import earring from "../assets/earring.svg?url";
import necklace from "../assets/necklaces.svg?url";
import bracelet from "../assets/bracelet.svg?url";
import flag from "../assets/flag.svg?url";
import testingimg from "../assets/testingimg.jpg";

const navItems = [
  {
    name: "RING",
    icon: ring,
    subCategories: [
      { name: "ENGAGEMENT RING", slug: "engagement" },
      { name: "SOLITAIRE RING", slug: "solitaire" },
      { name: "COUPLE BANDS", slug: "couple-bands" },
      { name: "COCKTAIL RING", slug: "cocktail" },
      { name: "EVERYDAY WEAR", slug: "everyday" },
      { name: "MENS RING", slug: "mens" },
    ],
  },
  {
    name: "EARRINGS",
    icon: earring,
    subCategories: [
      { name: "STUD EARRINGS", slug: "stud" },
      { name: "DROP EARRINGS", slug: "drop" },
      { name: "HOOP EARRINGS", slug: "hoop" },
      { name: "CHANDELIER", slug: "chandelier" },
      { name: "EVERYDAY WEAR", slug: "everyday" },
    ],
  },
  {
    name: "NECKLACES",
    icon: necklace,
    subCategories: [
      { name: "PENDANT NECKLACES", slug: "pendant" },
      { name: "CHAIN NECKLACES", slug: "chain" },
      { name: "CHOKERS", slug: "chokers" },
      { name: "STATEMENT PIECES", slug: "statement" },
      { name: "LAYERED SETS", slug: "layered" },
    ],
  },
  {
    name: "BRACELET",
    icon: bracelet,
    subCategories: [
      { name: "TENNIS BRACELETS", slug: "tennis" },
      { name: "CHARM BRACELETS", slug: "charm" },
      { name: "BANGLES", slug: "bangles" },
      { name: "CUFF BRACELETS", slug: "cuff" },
      { name: "EVERYDAY WEAR", slug: "everyday" },
    ],
  },
];

const sampleProducts = [
  {
    id: 1,
    name: "Diamond Engagement Ring",
    category: "RING",
    price: 1299,
    image: testingimg,
  },
  {
    id: 2,
    name: "Gold Wedding Band",
    category: "RING",
    price: 899,
    image: testingimg,
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    category: "EARRINGS",
    price: 499,
    image: testingimg,
  },
  {
    id: 4,
    name: "Ruby Stud Earrings",
    category: "EARRINGS",
    price: 599,
    image: testingimg,
  },
  {
    id: 5,
    name: "Sapphire Pendant Necklace",
    category: "NECKLACES",
    price: 799,
    image: testingimg,
  },
  {
    id: 6,
    name: "Diamond Tennis Bracelet",
    category: "BRACELET",
    price: 1499,
    image: testingimg,
  },
  {
    id: 7,
    name: "Emerald Butterfly Ring",
    category: "RING",
    price: 1099,
    image: testingimg,
  },
  {
    id: 8,
    name: "Silver Chain Necklace",
    category: "NECKLACES",
    price: 299,
    image: testingimg,
  },
];

export default function Navbar2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const searchRef = useRef(null);
  const dropdownRef = useRef(null);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filteredProducts = sampleProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredProducts);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    console.log("Searching for:", searchQuery);
  };

  const handleSuggestionClick = (product) => {
    console.log("Selected product:", product);
    setSearchQuery(product.name);
    setShowSuggestions(false);
  };

  const handleMouseEnter = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  const handleDropdownEnter = () => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
    setHoverTimeout(timeout);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.addEventListener("mousedown", handleClickOutside);
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
    };
  }, [hoverTimeout, searchRef]);

  const formatPrice = (price) => {
    return `₹${price.toLocaleString()}`;
  };

  // Fallback for categories with fewer than 4 products
  const getProductGrid = () => {
    if (!activeDropdown) return [];
    const filteredProducts = sampleProducts
      .filter((product) => product.category === activeDropdown)
      .slice(0, 4);

    // Add placeholder products if fewer than 4
    const placeholders = Array(4 - filteredProducts.length)
      .fill(null)
      .map((_, index) => ({
        id: `placeholder-${index}`,
        name: "Coming Soon",
        category: activeDropdown,
        price: 0,
        image: "/assets/placeholder.jpg",
      }));

    return [...filteredProducts, ...placeholders];
  };

  return (
    <>
      <header className="w-full relative z-20">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-[#283878] relative w-6 h-6 flex items-center justify-center"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  aria-label="Toggle main menu"
                >
                  <span className="sr-only">Open main menu</span>
                  <Menu
                    className={`h-6 w-6 transition-opacity duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-0" : "opacity-100"
                    } absolute`}
                    aria-hidden="true"
                  />
                  <X
                    className={`h-6 w-6 transition-opacity duration-300 ease-in-out ${
                      isMenuOpen ? "opacity-100" : "opacity-0"
                    } absolute`}
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-[#283878] text-2xl font-bold">
                  TYOHAR
                </Link>
              </div>

              <div
                className="hidden md:flex flex-1 max-w-lg mx-4"
                ref={searchRef}
              >
                <form onSubmit={handleSearch} className="relative w-full">
                  <div className="relative flex items-center w-full">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={handleSearchChange}
                      onFocus={() =>
                        searchQuery.trim().length > 0 &&
                        setShowSuggestions(true)
                      }
                      className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#283878]"
                      placeholder="Search product..."
                      aria-label="Search products"
                    />
                    <button
                      type="submit"
                      className="absolute right-0 p-2 bg-[#283878] rounded-full mr-0.5 my-0.5"
                      aria-label="Submit search"
                    >
                      <Search className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-80 overflow-y-auto no-scrollbar">
                      <ul className="py-1">
                        {suggestions.map((product) => (
                          <li
                            key={product.id}
                            onClick={() => handleSuggestionClick(product)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                            role="option"
                            aria-selected="false"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-md overflow-hidden">
                                <img
                                  src={
                                    product.image || "/assets/placeholder.jpg"
                                  }
                                  alt={product.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 truncate">
                                  {product.name}
                                </p>
                                <p className="text-xs text-gray-500">
                                  {product.category}
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <p className="text-sm font-medium text-[#283878]">
                                  {formatPrice(product.price)}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </form>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-6 h-6">
                  <img
                    src={flag || "/assets/placeholder.jpg"}
                    alt="India"
                    className="w-6 h-6"
                  />
                </div>
                <button
                  type="button"
                  onClick={toggleCart}
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Shopping bag"
                >
                  <ShoppingBag className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={toggleWishlist}
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Wishlist"
                >
                  <Heart className="h-6 w-6" />
                </button>
                <Link
                  to="/login"
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Account"
                >
                  <User className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden px-4 pb-3" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative w-full">
              <div className="relative flex items-center w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() =>
                    searchQuery.trim().length > 0 && setShowSuggestions(true)
                  }
                  className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#283878]"
                  placeholder="Search product..."
                  aria-label="Search products"
                />
                <button
                  type="submit"
                  className="absolute right-0 p-2 bg-[#283878] rounded-full mr-0.5 my-0.5"
                  aria-label="Submit search"
                >
                  <Search className="h-4 w-4 text-white" />
                </button>
              </div>

              {showSuggestions && suggestions.length > 0 && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto no-scrollbar">
                  <ul className="py-1">
                    {suggestions.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleSuggestionClick(product)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        role="option"
                        aria-selected="false"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={product.image || "/assets/placeholder.jpg"}
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {product.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {product.category}
                            </p>
                          </div>
                          <div className="flex-shrink-0">
                            <p className="text-sm font-medium text-[#283878]">
                              {formatPrice(product.price)}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </form>
          </div>

          <div
            className={`md:hidden absolute top-0 left-0 w-full bg-white z-10 transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <button
              type="button"
              className="absolute top-4 right-4 text-[#283878] w-6 h-6 flex items-center justify-center"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close main menu"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/allproduct/${item.name.toLowerCase()}`}
                  className="flex items-center text-[#121212] hover:text-[#283878] px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <img
                    src={item.icon || "/assets/placeholder.jpg"}
                    alt={item.name}
                    className="w-5 h-5 mr-2"
                  />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex justify-center space-x-12 py-3 border-t border-gray-200">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={`/allproduct/${item.name.toLowerCase()}`}
                  className="flex items-center text-[#121212] hover:text-[#283878] text-sm font-medium"
                >
                  <img
                    src={item.icon || "/assets/placeholder.jpg"}
                    alt={item.name}
                    className="w-5 h-5 mr-2"
                  />
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Dropdown Menus */}
        {activeDropdown && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50 duration-200"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
              <div className="absolute top-4 right-4">
                <Link
                  to={`/category/${activeDropdown?.toLowerCase()}`}
                  className="inline-flex items-center text-[#283878] font-medium text-sm hover:underline"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories Section */}
                <div className="lg:col-span-1">
                  <h3 className="text-lg font-bold text-[#283878] mb-4 tracking-wide">
                    {activeDropdown}
                  </h3>
                  <div className="space-y-2">
                    {navItems
                      .find((item) => item.name === activeDropdown)
                      ?.subCategories.map((subCategory, index) => (
                        <Link
                          key={index}
                          to={`/category/${subCategory.slug}`}
                          className="flex items-center justify-between text-gray-700 hover:text-[#283878] py-2 px-3 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <span className="text-sm font-medium">
                            {index + 1}. {subCategory.name}
                          </span>
                          <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                      ))}
                  </div>
                </div>

                {/* Products Section */}
                <div className="lg:col-span-3 mt-5">
                  <div className="grid grid-cols-4 gap-6">
                    {getProductGrid().map((product) => (
                      <div key={product.id} className="group cursor-pointer">
                        <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square mb-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="text-center">
                          <h4 className="text-sm font-medium text-gray-900 mb-1 group-hover:text-[#283878] transition-colors duration-200">
                            {product.name}
                          </h4>
                          <p className="text-[#283878] font-semibold text-sm">
                            {product.price > 0
                              ? formatPrice(product.price)
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {isCartOpen && <Cart toggleCart={toggleCart} />}
      {isWishlistOpen && <Wishlist toggleWishlist={toggleWishlist} />}
    </>
  );
}

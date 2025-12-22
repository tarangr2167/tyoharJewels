"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, ShoppingBag, Heart, User } from "lucide-react";
import Cart from "../Components/Cart"; // 🔁 update path if needed
import Wishlist from "../Components/WishList"; // 🔁 update path to match Wishlist component location
import ring from "../assets/ring.svg";
import earring from "../assets/earring.svg";
import necklace from "../assets/necklaces.svg";
import bracelet from "../assets/bracelet.svg";
import flag from "../assets/flag.svg"; // Ensure this path is correct

const navItems = [
  { name: "RING", icon: ring },
  { name: "EARRINGS", icon: earring },
  { name: "NECKLACES", icon: necklace },
  { name: "BRACELET", icon: bracelet },
];

// Sample product data - replace with your actual product data or API call
const sampleProducts = [
  {
    id: 1,
    name: "Diamond Engagement Ring",
    category: "RING",
    price: 1299,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Gold Wedding Band",
    category: "RING",
    price: 899,
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    category: "EARRINGS",
    price: 499,
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Ruby Stud Earrings",
    category: "EARRINGS",
    price: 599,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Sapphire Pendant Necklace",
    category: "NECKLACES",
    price: 799,
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Diamond Tennis Bracelet",
    category: "BRACELET",
    price: 1499,
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Emerald Butterfly Ring",
    category: "RING",
    price: 1099,
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Silver Chain Necklace",
    category: "NECKLACES",
    price: 299,
    image: "/placeholder.svg",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); // ✅ cart state
  const [isWishlistOpen, setIsWishlistOpen] = useState(false); // ✅ wishlist state
  const [isSearchOpen, setIsSearchOpen] = useState(false); // New state for search modal
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const searchRef = useRef(null);

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleWishlist = () => setIsWishlistOpen(!isWishlistOpen);
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  // Handle search input change and filter suggestions
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      // Filter products based on search query
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

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault();
    setShowSuggestions(false);
    // Implement search functionality here
    console.log("Searching for:", searchQuery);
    // Optionally close the search modal after search
    // setIsSearchOpen(false);
  };

  // Handle clicking on a suggestion
  const handleSuggestionClick = (product) => {
    console.log("Selected product:", product);
    setSearchQuery(product.name);
    setShowSuggestions(false);
    // Navigate to product page or perform search
    // history.push(`/product/${product.id}`);
  };

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Format price with currency
  const formatPrice = (price) => {
    return `₹${price.toFixed(2)}`;
  };

  return (
    <>
      <header className="w-full">
        {/* Main navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Mobile menu button */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-[#283878]"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {isMenuOpen ? (
                    <X className="h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Menu className="h-6 w-6" aria-hidden="true" />
                  )}
                </button>
              </div>

              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="text-[#283878] text-2xl font-bold">
                  TYOHAR
                </Link>
              </div>

              {/* Desktop navigation */}
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={`/allproduct${item.name.toLowerCase()}`}
                    className="flex items-center text-[#121212] hover:text-[#283878] px-3 py-2 text-sm font-medium"
                  >
                    <img
                      src={item.icon || "/placeholder.svg"}
                      alt={item.name}
                      className="w-5 h-5 mr-1"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>

              {/* Right icons */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-6 h-6">
                  <img
                    src={flag || "/placeholder.svg"} // Corrected to use flag directly
                    alt="India"
                    className="w-6 h-6"
                  />
                </div>
                <button
                  type="button"
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Search"
                  onClick={toggleSearch}
                >
                  <Search className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={toggleCart} // ✅ show cart
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Shopping bag"
                >
                  <ShoppingBag className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  onClick={toggleWishlist} // ✅ show wishlist
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Wishlist"
                >
                  <Heart className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="text-[#121212] hover:text-[#283878]"
                  aria-label="Account"
                >
                  <User className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/allproduct${item.name.toLowerCase()}`}
                  className="flex items-center text-[#121212] hover:text-[#283878] px-3 py-2 text-base font-medium"
                >
                  <img
                    src={item.icon || "/placeholder.svg"}
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
              <Link
                key={item.name}
                to={`/allproduct${item.name.toLowerCase()}`}
                className="flex items-center text-[#121212] hover:text-[#283878] text-sm font-medium"
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.name}
                  className="w-5 h-5 mr-2"
                />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Search Modal - Fixed positioning to ensure it displays properly */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Black background with opacity-20 */}
          <div
            className="fixed inset-0 bg-black bg-opacity-20"
            onClick={toggleSearch}
          ></div>

          {/* Search container */}
          <div className="relative w-full max-w-md mx-auto z-10 p-4">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              {/* Search header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="text-lg font-medium text-gray-900">
                  Search Products
                </h3>
                <button
                  type="button"
                  className="text-gray-400 hover:text-gray-500"
                  onClick={toggleSearch}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Search form */}
              <div className="p-4" ref={searchRef}>
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
                      className="w-full pl-10 pr-16 py-2 border border-gray-300 rounded-full text-sm focus:outline-none"
                      placeholder="Search product..."
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-0 p-2 bg-[#283878] rounded-full mr-0.5 my-0.5"
                    >
                      <Search className="h-4 w-4 text-white" />
                    </button>
                  </div>

                  {/* Search Suggestions Dropdown - Positioned absolutely */}
                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute left-0 right-0 z-20 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-60 overflow-y-auto">
                      <ul className="py-1">
                        {suggestions.map((product) => (
                          <li
                            key={product.id}
                            onClick={() => handleSuggestionClick(product)}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded-md overflow-hidden">
                                <img
                                  src={product.image || "/placeholder.svg"}
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
            </div>
          </div>
        </div>
      )}

      {/* 🔥 Cart Component */}
      {isCartOpen && <Cart toggleCart={toggleCart} />}
      {/* 🔥 Wishlist Component */}
      {isWishlistOpen && <Wishlist toggleWishlist={toggleWishlist} />}
    </>
  );
}

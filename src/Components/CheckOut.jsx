"use client";

import { useState } from "react";
import { ChevronDown, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate(); // ⬅️ Create navigate function

  const [paymentMethod, setPaymentMethod] = useState("online");
  const [viewBill, setViewBill] = useState(false);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const toggleViewBill = () => {
    setViewBill(!viewBill);
  };
  const handleHomeClick = () => {
    navigate("/");
  };

  const navigateToRings = () => {
    navigate("/allproductring");
  };

  const navigateToProduct = () => {
    navigate("/product");
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Breadcrumb */}
      <div className="text-sm mb-8">
        <p className="text-gray-600 space-x-1">
          <button
            onClick={handleHomeClick}
            className="text-gray-500 hover:text-gray-700"
          >
            Home
          </button>

          <span>/</span>
          <button
            onClick={navigateToRings}
            className="text-gray-500 hover:text-gray-700"
          >
            Ring
          </button>
          <span>/</span>
          <span
            className="font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={navigateToProduct}
          >
            Mabel Butterfly Big Green Stone Ring
          </span>
          <span>/</span>
          <span className="text-gray-600 hover:text-gray-800 cursor-pointer">
            Cart
          </span>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column - Contact & Shipping (Larger) */}
        <div className="w-full lg:w-2/3">
          {/* Contact Information */}
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase mb-4">
              Contact Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="FIRST NAME"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="LAST NAME"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="EMAIL ADDRESS"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="PHONE NUMBER"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase mb-4">
              Shipping Address
            </h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  placeholder="YOUR ADDRESS"
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="APARTMENT, SUIT, Etc."
                  className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="YOUR CITY"
                    className="w-full border-b border-gray-300 py-2 pr-8 focus:outline-none focus:border-gray-500 text-sm"
                  />
                  {/* <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-500" /> */}
                </div>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="YOUR STATE"
                    className="w-full border-b border-gray-300 py-2 pr-8 focus:outline-none focus:border-gray-500 text-sm"
                  />
                  {/* <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-500" /> */}
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="ZIP CODE"
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-gray-500 text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-sm font-medium uppercase mb-4">
              Payment Method
            </h2>
            <div className="space-y-4">
              <div className="border-b border-gray-300 pb-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "online"}
                    onChange={() => handlePaymentMethodChange("online")}
                    className="w-4 h-4 text-purple-900"
                  />
                  <span className="text-sm">ONLINE PAYMENT</span>
                </label>
              </div>
              <div className="border-b border-gray-300 pb-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    checked={paymentMethod === "cod"}
                    onChange={() => handlePaymentMethodChange("cod")}
                    className="w-4 h-4 text-purple-900"
                  />
                  <span className="text-sm">CASE ON DELIVERY</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary (Smaller) */}
        <div className="w-full lg:w-1/3">
          <div className="bg-white rounded-lg">
            <h2 className="text-sm font-medium uppercase mb-4">
              Order Summary
            </h2>

            {/* Product Items */}
            <div className="space-y-4 mb-6">
              {/* Product 1 */}
              <div className="flex gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Mabel Butterfly Ring"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-1 right-1 bg-[#283878] hover:bg-[#283878]/90 rounded p-1">
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold">
                    MABEL BUTTERFLY BIG GREEN STONE RING
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">QTY: 1</p>
                  <p className="text-sm font-semibold mt-2">₹599.00</p>
                </div>
              </div>

              {/* Product 2 (duplicate for demo) */}
              <div className="flex gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=96&width=96"
                    alt="Mabel Butterfly Ring"
                    className="w-full h-full object-cover"
                  />
                  <button className="absolute top-1 right-1 bg-[#283878] hover:bg-[#283878]/90 rounded p-1">
                    <Trash2 className="w-4 h-4 text-white" />
                  </button>
                </div>
                <div className="flex-1">
                  <h3 className="text-xs font-bold">
                    MABEL BUTTERFLY BIG GREEN STONE RING
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">QTY: 1</p>
                  <p className="text-sm font-semibold mt-2">₹599.00</p>
                </div>
              </div>
            </div>

            {/* View Bill Toggle */}
            <div className="border-t border-gray-200 pt-4 mb-4">
              <button
                className="flex justify-between items-center w-full"
                onClick={toggleViewBill}
              >
                <span className="text-sm">View Bill</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    viewBill ? "rotate-180" : ""
                  }`}
                />
              </button>

              {viewBill && (
                <div className="mt-4 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹599.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tax</span>
                    <span>₹0.00</span>
                  </div>
                </div>
              )}
            </div>

            {/* Subtotal */}
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm font-medium">SUBTOTAL</p>
                <p className="text-xs text-gray-500">(incl. of all taxes)</p>
              </div>
              <p className="text-sm font-bold">₹599.00</p>
            </div>

            {/* Payment Button */}
            <button className="w-full bg-[#283878] hover:bg-[#283878]/90 text-white py-3 rounded-full flex items-center justify-center gap-2 mt-4">
              <span className="text-sm font-medium">Payment Now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

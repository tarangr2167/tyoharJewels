"use client";

import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PenIcon, LogOut, Check } from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("personal");
  const [profileImage, setProfileImage] = useState(
    "/placeholder.svg?height=100&width=100"
  );
  const fileInputRef = useRef(null);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Sample order data
  const orders = [
    {
      id: "ORD001",
      image: "/placeholder.svg?height=200&width=200",
      shippingAddress: "John Doe 123 Main St. Springfield, IL 62701 USA",
      trackingId: "0000 0000 0000 0000",
      price: "₹120000.00",
      status: "shipping",
      statusSteps: [
        { id: "confirm", label: "ORDER CONFORM", completed: true },
        {
          id: "shipping",
          label: "ORDER SHIPPING",
          completed: true,
          details: "order shipping by onista",
        },
        { id: "delivery", label: "OUT FOR DELIVERY", completed: false },
        { id: "delivered", label: "DELIVERED", completed: false },
      ],
    },
    {
      id: "ORD002",
      image: "/placeholder.svg?height=200&width=200",
      shippingAddress: "John Doe 123 Main St. Springfield, IL 62701 USA",
      trackingId: "0000 0000 0000 0000",
      price: "₹120000.00",
      status: "confirm",
      statusSteps: [
        { id: "confirm", label: "ORDER CONFORM", completed: true },
        { id: "shipping", label: "ORDER SHIPPING", completed: false },
        { id: "delivery", label: "OUT FOR DELIVERY", completed: false },
        { id: "delivered", label: "DELIVERED", completed: false },
      ],
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const handleBackToOrders = () => {
    setSelectedOrder(null);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "personal":
        return (
          <div className="w-full">
            <div className="flex mb-8">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
                  <img
                    src={profileImage || "/placeholder.svg"}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button
                  className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md"
                  onClick={() => fileInputRef.current.click()}
                >
                  <PenIcon size={16} className="text-[#12113d]" />
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Gender
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d] bg-transparent"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="dob"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    DOB
                  </label>
                  <input
                    type="date"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d]"
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#12113d] text-white py-3 px-6 rounded-full hover:bg-[#4D0830] transition-colors duration-300"
                >
                  Update Changes
                </button>
              </div>
            </form>
          </div>
        );

      case "orders":
        if (selectedOrder) {
          return (
            <div className="p-4">
              <button
                onClick={handleBackToOrders}
                className="text-[#12113d] mb-6 hover:underline flex items-center"
              >
                ← Back to orders
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                {/* Order Tracking Timeline */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold mb-4">Order Status</h2>

                  <div className="relative">
                    {selectedOrder.statusSteps.map((step, index) => (
                      <div key={step.id} className="flex mb-8 relative">
                        {/* Vertical line */}
                        {index < selectedOrder.statusSteps.length - 1 && (
                          <div
                            className={`absolute left-[15px] top-[30px] w-[2px] h-[calc(100%-0px)] ${
                              step.completed ? "bg-[#12113d]" : "bg-gray-200"
                            }`}
                          ></div>
                        )}

                        {/* Status circle */}
                        <div
                          className={`relative z-10 flex items-center justify-center w-8 h-8 rounded-full mr-4 ${
                            step.completed
                              ? "bg-[#12113d] text-white"
                              : "bg-white border-2 border-gray-200"
                          }`}
                        >
                          {step.completed && <Check size={16} />}
                        </div>

                        {/* Status content */}
                        <div className="flex-1">
                          <h3 className="font-bold">{step.label}</h3>
                          {step.details && (
                            <p className="text-sm text-gray-600">
                              {step.details}
                            </p>
                          )}
                          {step.id === "confirm" && (
                            <p className="text-sm text-gray-600 mt-1">
                              Tracking ID: {selectedOrder.trackingId}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-6">My Orders</h2>

            {orders.length > 0 ? (
              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleOrderClick(order)}
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-32 h-32">
                        <img
                          src={order.image || "/placeholder.svg"}
                          alt="Product"
                          className="w-full h-full object-cover rounded-md"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Shipping Address:</span>{" "}
                          {order.shippingAddress}
                        </p>
                        <p className="text-sm text-gray-600 mb-2">
                          <span className="font-medium">Tracking ID:</span>{" "}
                          {order.trackingId}
                        </p>
                        <p className="text-lg font-bold text-[#12113d]">
                          {order.price}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>You have no orders yet.</p>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="text-sm text-gray-600">
          <span
            className="cursor-pointer hover:text-[#12113d]"
            onClick={() => navigate("/")}
          >
            Home
          </span>{" "}
          / Profile
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Sidebar Menu */}
              <div className="w-full md:w-64 flex-shrink-0 flex flex-col">
                <div className="space-y-2 flex-grow">
                  <button
                    onClick={() => {
                      setActiveTab("personal");
                      setSelectedOrder(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      activeTab === "personal"
                        ? "bg-[#12113d] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    Personal Information
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("orders");
                      setSelectedOrder(null);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-md transition-colors ${
                      activeTab === "orders"
                        ? "bg-[#12113d] text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    My Order
                  </button>
                  {/* Log Out Button */}
                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => navigate("/")}
                      className="flex items-center text-[#12113d] hover:text-[#4D0830] justify-center transition-colors px-4 py-2"
                    >
                      <LogOut size={18} className="mr-2" />
                      Log Out
                    </button>
                  </div>
                </div>
              </div>

              {/* Main Tab Content */}
              <div className="flex-1">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import login from "../assets/login.svg";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (!formData.rePassword) {
      newErrors.rePassword = "Please confirm your password";
    } else if (formData.password !== formData.rePassword) {
      newErrors.rePassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);

      // Simulate API call
      setTimeout(() => {
        console.log("Signup submitted:", formData);
        setIsSubmitting(false);
      }, 1000);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="flex md:min-h-screen">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-md">
          <h1 className="text-center text-3xl font-light text-[#12113d] mb-12">
            TYOHAR
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label
                htmlFor="name"
                className="text-xs uppercase text-[#12113d] font-medium"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d] bg-transparent ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="email"
                className="text-xs uppercase text-[#12113d] font-medium"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d] bg-transparent ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="password"
                className="text-xs uppercase text-[#12113d] font-medium"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d] bg-transparent ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <div className="space-y-1">
              <label
                htmlFor="rePassword"
                className="text-xs uppercase text-[#12113d] font-medium"
              >
                Re-Password
              </label>
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                value={formData.rePassword}
                onChange={handleChange}
                className={`w-full border-b border-gray-300 py-2 focus:outline-none focus:border-[#12113d] bg-transparent ${
                  errors.rePassword ? "border-red-500" : ""
                }`}
              />
              {errors.rePassword && (
                <p className="text-red-500 text-xs mt-1">{errors.rePassword}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#12113d] text-white py-3 rounded-full hover:bg-[#4D0830] transition-colors duration-300 mt-8 disabled:opacity-70"
            >
              {isSubmitting ? "Processing..." : "Signup"}
            </button>

            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account? </span>
              <Link to="/login" className="text-[#12113d] hover:underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div className="hidden lg:block w-1/2 relative">
        <img
          src={login}
          alt="Luxury jewelry bracelet"
          className="object-cover w-full h-full absolute top-0 left-0"
        />
      </div>
    </div>
  );
}

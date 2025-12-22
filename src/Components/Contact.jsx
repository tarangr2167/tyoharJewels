"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate(); // ⬅️ Create navigate function

  const [formData, setFormData] = useState({
    name: "",
    number: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // const navigateToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  //   navigate("/"); // ⬅️ Navigate to Home page
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      number: "",
      subject: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f8f3fa]">
      {/* Breadcrumb Navigation */}
      <div
        className="container md:px-[106px]
     overflow-x-hidden mx-auto px-4 py-4"
      >
        <div className="text-sm md:mt-8">
          <Link to="/" className="hover:text-[#283878]">
            Home
          </Link>{" "}
          / Contact
        </div>
      </div>

      {/* Page Title */}
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="text-3xl font-serif text-[#283878]">GET IN TOUCH</h1>
      </div>

      {/* Google Map */}
      <div
        className="container md:px-[106px]
     overflow-x-hidden mx-auto px-4 mb-8"
      >
        <div className="rounded-lg overflow-hidden h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14767.262289338461!2d70.79647565!3d22.284565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca248c77c099%3A0xdf5ac10af64ac8ee!2sHANS%20SOCIETY!5e0!3m2!1sen!2sin!4v1681472412854!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Tyohar Jewels Location"
          ></iframe>
        </div>
      </div>
      {/* Contact Form */}
      <div
        className="container md:px-[106px]
     overflow-x-hidden mx-auto px-4 py-12"
      >
        <div className="flex flex-col md:flex-row rounded-3xl overflow-hidden bg-[#fbeef8]">
          {/* Left: Contact Information */}
          <div className="bg-[#283878] text-white p-8 md:w-2/5 mx-2.5 my-2.5 md:ml-5 md:my-5 relative flex justify-center rounded-3xl">
            <div className="w-full">
              <h2 className="text-xl font-semibold mb-4">
                Contact Information
              </h2>
              <p className="text-sm mb-10">
                Feel free to reach out to our team through our Contact Us page
                or social media platforms for any assistance.
              </p>

              <div className="space-y-6 text-sm">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>+91 83206 70742</p>
                    <p>+91 83206 70742</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>shrutiksojitra04@gmail.com</p>
                    <p>sojitrashrutik@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-4 mt-1 flex-shrink-0" />
                  <p>
                    Tyohar Jewels, 2nd Floor, Shree Arcade, C.G. Road,
                    Ahmedabad, Gujarat – 380009, India
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative circle */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full translate-x-[-30%] translate-y-[30%]"></div>
            <div
              className="
    absolute bottom-0 right-0 
    w-60 h-60 
    bg-white/10 
    rounded-full 
    overflow-hidden
    translate-x-[30%] translate-y-[30%] 
    overflow-hidden
  "
            ></div>
          </div>

          {/* Right: Contact Form */}
          <div className="p-8 md:w-3/5">
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-gray-600 uppercase mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300  bg-transparent focus:border-[#283878] focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="number"
                    className="block text-xs text-gray-600 uppercase mb-1.5"
                  >
                    Your Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleChange}
                    className="w-full border-b border-gray-300 bg-transparent focus:border-[#283878] focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs text-gray-600 uppercase mb-1.5"
                >
                  Your Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 bg-transparent focus:border-[#283878] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs text-gray-600 uppercase mb-1.5"
                >
                  Your Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 py-1 bg-transparent focus:border-[#283878] focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs text-gray-600 uppercase mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full border-b border-gray-300 py-2 bg-transparent resize-none focus:border-[#283878] focus:outline-none"
                  required
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#283878] text-white py-3 px-6 rounded-full flex items-center justify-center hover:bg-[#5a0239] transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

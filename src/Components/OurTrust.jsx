import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import trust from "../assets/trust.jpg"; // Adjust the path as necessary
import send from "../assets/send.svg"; // Adjust the path as necessary

const OurTrust = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    emailAddress: "",
    date: "",
    timeSlots: ["", ""],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "timeSlots") {
      const index = parseInt(e.target.dataset.index);
      const newTimeSlots = [...formData.timeSlots];
      newTimeSlots[index] = value;
      setFormData({ ...formData, timeSlots: newTimeSlots });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const addTimeSlot = () => {
    if (formData.timeSlots.length < 4) {
      setFormData({ ...formData, timeSlots: [...formData.timeSlots, ""] });
    }
  };

  const isSubmitDisabled =
    formData.timeSlots.filter((slot) => slot.trim()).length < 2;

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="flex flex-col items-center justify-center md:px-[106px] p-4 ">
      <div className="w-full">
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={() => navigate("/")}
            className="text-gray-600 hover:text-gray-800 text-sm"
          >
            Home / Our Trust
          </button>
        </div>
        <div className="relative w-full h-110 bg-gray-300 rounded-[30px] overflow-hidden mb-6">
          <img
            src={trust}
            alt="Handshake"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">OUR TRUST</h1>
          </div>
        </div>
        <form className=" rounded-lg space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Contact Number</label>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Email Address</label>
              <input
                type="email"
                name="emailAddress"
                value={formData.emailAddress}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-gray-700">Select Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                min={today}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-700">Select Time</label>
              <input
                type="time"
                name="timeSlots"
                data-index={0}
                value={formData.timeSlots[0]}
                onChange={handleChange}
                className="w-full p-2 border-b border-gray-300 focus:outline-none"
              />
            </div>
            {formData.timeSlots.map((slot, index) =>
              index > 0 ? (
                <div key={index}>
                  <label className="block text-gray-700">
                    Preferred Time Slot {index + 1}
                  </label>
                  <input
                    type="time"
                    name="timeSlots"
                    data-index={index}
                    value={slot}
                    onChange={handleChange}
                    className="w-full p-2 border-b border-gray-300 focus:outline-none"
                  />
                </div>
              ) : null
            )}
            {formData.timeSlots.length < 4 && (
              <button
                type="button"
                onClick={addTimeSlot}
                className="text-[#283878] hover:text-[#283878] text-sm flex justify-start items-center"
              >
                + Add More Time Slot
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitDisabled}
            className={`flex items-center gap-2 whitespace-nowrap        
              px-6 py-3 rounded-full text-white transition-colors
              ${
                isSubmitDisabled
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#283878] hover:bg-[#37001D]"
              }`}
          >
            <img
              src={send}
              alt=""
              className="w-5 h-5 shrink-0" /* shrink-0 stops the icon from squeezing */
              aria-hidden="true"
            />
            <span>Submit Meeting Request</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default OurTrust;

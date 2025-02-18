import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function PopFor({ closePopForm }: Record<string, any>) {
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    financing: "",
    note: "",
    consent: false,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("Message sent successfully!");
    console.log(formData);
  };

  return createPortal(
    <div
      onClick={closePopForm} // Clicking outside closes the popup
      className="w-full h-screen bg-black/40 fixed top-0 left-0 flex justify-center items-center z-50"
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg relative "
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.75 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside the form
      >
        <button onClick={()=>{closePopForm()}} className="absolute top-0 right-0 p-2 sm:p-5">
          <FontAwesomeIcon icon={faClose}/>
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">
          📅 BOOK A FREE CONSULTATION
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                First <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Last <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last"
                value={formData.lastName}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Email <span className="text-red-700">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Phone Number <span className="text-red-700">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Financing <span className="text-red-700">*</span>
            </label>
            <select
              name="financing"
              value={formData.financing}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
              required
            >
              <option value="">Please choose an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Note for doctor
            </label>
            <textarea
              name="note"
              placeholder="Note for doctor"
              value={formData.note}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full"
            ></textarea>
          </div>

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-sm">
              By checking this box, I consent to receive phone calls, texts, and
              emails.
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition"
          >
            Claim My Free Consultation
          </button>

          {message && (
            <p className="mt-4 text-sm text-orange-500 text-center">
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </div>,
    document.body
  );
}

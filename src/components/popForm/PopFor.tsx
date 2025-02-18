import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";

export default function PopFor({ openPopForm }: Record<string, any>) {
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

  const [isOpen, setIsOpen] = useState(false); // Controls the visibility of the form

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setMessage("Message sent successfully!");
    console.log(formData);
  };

  // Conditional rendering of pop-up

  return (
    <div
      onClick={() => openPopForm()}
      className="w-full h-screen bg-black/40 fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50"
    >
      {/* Render the pop-up using a portal */}
      {createPortal(
        <>
          {/* Pop-up Form with Framer Motion animation */}
          <motion.div
            className="fixed inset-0 flex justify-center items-center z-50"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
            >
              <h2 className="text-xl font-bold mb-4 text-center">
                📅 BOOK A FREE CONSULTATION
              </h2>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold mb-1"
                  >
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
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold mb-1"
                  >
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
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold mb-1"
                >
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
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold mb-1"
                >
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
                <label
                  htmlFor="financing"
                  className="block text-sm font-semibold mb-1"
                >
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
                <label
                  htmlFor="note"
                  className="block text-sm font-semibold mb-1"
                >
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
                  By checking this box, I consent to receive phone calls, texts,
                  and emails.
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white p-2 rounded-lg hover:bg-orange-600 transition"
              >
                Claim My Free Consultation
              </button>

              <div className="text-center">
                {message && (
                  <p className="mt-4 text-sm text-orange-500">{message}</p>
                )}
              </div>
            </form>
          </motion.div>
        </>,
        document.body
      )}
    </div>
  );
}

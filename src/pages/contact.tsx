import React, { useState } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/Footer";

export default function Contact() {
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    financing: "",
    treatment: "",
    note: "",
    consent: false,
  });

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

  return (
    <>
      <Navbar />
      <div>
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg-lg shadow-md w-full max-w-lg"
          >
            <h2 className="text-xl font-bold mb-4 text-center">
              📅 BOOK A FREE CONSULTATION
            </h2>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First"
                value={formData.firstName}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              />
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

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-4"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-4"
              required
            />

            <select
              name="financing"
              value={formData.financing}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-4"
              required
            >
              <option value="">Please choose an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>

            <select
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-4"
              required
            >
              <option value="">Please choose an option</option>
              <option value="treatment1">Treatment 1</option>
              <option value="treatment2">Treatment 2</option>
            </select>

            <textarea
              name="note"
              placeholder="Note for doctor"
              value={formData.note}
              onChange={handleChange}
              className="border p-2 rounded-lg w-full mb-4"
            ></textarea>

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
        </div>
        <Footer />
      </div>
    </>
  );
}

import React, { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
import validateForm from "../../functions/validatePopUpForm";
import { useNavigate } from "react-router-dom";

export default function PopFor({ closePopForm }: Record<string, any>) {
  const navigate = useNavigate();
  const [message, setMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    financing: "",
    credit_score: "",
    co_signer: "",
    home_owner: "",
    note: "",
    annual_income:'',
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

    if (!validateForm(formData)) {
      setMessage("Please fill in all fields.");
      return;
    }
    console.log(formData);

    setFormData((preState: any) => {
      return { ...preState, phone: "+" + preState.phone };
    });

    if (validateForm(formData)) {
      navigate("/thank-you");
      return;
    }
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
        <button
          onClick={() => {
            closePopForm();
          }}
          className="absolute top-0 right-0 p-2 sm:p-5"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">
          📅 BOOK A FREE CONSULTATION
        </h2>
        <form onSubmit={handleSubmit} className="overflow-y-auto h-96 sm:h-fit">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-semibold mb-1">
                First Name <span className="text-red-700">*</span>
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="First"
                value={formData.first_name}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Last Name<span className="text-red-700">&nbsp;*</span>
              </label>
              <input
                type="text"
                name="last_name"
                placeholder="Last"
                value={formData.last_name}
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
            <PhoneInput
              country={"us"} // Default country
              value={formData.phone}
              onChange={(phone: string) => {
                {
                  setFormData({ ...formData, phone: phone });
                }
              }}
              inputClass="border p-2 rounded-lg w-full"
              containerClass="w-full"
              inputStyle={{ width: "100%" }} // Ensures it takes full width
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
          {/* Credit Score Field */}
          {formData.financing === "yes" && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <label className="block text-sm font-semibold mb-1">
                Credit Score <span className="text-red-700">*</span>
              </label>
              <select
                name="credit_score"
                value={formData.credit_score}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              >
                <option value="">Please choose an option</option>
                <option value="0-549">Below 549</option>
                <option value="550-559">550-559</option>
                <option value="600-649">600-649</option>
                <option value="650-699">650-699</option>
                <option value="above-700">Above 700</option>
              </select>
            </motion.div>
          )}

          {/* Co-Signer Question */}
          {formData.financing === "yes" && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <label className="block text-sm font-semibold mb-1">
                Do you have a co-signer with a credit score 650+?
                <span className="text-red-700">&nbsp;*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="co_signer"
                    value={"yes"}
                    checked={formData.co_signer === "yes"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="co_signer"
                    value={"no"}
                    checked={formData.co_signer === "no"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  No
                </label>
              </div>
            </motion.div>
          )}

          {formData.financing === "yes" && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <label className="block text-sm font-semibold mb-1">
                What's your annnual salary
                <span className="text-red-700">&nbsp;*</span>
              </label>
              <input
                type="number"
                name="annual_income"
                placeholder="Annual income"
                value={formData.annual_income}
                onChange={handleChange}
                className="border p-2 rounded-lg w-full"
                required
              />
            </motion.div>
          )}

          {/* home owner*/}
          {formData.financing === "yes" && (
            <motion.div
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              className="mb-4"
            >
              <label className="block text-sm font-semibold mb-1">
                Are you home owner ?
                <span className="text-red-700">&nbsp;*</span>
              </label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="home_owner"
                    value={"yes"}
                    checked={formData.home_owner === "yes"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="home_owner"
                    value={"no"}
                    checked={formData.home_owner === "no"}
                    onChange={handleChange}
                    className="mr-2"
                    required
                  />
                  No
                </label>
              </div>
            </motion.div>
          )}

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

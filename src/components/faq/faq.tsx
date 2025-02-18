import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const faqItems = [
    {
      question: "What are Dental Implants?",
      answer:
        "Dental implants are artificial tooth roots made from titanium that are surgically placed into the jawbone. They serve as a sturdy foundation for replacement teeth, such as crowns, bridges, or dentures. Unlike other tooth replacement options, dental implants integrate with the bone, making them a long-term, stable solution for missing teeth.",
    },
    {
      question: "The Dental Implant Process at Fremont Implant Clinic",
      answer:
        "The process involves a thorough consultation, implant placement surgery, healing time, and the fitting of replacement teeth.",
    },
    {
      question: "The Benefits of Dental Implants at Fremont Implant Clinic",
      answer:
        "Dental implants offer a natural-looking solution, improve speech, restore function, and last a long time with proper care.",
    },
    {
      question: "Why Choose Dental Implants Over Other Options?",
      answer:
        "Dental implants are more durable, provide better function, and are more natural-looking than alternatives like dentures.",
    },
    {
      question: "Are You a Candidate for Dental Implants?",
      answer:
        "Candidates should have healthy gums and enough bone to support the implant. Our team will evaluate your suitability during a consultation.",
    },
    {
      question: "Types of Dental Implants at Fremont Implant Clinic",
      answer:
        "We offer various implant types such as endosteal and subperiosteal implants to cater to different patient needs.",
    },
    {
      question: "Caring for Your Dental Implants",
      answer:
        "Regular brushing, flossing, and routine dental checkups are essential to maintaining your dental implants.",
    },
    {
      question: "Call us Now",
      answer:
        "Contact us at (123) 456-7890 for more information or to book an appointment.",
    },
  ];

  const [selectedFAQ, setSelectedFAQ] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelectedFAQ((prev) => (prev === index ? null : index));
  };

  return (
    <div className="lg:flex justify-center bg-[#F9FAFF]">
      <div className="lg:w-[1300px] py-10">
        <div className="container p-8">
          <div className="flex py-8 items-center gap-2">
            <img
              className="w-8 h-auto"
              src="https://redwoodcityimplantclinic.com/wp-content/plugins/constant-images-plugin/images/Main-Heading-Icon.png"
              alt=""
            />
            <h2 className="font-bold text-lg">
              Dental Implants in Fremont, CA
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            {faqItems.map((item, index) => (
              <div key={index} className="w-full border-b pb-2">
                <div
                  className="flex gap-2 items-center cursor-pointer py-2"
                  onClick={() => handleToggle(index)}
                >
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={`transition-transform duration-300 ${
                      selectedFAQ === index ? "rotate-90" : ""
                    }`}
                  />
                  <p className="font-bold text-sm sm:text-xl">
                    {item.question}
                  </p>
                </div>
                <AnimatePresence>
                  {selectedFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 text-gray-700"
                    >
                      <p className="font-medium">{item.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

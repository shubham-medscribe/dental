import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ({ openPopForm }: Record<string, any>) {
  const faqItems = [
    {
      type: 1,
      question: "What are Dental Implants ?",
      answer:
        "Dental implants are artificial tooth roots made from titanium that are surgically placed into the jawbone. They serve as a sturdy foundation for replacement teeth, such as crowns, bridges, or dentures. Unlike other tooth replacement options, dental implants integrate with the bone, making them a long-term, stable solution for missing teeth.",
    },
    {
      type: 2,
      question: "Why Choose center for implant dentistry ?",
      headline:
        "Dental implants offer numerous benefits that make them a superior choice over traditional tooth replacement options:",
      answer: [
        "Long-Lasting Durability: Dental implants are designed to last a lifetime with proper care, providing a permanent solution to tooth loss.",
        "Stable and Secure Fit: Unlike dentures, implants are securely anchored in your jawbone, offering unparalleled stability.",
        "Natural Appearance: Custom-made to match your existing teeth, dental implants provide a seamless and natural look.",
        "Improved Oral Health: Implants help maintain jawbone density, preventing bone loss and preserving facial structure.",
        "Enhanced Comfort: With dental implants, there’s no risk of slipping or discomfort, allowing you to eat, speak, and smile with confidence.",
        "Easy Maintenance: Care for your dental implants just like your natural teeth, with regular brushing and flossing.",
      ],
    },
    {
      type: 3,
      question: "The Dental Implant Procedure - What to Expect",
      headline:
        "Understanding the process can help you feel more comfortable and prepared for your new smile:",
      answer: [
        "Initial Consultation: Our dental experts will assess your oral health and discuss your goals to determine if dental implants are the right solution for you.",
        "Customized Treatment Plan: Using advanced imaging technology, we create a detailed treatment plan tailored to your specific needs.",
        "Implant Placement: The procedure involves placing titanium implants into your jawbone, which will serve as the foundation for your new teeth.",
        "Healing Period: You will receive temporary restorations to wear during the healing process, ensuring functionality and aesthetics.",
        "Permanent Restoration: After the implants have fully integrated with your jawbone, we replace the temporary restorations with your custom-made permanent teeth.",
      ],
    },
    {
      type: 2,
      question: "Why Choose center for implant dentistry for Dental Implants?",
      headline:
        "At center for implant dentistry Clinic, we are dedicated to providing exceptional dental care with a focus on patient satisfaction. Here’s why our clinic is the best choice for your dental implants:",
      answer: [
        "Experienced Professionals: Our team of skilled dental specialists has extensive experience in implant dentistry.",
        "State-of-the-Art Technology: We utilize the latest dental technologies and techniques to ensure precise and effective treatment.",
        "Personalized Care: From your initial consultation to post-procedure follow-ups, we provide personalized care every step of the way."
      ],
    },
    {
      type: 2,
      question: "Understanding the Cost of Dental Implants",
      headline:
        "Dental implants are more than just a cosmetic solution; they are an investment in your overall well-being. Here’s why:",
      answer: [
        "Boosted Confidence: A complete, beautiful smile can significantly enhance your self-esteem and social interactions.",
        "Better Nutrition: Dental implants allow you to enjoy a varied diet, improving your nutritional intake and overall health.",
        "Cost-Effective Solution: Though the upfront cost is higher, the durability and minimal maintenance of dental implants make them a cost-effective option over time.",
      ],
    },
    {
      type: 1,
      question: "What are Dental Implants?",
      answer: (
        <p>
          Ready to transform your smile with the best dental implants?{" "}
          <button onClick={() => openPopForm()} className="text-blue-700">
            Contact us
          </button>
          &nbsp;at&nbsp;
          <span className="">center for implant dentistry</span> to schedule your consultation and learn more about
          how we can help you achieve a beautiful, functional smile.
        </p>
      ),
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
            {faqItems.map((i: any, index: number) => (
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
                  <p className="font-bold text-sm sm:text-xl">{i.question}</p>
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
                      {i.type === 1 && (
                        <p className="pl-6 text-base">{i.answer}</p>
                      )}
                      {i.type === 2 && (
                        <div>
                          <p className="pl-11">{i.headline}</p>
                          <ul className="space-y-1 list-disc ml-5 pl-6">
                            {Array.isArray(i.answer) &&
                              i.answer.map((answer: any, index: number) => {
                                return (
                                  <li>
                                    <span className="font-bold">
                                      {answer.split(":")[0]}
                                    </span>
                                    : {answer.split(":")[1]}
                                  </li>
                                );
                              })}
                          </ul>
                        </div>
                      )}

                      {i.type === 3 && (
                        <div>
                          <p className="pl-11">{i.headline}</p>
                          <ol className="space-y-1 list-decimal  ml-5 pl-6">
                            {Array.isArray(i.answer) &&
                              i.answer.map((answer: any, index: number) => {
                                return (
                                  <li>
                                    <span className="font-bold">
                                      {answer.split(":")[0]}
                                    </span>
                                    : {answer.split(":")[1]}
                                  </li>
                                );
                              })}
                          </ol>
                        </div>
                      )}
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

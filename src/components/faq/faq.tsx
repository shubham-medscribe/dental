import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
export default function FAQ() {
  const faqItems = [
    "What are Dental Implants?",
    "The Dental Implant Process at Fremont Implant Clinic",
    "The Benefits of Dental Implants at Fremont Implant Clinic",
    "Why Choose Dental Implants Over Other Options?",
    "Are You a Candidate for Dental Implants?",
    "Types of Dental Implants at Fremont Implant Clinic",
    "Caring for Your Dental Implants",
    "Call us Now"
  ];

  return (
    <div className="lg:flex justify-center bg-[#F9FAFF]">
    <div className="lg:w-[1300px] py-10">
      <div className="container p-8">
        <div className="flex py-8">
          <figure>
            <img
              className="w-8 h-auto"
              src="https://redwoodcityimplantclinic.com/wp-content/plugins/constant-images-plugin/images/Main-Heading-Icon.png"
              alt=""
            />
          </figure>
          <h2 className=" font-bold text-base  sm:text-lg">
          Dental Implants in Fremont, CA
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqItems.map((item, index) => {
            return (
              <div className="w-full">
                <div className=" flex gap-3 ">
                  <div>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                  <p className="font-bold text-sm sm:text-xl" key={index}>
                    {item}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </div>
  );
}

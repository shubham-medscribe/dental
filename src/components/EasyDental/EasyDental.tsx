import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useNavigateToContact from "../../hook/navToContact";

export default function EasyDental({ openPopForm }:Record<string,any>) {
  const navigateToContact = useNavigateToContact();
  return (
    <div className="flex justify-center py-16">
      <div className="w-full p-5 flex flex-col lg:flex-row max-w-screen-xl">
        <div className="w-full flex flex-col  p-5 justify-center  gap-3">
          <div className="w-full text-center lg:text-left text-2xl">💰</div>
          <div className="italic font-bold text-2xl lg:text-3xl text-center lg:text-left">
            Easy Dental Financing Made Simple
          </div>
          <p className="text-center text-lg lg:text-left">
            Get the Smile You Deserve with Flexible Payment Plans and Quick
            Approvals
          </p>
          <div className="hidden lg:block">
            <button
            onClick={() => openPopForm()}
              type="button"
              className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Free Consultation
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className=" flex flex-col lg:flex-row gap-5">
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>$0 Down Payment</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>48, 60, 90 month term</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row gap-5">
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>High Approval</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>600+ Fico Score Required</p>
              </div>
            </div>
          </div>

          <div className=" flex flex-col lg:flex-row gap-5">
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>Inquiry Won't Affect Score</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  className="text-[#34A853]"
                  icon={faCheckCircle}
                />
              </div>
              <div className="text-base font-medium">
                <p>Decision Within Seconds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden py-10">
          <button
            onClick={()=>{navigateToContact()}}
            type="button"
            className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultantion
          </button>
        </div>
      </div>
    </div>
  );
}

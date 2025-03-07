import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import useNavigateToContact from "../../hook/navToContact";
import theme from "../../constant/Constant";

export default function EasyDental({ openPopForm }: Record<string, any>) {
  const navigateToContact = useNavigateToContact();
  return (
    <div className="flex justify-center  lg:pt-16">
      <div className="w-full p-5 flex flex-col lg:flex-row max-w-screen-xl">
        <div className="w-full flex flex-col  p-5 justify-center  gap-3">
        
          <div className="flex gap-3 justify-center items-center lg:justify-start font-bold text-2xl lg:text-3xl text-center lg:text-left">
          <div className="w-fit text-center lg:text-left text-2xl">💰</div>
            Easy Dental Financing Made Simple
          </div>
          <p className="text-center text-lg lg:text-left">
            Get the Smile You Deserve with Flexible Payment Plans and Quick
            Approvals
          </p>
          <div className="hidden lg:block">
            <button
              style={{ backgroundColor: theme }}
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
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
                />
              </div>
              <div className="text-base font-medium">
                <p>$0 Down Payment</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
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
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
                />
              </div>
              <div className="text-base font-medium">
                <p>High Approval</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
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
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
                />
              </div>
              <div className="text-base font-medium">
                <p>Inquiry Won't Affect Score</p>
              </div>
            </div>
            <div className="w-full rounded-md bg-[#F9FAFF] flex gap-3 items-center border border-gray-100">
              <div className="p-3">
                <FontAwesomeIcon
                  style={{ color: theme }}
                  className="text-[#34A853] text-3xl"
                  icon={faCheck}
                />
              </div>
              <div className="text-base font-medium">
                <p>Decision Within Seconds</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:hidden pt-5 lg:pt-0 lg:py-10 flex justify-center">
          <button
            style={{ backgroundColor: theme }}
            onClick={() => openPopForm(true)}
            type="button"
            className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import theme from "../../constant/Constant";

export default function WhyDenatlImplant() {
  const arr = [
    "Permanent solution",
    "Improved chewing and speaking",
    "Natural function and look",
    "Improved facial appearance",
    "Prevention of bone loss",
    "No special care required",
  ];

  const arr2 = [
    "Very sturdy and secure",
    "No diet restrictions",
    "Can be changed or updated",
  ];
  return (
    <div className="w-full flex justify-center pb-10">
    <div className="w-full flex flex-col   justify-center max-w-screen-xl ">
      <div className="flex justify-center gap-3 uppercase  font-bold py-2 text-xl lg:text-3xl text-center">
        <h1>🤔</h1>
        <div className="uppercase  font-extrabold text-xl lg:text-3xl text-center">
        <h1>Why dental Implants ?</h1>
      </div>
      </div>
     
      <div className="flex flex-col lg:flex-row w-full justify-center ">
        <div className="h-auto flex  items-center justify-center">
          <div className="w-fit  p-5 flex flex-col sm:flex-row justify-center gap-3 sm:gap-5 lg:gap-16">
            <div className="w-fit flex justify-center">
              <div className="space-y-3">
                {arr.map((item, index) => (
                  <div key={index} className=" flex gap-3">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                      style={{color:theme}}
                        className="text-[#153371] text-3xl"
                        icon={faCheck}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-xl lg:text-xl">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-fit flex justify-center">
              <div className="space-y-3">
                {arr2.map((item, index) => (
                  <div key={index} className=" flex gap-3">
                    <div className="flex items-center">
                      <FontAwesomeIcon
                       style={{color:theme}}
                        className="text-[#153371] text-3xl"
                        icon={faCheck}
                      />
                    </div>
                    <div>
                      <p className="font-medium text-xl lg:text-xl">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function DentalpriceDown() {
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
    <div className="w-full flex flex-col justify-center items-center bg-[#F9FAFF] py-10">
      <div className="w-full p-5 flex flex-col lg:flex-row max-w-screen-xl">
        <div className="flex flex-col items-center justify-center w-full">
          <h1 className="uppercase text-3xl font-extrabold my-4 text-center lg:text-left italic">
            Denatl implant price break down
          </h1>
          <div className="w-full flex justify-center lg:justify-start">
            <button
              type="button"
              className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            >
              Free consulation
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:gap-8  w-full p-5 shadow-lg rounded-lg lg:shadow-none">
          <div className="flex flex-col lg:gap-10  lg:flex-row items-center justify-center">
            <div className="w-full rounded-lg  p-5 lg:w-[301px] lg:h-[240px]  lg:shadow-lg lg:flex items-center flex-col justify-center">
              <h2 className="text-[#FEAC33] font-bold text-xl  text-center lg:text-left w-full">
                Free
              </h2>
              <h2 className=" font-bold text-3xl  text-center lg:text-left w-full">
                Consultation
              </h2>
              <p className="text-center font-medium py-1 lg:text-left">
                Includes Treatment Plan, Limited Time Offer
              </p>
            </div>

            <div className="w-full rounded-lg  p-5 lg:w-[301px] lg:h-[240px] lg:shadow-lg flex items-center flex-col justify-center">
              <h2 className=" font-bold text-3xl  text-center lg:text-left w-full">
                Consultation
              </h2>
              <p className="text-center font-medium py-1 lg:text-left">
                Includes Treatment Plan, Limited Time Offer
              </p>
            </div>
          </div>

          <div className="rounded-lg flex flex-col lg:gap-10  lg:flex-row items-center justify-center">
            <div className="rounded-lg w-full p-5 lg:w-[301px] lg:h-[240px]  lg:shadow-lg lg:flex items-center flex-col justify-center">
              <h2 className="text-[#FEAC33] font-bold text-xl  text-center lg:text-left w-full">
                Free
              </h2>
              <h2 className=" font-bold text-3xl  text-center lg:text-left w-full">
                Consultation
              </h2>
              <p className="text-center font-medium py-1 lg:text-left">
                Includes Treatment Plan, Limited Time Offer
              </p>
            </div>

            <div className="w-full rounded-lg p-5 lg:w-[301px] lg:h-[240px] lg:shadow-lg flex items-center flex-col justify-center">
              <h2 className=" font-bold text-3xl  text-center lg:text-left w-full">
                Consultation
              </h2>
              <p className="text-center font-medium py-1 lg:text-left">
                Includes Treatment Plan, Limited Time Offer
              </p>
            </div>
          </div>

          <div className="w-full p-5 lg:shadow-lg rounded-lg space-y-1">
            <h2 className="text-[#FEAC33] font-bold text-xl  text-center lg:text-left">
              $2,495
            </h2>
            <h2 className=" font-bold text-3xl  text-center lg:text-left">Total</h2>
            <p className="text-center lg:text-left font-medium py-1">
              Our clinic uses the latest advances in dental implant procedures
              in order ensure superior lifelong results
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col  justify-center max-w-screen-xl pt-10">
        <div className="uppercase  font-bold text-3xl text-center">
          <h1>🤔</h1>
        </div>
        <div className="uppercase italic font-bold text-3xl text-center">
          <h1>Why dental Implants ?</h1>
        </div>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-10 mt-8">
          <div className="w-full lg:w-96 justify-center items-center bg-white p-5 rounded-lg">
            <div className="w-full flex flex-col items-center bg-white p-5">
              <div className="w-fit">
                <figure className="w-fit ">
                  <img
                    className="w-full h-auto"
                    src="https://fremontimplantclinic.com/wp-content/uploads/2024/07/Mask-group-2-1.png"
                    alt=""
                  />
                </figure>
              </div>
              <div className="flex gap-3 py-3">
                <div className="h-auto">
                  <figure>
                    <img
                      className="h-auto"
                      src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/07/icon-park-solid_gold-medal-2.svg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="flex flex-col">
                  <p className="font-semibold">Fremont & CA's Top Permanent Teeth Specialist</p>
                  <div className="flex flex-col gap-2  mt-3">
                    <span className="font-bold text-xl">Dr. Sambhav Jain</span>
                    <span className="text-xl">DENTIST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="h-auto flex  items-center justify-center">
        <div className="w-fit  p-5 flex flex-col lg:flex-row justify-center gap-0 lg:gap-10">
            <div className="w-fit flex justify-center">
              <div>
                {arr.map((item, index) => (
                  <div key={index} className=" flex gap-3">
                    <div>
                      <FontAwesomeIcon
                        className="text-[#C11C3B]"
                        icon={faCheckCircle}
                      />
                    </div>
                    <div>
                      <p className="font-medium sm:text-xl lg:text-xl">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-fit flex justify-center">
              <div>
                {arr2.map((item, index) => (
                  <div key={index} className=" flex gap-3">
                    <div>
                      <FontAwesomeIcon
                        className="text-[#C11C3B]"
                        icon={faCheckCircle}
                      />
                    </div>
                    <div>
                    <p className="font-medium sm:text-xl lg:text-xl">{item}</p>
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

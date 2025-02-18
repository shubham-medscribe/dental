import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function SaveOffer() {
  const [hours, setHours] = useState<number>(40);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    if (hours === 0 && minutes === 0 && seconds === 0) return;

    const timer = setInterval(() => {
      setSeconds((prevSec) => {
        if (prevSec > 0) return prevSec - 1;
        if (minutes > 0) {
          setMinutes((prevMin) => prevMin - 1);
          return 59;
        }
        if (hours > 0) {
          setHours((prevHrs) => prevHrs - 1);
          setMinutes(59);
          return 59;
        }
        return 0;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [hours, minutes, seconds]);

  const formatTime = (num: number) => num.toString().padStart(2, "0");
  return (
    <div className="w-full flex justify-center bg-[#C11C3B] lg:py-16 ">
      <div className="flex flex-col lg:flex-row max-w-screen-xl items-center justify-center w-full ">
        <div className="w-full flex flex-col items-center lg:items-start justify-center p-5 gap-3 ">
          <div className="w-full flex max-w-sm text-center lg:text-left bg-black bg-opacity-70 text-white space-x-3 py-1 px-5  rounded-lg font-semibold">
            <figure>
              <img
                className="h-auto"
                src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/08/bxs_offer-1.svg"
                alt=""
              />
            </figure>
            <span className="uppercase text-lg">Save the Offer!</span>
            <span className="text-base lg:text-lg italic">{`${formatTime(
              hours
            )}:${formatTime(minutes)}:${formatTime(seconds)}`}</span>
          </div>

          <div className="w-full  text-center lg:text-left space-y-2 text-white">
            <h1 className="text-xl lg:text-3xl font-bold">
              Smile Confidently with Dental Implants
            </h1>
            <h2 className="lg:text-lg">
              Stable, natural-looking dental implants for a confident smile
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-col items-center px-5 gap-2 justify-center py-16">
          <Card />
          <div className=" px-4 py-1 w-fit bg-[#224D5C] rounded-3xl flex items-center justify-center gap-3">
            <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
            <h2 className="text-white text-base font-bold">99% Approved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="w-full bg-white rounded-3xl  px-9 py-10 pt-10 sm:pt-24 max-w-[419px] relative">
      <div className="w-[150px] sm:w-[250px] lg:w-[320px] max-w-[400px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className="object-center object-cover"
          src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/07/dentalimplantimage-1.png"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-center">
          <h2 className="font-bold lg:text-3xl">Dental Implants</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#C11C3B] font-bold lg:text-3xl">$2,495</span>
          <span>(all-in)</span>
        </div>

        <div className="w-full flex gap-2 items-center justify-center">
          <div className="h-[1px] bg-black w-10"></div>
          <span className="text-[#C11C3B] font-bold text-center text-base w-fit lg:text-xl ">
            Affordable Financing
          </span>
          <div className="h-[1px] bg-black w-10"></div>
        </div>

        <div className="w-full flex gap-3 items-center py-1 justify-center">
          <div className="text-[#C11C3B] font-bold text-sm">
            1 Implant + Crown 73$/month
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            type="button"
            className="w-[15em] focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultant
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-3 justify-center lg:text-base items-center py-1">
          <div className="flex gap-3 ">
            <div className="text-[#C11C3B]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <p>Zero Down Payment</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-[#C11C3B]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <p>48 Months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

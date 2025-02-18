import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useNavigateToContact from "../../hook/navToContact";
import MainCard from "../MainCard/MainCard";

export default function SaveOffer({ openPopForm }: Record<string, any>) {
  const [hours, setHours] = useState<number>(40);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const navigateToContact = useNavigateToContact();
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
    <div className="w-full flex justify-center bg-[#153371] lg:py-16 ">
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
            <h1 className="text-xl lg:text-4xl font-bold">
              Smile Confidently with Dental Implants
            </h1>
            <h2 className="lg:text-2xl">
              Stable, natural-looking dental implants for a confident smile
            </h2>
          </div>
        </div>
        <div className="w-full flex flex-col items-center px-5 gap-2 justify-center py-16">
          <MainCard openPopForm={openPopForm} />
          <div className=" px-4 py-1 w-fit bg-[#224D5C] rounded-3xl flex items-center justify-center gap-3">
            <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
            <h2 className="text-white text-base font-bold">99% Approved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

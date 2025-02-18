import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useNavigateToContact from "../../hook/navToContact";
import MainCard from "../MainCard/MainCard";

export default function SaveOffer({ openPopForm }: Record<string, any>) {
  const [hours, setHours] = useState<number>(48);
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
    <div className="w-full h-fit flex justify-center bg-[#153371] py-3 lg:py-16 ">
      <div className="flex flex-col md:flex-row max-w-screen-xl items-center justify-center w-full ">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-5 py-5 gap-5 md:gap-6">
          <div className="bg-gradient-to-r from-[#D31717] to-[#FE4141] rounded-xl w-fit flex max-w-sm text-center items-center lg:text-left bg-opacity-70 text-white space-x-3 py-2 md:py-1 px-2 sm:px-3 lg:px-5   font-bold lg:font-normal">
            <figure>
              <img
                className="h-auto"
                src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/08/bxs_offer-1.svg"
                alt=""
              />
            </figure>
            <span className="uppercase text-[13px] sm:text-xl italic md:not-italic">Save the Offer !</span>
            <span className="text-lg text-[13px] sm:text-lg font-semibold md:font-normal md:text-xl">{`${formatTime(
              hours
            )}:${formatTime(minutes)}:${formatTime(seconds)}`}</span>
          </div>

          <div className="w-full   text-center md:text-left sm:space-y-3 md:space-y-5 text-white px-3 md:px-0">
            <h1 className="text-lg sm:text-2xl md:text-4xl  font-bold">
              Smile Confidently with Dental Implants
            </h1>
            <h2 className="text-base md:text-[28px] md:leading-8">
              Stable, natural-looking dental implants for a confident smile
            </h2>
          </div>
        </div>
        <div className="flex-1 w-full flex flex-col items-center px-5 gap-5 justify-center py-16 md:py-24">
         <div className="flex justify-center w-full"> <MainCard openPopForm={openPopForm} /></div>
          <div className=" px-4 py-1 w-fit bg-[#224D5C] rounded-3xl flex items-center justify-center gap-3">
            <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
            <h2 className="text-white text-base font-bold">99% Approved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
 
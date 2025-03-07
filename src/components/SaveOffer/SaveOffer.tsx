import { faCheckCircle, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import useNavigateToContact from "../../hook/navToContact";
import MainCard from "../MainCard/MainCard";
import theme from "../../constant/Constant";
import { motion } from "framer-motion";

export default function SaveOffer({ openPopForm }: Record<string, any>) {
  const [hours, setHours] = useState<number>(48);
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
    <div
      style={{ backgroundColor: theme }}
      className="w-full h-fit flex justify-center bg-[#153371] py-3"
    >
      <div className="flex flex-col md:flex-row max-w-screen-xl items-center justify-center w-full sm:gap-6">
        <div className="flex-1 flex flex-col items-center md:items-start justify-center px-5 py-5 gap-4 md:gap-6">
          {/*  call us section */}
          <motion.a
            href="tel:+15102249455"
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80 }}
            className="md:hidden cursor-pointer  w-full  text-white py-3 px-6 flex items-center gap-3 justify-center z-50"
          >
            {/* Infinite Left-Right Motion */}
            <motion.div
              animate={{ x: [-10, 0, -20] }}
              transition={{
                type: "spring",
                stiffness: 200, // Higher value = quicker return
                damping: 10, // Controls bounce effect
                duration: 1.5,
                repeat: Infinity,
                repeatType: "mirror",
              }}
              className="flex items-center"
            >
              <FontAwesomeIcon
                style={{ color: "#fff" }}
                icon={faPhone}
                className="text-orange-500 text-lg sm:text-xl"
              />
            </motion.div>

            <p className="font-semibold">Call us: +1 (151) 022-4945</p>
          </motion.a>
          <div className="bg-gradient-to-r from-[#D31717] to-[#FE4141] rounded-xl w-fit flex max-w-sm text-center items-center lg:text-left bg-opacity-70 text-white space-x-3 py-2 md:py-1 px-2 sm:px-3 lg:px-5   font-bold lg:font-normal">
            <figure>
              <img
                className="h-auto"
                src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/08/bxs_offer-1.svg"
                alt=""
              />
            </figure>
            <span className="uppercase text-[13px] sm:text-xl  ">
              Save the Offer !
            </span>
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
        <div className="flex-1 w-full flex flex-col items-center px-5 gap-5 justify-center md:py-16">
          <div className="flex justify-center w-full">
            {" "}
            <MainCard openPopForm={openPopForm} />
          </div>
          <div className=" px-6  py-2 w-fit bg-[#224D5C] rounded-3xl flex items-center justify-center gap-3">
            <FontAwesomeIcon className="text-green-500" icon={faCheckCircle} />
            <h2 className="text-white text-xl font-bold">99% Approved</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

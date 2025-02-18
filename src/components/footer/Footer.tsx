import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX, faGrinStars } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
  return (
    <div className="w-full bg-[#2B2B2B] text-white  py-6 px-6 lg:py-24 space-y-4 flex justify-center pt-40 lg:pt-40">
      <div className="w-full  flex flex-col lg:flex-row gap-10 lg:gap-28 sm:items-center justify-center">
        <div className="max-w-lg w-full">
          <div className="w-full">
            <div className="w-full  text-xl">Opening Hours</div>
            <div className="flex justify-between gap-5 mt-6 font-semibold">
              <div className="space-y-5">
                <div className="text-[#A9262D]">Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
                <div>Monday</div>
              </div>
              <div className="space-y-5 text-base">
                <div className="text-[#A9262D]">9:00 am - 5:00 pm</div>
                <div>9:00 am - 5:00 pm</div>
                <div>9:00 am - 5:00 pm</div>
                <div>9:00 am - 5:00 pm</div>
                <div>9:00 am - 5:00 pm</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <p className="font-semibold text-xl">Follow Us</p>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-[#0866FF] mt-5">
              <FontAwesomeIcon icon={faGrinStars} />
            </div>
            <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-[#F00075] mt-5">
              <FontAwesomeIcon icon={faGrinStars} />
            </div>
            <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-[#FF0000] mt-5">
              <FontAwesomeIcon icon={faGrinStars} />
            </div>
            <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-[#EA4434] mt-5">
              <FontAwesomeIcon icon={faGrinStars} />
            </div>
            <div className="w-10 h-10 flex justify-center items-center  rounded-full bg-[#D32422] mt-5">
              <FontAwesomeIcon icon={faGrinStars} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

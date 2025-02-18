import {
  faCalendar,
  faLocation,
  faLocationPin,
  faLocationPinLock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function LocationAndOfficeHour() {
  return (
    <div className="w-full lg:flex justify-center py-5 hidden px-5">
      <div className="lg:w-[1280px] flex gap-16">
        <div className="w-fit">
          <div className="flex gap-3 items-center">
            <div className="h-auto">
              <FontAwesomeIcon
                className="text-2xl text-[#3985C6]"
                icon={faLocationPin}
              />
            </div>
            <div className="flex flex-col ">
              <p>3381 Walnut Ave, Fremont</p>
              <p> CA 94538, United States</p>
            </div>
          </div>
        </div>

        <div className="w-fit">
          <div className="flex gap-3 items-center">
            <div className="h-auto">
              <FontAwesomeIcon
                className="text-2xl text-[#3985C6]"
                icon={faCalendar}
              />
            </div>
            <div className="flex flex-col">
              <p>Office Hours</p>
              <p>See footer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

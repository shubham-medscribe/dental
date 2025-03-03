import {
  faCalendar,
  faLocation,
  faLocationPin,
  faLocationPinLock,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import theme from "../../constant/Constant";

export default function LocationAndOfficeHour() {

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };
  return (
    <div className="w-full md:flex justify-center py-5 hidden  px-5 xl:px-0">
      <div className="w-full lg:w-[1280px] flex justify-between">
        <div className="flex gap-16">
          <div className="w-fit">
            <div className="flex gap-3 items-center">
              <div className="h-auto">
                <FontAwesomeIcon
                  style={{ color: theme }}
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

          <div onClick={scrollToBottom} className="w-fit cursor-pointer">
            <div className="flex gap-3 items-center">
              <div className="h-auto">
                <FontAwesomeIcon
                  style={{ color: theme }}
                  className="text-2xl text-[#3985C6]"
                  icon={faCalendar}
                />
              </div>
              <div className="flex flex-col">
                <p>Office Hours</p>
                <p className="text-blue-700">See footer</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit h-full flex  items-center md:pr-3 xl:pr-6">
          <a href="tel:+15102249455" className="flex gap-3">
            <div className="h-auto">
              <FontAwesomeIcon
                style={{ color: theme }}
                className="text-2xl text-[#3985C6]"
                icon={faPhone}
              />
            </div>
            <div className="flex items-center font-semibold text-2xl">
              <p>Call Us: +1 (151) 022-4945</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

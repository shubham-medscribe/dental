import {
  faBars,
  faHamburger,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../constant/Constant";
import Logo from "../../assests/New-logo2.jpg";
export default function Navbar({ openPopForm }: Record<string, any>) {
  return (
    <div className="w-full flex justify-center items-center py-5 shadow-lg px-5 lg:px-0">
      <div className="w-full flex items-center justify-between lg:w-[1280px]">
        <div>
          <figure>
            <img
              className="w-[60vw] sm:w-80 md:w-80 lg:w-96 h-auto object-cover object-center"
              src={Logo}
              alt="logo"
              loading="lazy"
              style={{ imageRendering: "auto" }} // Ensures smooth rendering
            />
          </figure>
        </div>
        <div>
          <button
            style={{ backgroundColor: theme }}
            onClick={() => {
              openPopForm();
            }}
            type="button"
            className="hidden md:block focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium lg:text-xl lg:px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-base px-2"
          >
            Free Consultation
          </button>
          <a href="tel:+1510-574-0496">
            <button
              style={{ backgroundColor: theme }}
              className="md:hidden rounded-full p-3 space-x-2 text-white"
            >
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <span>Call us</span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

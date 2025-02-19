import { faBars, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import theme from "../constant/Constant";

export default function Navbar({openPopForm }:Record<string,any>) {
  const navigate = useNavigate();

  return (
    <div className="w-full flex justify-center items-center py-5 shadow-lg px-5 lg:px-0">
      <div className="w-full flex items-center justify-between lg:w-[1280px]">
        <div>
          <figure>
            <img
              className="w-60 h-auto object-cover object-center"
              src="https://bayareaimplantdentistry.com/wp-content/uploads/2019/09/logo.png"
            />
          </figure>
        </div>
        <div>
          <button
            onClick={() => {
              openPopForm();

            }}
            type="button"
            className="hidden md:block focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium lg:text-xl lg:px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-base px-2"
          >
            Free Consultation
          </button>
          <button style={{backgroundColor:theme}} className="md:hidden rounded-full w-12 h-12 text-white">
            <FontAwesomeIcon icon={faBars}/>
          </button>
        </div>
      </div>
    </div>
  );
}

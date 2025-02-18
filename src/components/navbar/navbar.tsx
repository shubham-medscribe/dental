import React from "react";

export default function navbar() {
  return (
    <div className="w-full flex justify-center items-center py-5 shadow-lg ">
      <div className="w-full flex items-center justify-between lg:w-[1280px]">
        <div>
          <figure>
            <img className="w-60 h-auto object-cover object-center" src="https://fremontimplantclinic.com/wp-content/uploads/2024/08/fremontimplantclinic.com_-2.svg" />
          </figure>
        </div>
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium lg:text-xl lg:px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 text-base px-2"
          >
            Free Consultant
          </button>
        </div>
      </div>
    </div>
  );
}

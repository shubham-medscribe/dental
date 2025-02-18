import React from "react";

export default function navbar() {
  return (
    <div className="w-full flex justify-center items-center py-5 shadow-lg ">
      <div className="w-full flex justify-end lg:w-[1280px]">
        <div>
          <button
            type="button"
            className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium  text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultant
          </button>
        </div>
      </div>
    </div>
  );
}

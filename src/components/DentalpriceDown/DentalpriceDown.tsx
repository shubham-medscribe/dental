import React from "react";
import Info from "../../constant/dentist_info";
import theme from "../../constant/Constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Teeth from "../../assests/teeth.png";
export default function DentalpriceDown({ openPopForm }: Record<string, any>) {
  return (
    <div className="w-full flex flex-col justify-center items-center bg-[#F9FAFF] py-10">
      <div className="max-w-screen-xl flex justify-center">
        {/* <img src={Teeth} className="w-[500px]  h-auto" alt="single implant" /> */}
      </div>
      <div className="w-full p-5 flex flex-col lg:flex-row max-w-screen-xl">
        <div className="flex flex-col items-center  w-full">
          <div className="w-full flex justify-center">
           
            <img
              src={Teeth}
              className="w-[70vw] max-w-[500px]  h-auto"
              alt="single implant"
            />
          </div>
          <div className="">
            <h1 className="uppercase text-3xl  font-extrabold my-4 text-center lg:text-left ">
              {" "}
              Dental implant <br className="md:block hidden" /> price break down
            </h1>
            <div className=" flex justify-center lg:justify-start">
              <button
                style={{ backgroundColor: theme }}
                onClick={() => openPopForm(true)}
                type="button"
                className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:gap-8  w-full p-5 shadow-lg rounded-lg lg:shadow-none">
          <div className="flex flex-col lg:gap-10  lg:flex-row items-center justify-center">
            <div className="bg-white w-full rounded-lg p-5 lg:w-[301px] lg:h-[240px] lg:shadow-lg flex items-center gap-3 justify-center">
              <h2
                style={{ color: theme }}
                className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left w-fit "
              >
                <FontAwesomeIcon icon={faCheck} />
              </h2>
              <h2 className=" font-extrabold text-3xl  text-center lg:text-left w-full">
                Implant Consultation
              </h2>
              {/*  <p className="text-center font-medium py-1 lg:text-left">
                Cutting Edge Computer Guided Technology
              </p> */}
            </div>

            <div className="bg-white w-full rounded-lg  p-5 lg:w-[301px] lg:h-[240px] lg:shadow-lg flex items-center gap-3 justify-center">
              <h2
                style={{ color: theme }}
                className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left w-fit"
              >
                <FontAwesomeIcon icon={faCheck} />
              </h2>
              <h2 className="font-extrabold  text-3xl  text-center lg:text-left w-full">
                Cone-Beam CT Scan
              </h2>
              {/*  <p className="text-center font-medium py-1 lg:text-left">
                Implant Placement Only. Includes Full Mouth X-Ray
              </p> */}
            </div>
          </div>

          <div className=" rounded-lg flex flex-col lg:gap-10  lg:flex-row items-center justify-center">
            <div className="bg-white rounded-lg w-full p-5 lg:w-[301px] lg:h-[240px]  lg:shadow-lg flex items-center gap-3 justify-center">
              <h2
                style={{ color: theme }}
                className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left w-fit"
              >
                <FontAwesomeIcon icon={faCheck} />
              </h2>
              <h2 className=" font-extrabold text-3xl  text-center lg:text-left w-full">
                Implant
              </h2>
              {/*  <p className="text-center font-medium py-1 lg:text-left">
                Same Day In-House Lab Dental Crown
              </p> */}
            </div>

            <div className="bg-white w-full rounded-lg p-5 lg:w-[301px] lg:h-[240px] lg:shadow-lg flex items-center gap-3 justify-center">
              <h2
                style={{ color: theme }}
                className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left w-fit"
              >
                <FontAwesomeIcon icon={faCheck} />
              </h2>
              <h2 className=" font-extrabold text-3xl  text-center lg:text-left w-full">
                Stock Abutment
              </h2>
              {/*  <p className="text-center font-medium py-1 lg:text-left">
                Cutting Edge Computer Guided Technology
              </p> */}
            </div>
          </div>

          <div className="bg-white py-8 w-full p-5 lg:shadow-lg flex items-center  gap-3 rounded-lg space-y-1">
            <h2
              style={{ color: theme }}
              className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left w-fit"
            >
              <FontAwesomeIcon icon={faCheck} />
            </h2>
            {/* <h2
              style={{ color: theme }}
              className="text-[#FEAC33] font-bold text-3xl  text-center lg:text-left"
            >
              $2,495
            </h2> */}
            <h2 className=" font-extrabold text-3xl  text-center lg:text-left w-full">
              Digitally Designed Implant Zirconia Crown
            </h2>
            {/* <p className="text-center lg:text-left font-medium py-1">
              Our clinic uses the latest advances in dental implant procedures
              in order ensure superior lifelong results
            </p> */}
          </div>

          <div className=" w-full px-5  flex flex-col items-center  rounded-lg ">
            <p className="text-center text-sm lg:text-left font-medium py-1">
              *Pricing may vary if you need additional procedures and start
              above the pricing also mention in the banner section as well.
            </p>
          </div>
        </div>
      </div>

      {/*  Dentist showCase */}
      <div className="w-full flex flex-col  justify-center max-w-screen-xl pt-10">
        <div className="flex justify-center gap-3 uppercase font-bold py-2 text-xl lg:text-3xl ">
          <h1>{"😊"}</h1>
          <div className="uppercase  font-extrabold text-xl lg:text-3xl ">
            <h1>Meet the Dentists</h1>
          </div>
        </div>

        {Info.dentist.map((key, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-col lg:flex-row w-full justify-center lg:gap-10 mt-8">
              <div className="w-full lg:w-96 justify-center items-center bg-white p-5 rounded-lg">
                <div className="w-full flex flex-col items-center bg-white p-5">
                  <div className="w-fit">
                    <figure className="w-fit ">
                      <img
                        className="sm:w-[539px] sm:h-[472px] lg:w-[214px] lg:h-[187px] rounded-3xl object-cover object-center"
                        src={key.img}
                        alt=""
                      />
                    </figure>
                  </div>
                  <div className="flex gap-3 py-3">
                    <div className="w-fit">
                      <figure className="w-[28px]">
                        <img
                          className=" h-auto"
                          src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/07/icon-park-solid_gold-medal-2.svg"
                          alt=""
                        />
                      </figure>
                    </div>
                    <div className="flex flex-col">
                      <p className="font-semibold  xl:text-[16px]">
                        {key.position}
                      </p>
                      <div className="flex flex-col gap-2  mt-3">
                        <span className="font-bold text-xl">{key.name}</span>
                        <span className="text-xl">{key.profession}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-auto flex  items-center justify-center">
                <div className="w-fit  p-5 flex flex-col gap-5 h-full xl:text-[17px]">
                  {key.information.map((desc: string) => {
                    return <p>{desc}</p>;
                  })}
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

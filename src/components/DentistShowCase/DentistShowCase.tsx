import React from 'react'
import Info from "../../constant/dentist_info";
export default function DentistShowCase() {
  return (
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
                    className="w-[539px] sm:h-[472px] lg:w-[214px] lg:h-[187px] rounded-3xl object-cover object-center"
                    src={key.img}
                    alt=""
                  />
                </figure>
              </div>
              <div className="flex gap-3 py-3 w-full justify-center lg:justify-start">
                <div className="w-fit">
                  <figure className="w-[28px]">
                    <img
                      className="w-full h-auto"
                      src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/07/icon-park-solid_gold-medal-2.svg"
                      alt=""
                    />
                  </figure>
                </div>
                <div className="w-full max-w-[368px] flex flex-col">
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
              {key.information.map((desc: string, index: number) => {
                return <p key={index}>{desc}</p>;
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    ))}
  </div>
  )
}

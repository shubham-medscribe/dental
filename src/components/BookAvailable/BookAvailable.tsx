import React from "react";
import useNavigateToContact from "../../hook/navToContact";
import theme from "../constant/Constant";

export default function BookAvailable({ openPopForm }:Record<string,any>) {
  const [ispecial, setIspecial] = React.useState(false);
  const [isBooked, setBooked] = React.useState(true);
  const navigateToContact = useNavigateToContact();
  return (
    <div style={{backgroundColor:theme}} className="w-full  flex justify-center px-5 py-36 relative">
      <div className="flex flex-col lg:flex-row justify-center max-w-7xl gap-10 p-5">
        <div className="text-white min-w-80">
          <div className="flex flex-col lg:flex-row">
            <div className="space-y-5 text-2xl">
              <p>Center for Implant Dentistry ?</p>
              <div>
                <button
                 onClick={()=>openPopForm()}
                  type="button"
                  className="focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Book Available Offers
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex justify-center text-white font-semibold text-lg  py-5 lg:py-0">
          <p>
            At Fremont Center for Implant Dentistry, we set a new standard in
            dental implant care by blending advanced technology with
            individualized treatment. Our expert team specializes in
            life-changing dental solutions, from full-mouth restorations to
            single-tooth implants, all delivered in a modern and welcoming
            environment tailored for your comfort. Whether you require a
            straightforward procedure or a comprehensive treatment plan, our
            approach is fully customized to address your unique dental goals.
            Trust Fremont Center for Implant Dentistry to restore your smile,
            boost your oral health, and renew your confidence. Discover
            unparalleled care and outstanding results with our dedicated team.
          </p>
        </div>
      </div>

      {/* Recieve Special Offers */}
      <div className="w-4/5 lg:max-w-[820px] lg:min-h-[250px] flex justify-center items-center  absolute bottom-0 left-1/2 -translate-x-1/2  translate-y-1/2">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-5xl w-full text-center">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span role="img" aria-label="gift">
              🎉
            </span>{" "}
            Receive Special Offers
          </h3>
          {!ispecial && (
            <div className="mt-4 flex flex-wrap lg:flex-nowrap  gap-3">
              <input
                type="text"
                placeholder="Your Name"
                required={true}
                className="border px-3 py-2 rounded-2xl flex-1 bg-[#F2F2F2]"
              />
              <input
                type="email"
               required={true}
                placeholder="Your Email"
                className="border px-3 py-2 rounded-2xl flex-1 bg-[#F2F2F2]"
              />
              <button
                onClick={() => setIspecial(true)}
                className="px-6 py-3 font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 w-full "
              >
                SUBSCRIBE
              </button>
            </div>
          )}

          {ispecial && (
            <div
              className="w-full mt-3 py-5 flex items-center justify-center
            bg-green-600 text-white rounded-2xl
            "
            >
              Thank you for connecting with us! We will be in touch shortly.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

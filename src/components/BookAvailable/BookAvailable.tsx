import React from "react";
import useNavigateToContact from "../../hook/navToContact";
import theme from "../../constant/Constant";

export default function BookAvailable({ openPopForm }: Record<string, any>) {
  const [ispecial, setIspecial] = React.useState(false);
 
  return (
    <div
      style={{ backgroundColor: theme }}
      className="w-full  flex justify-center lg:px-5 pt-10 lg:pt-36 pb-36 relative"
    >
      <div className="flex flex-col xl:flex-row justify-center max-w-7xl lg:gap-3 xl:gap-10  px-3 sm:px-5">
        <div className="text-white min-w-80 lg:min-w-96">
          <div className="flex flex-col lg:flex-row">
            <div className="space-y-5 text-center lg:text-left text-xl sm:text-2xl">
              <p>Why Center for Implant Dentistry ?</p>
              <div className="flex justify-center lg:justify-start">
                <button
               
                  onClick={() => openPopForm()}
                  type="button"
                  className="focus:outline-none text-white border border-white hover:bg-white hover:text-[#4CC1C4] transition-all duration-200  font-medium rounded-lg text-xl px-12 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  Book Available Offers
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center flex justify-center lg:justify-start lg:text-left text-white font-semibold text-lg  py-5 lg:py-0">
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
      <div className="w-[90%] lg:max-w-[820px] lg:min-h-[250px] flex justify-center items-center  absolute bottom-0 left-1/2 -translate-x-1/2  translate-y-1/2">
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-5xl w-full text-center">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            <span role="img" aria-label="gift">
              🎉
            </span>{" "}
            Receive Special Offers
          </h3>
          {!ispecial && (
            <form
              onSubmit={(e: any) => {
                e.preventDefault();
                setIspecial(true);
              }}
              className="mt-4 flex flex-col sm:flex-row flex-wrap md:flex-nowrap gap-3"
            >
              <div className="w-full flex">
                <label className="text-red-700 w-fit lg:w-5 h-fit text-left">*</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="border px-3 py-2 rounded-2xl flex-1 bg-[#F2F2F2]"
                />
              </div>
              <div className="w-full flex">
                <label className="text-red-700 w-fit lg:w-5 h-fit text-left">*</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="border px-3 py-2 rounded-2xl flex-1 bg-[#F2F2F2]"
                />
              </div>
              <button
                type="submit"
                style={{ backgroundColor: theme }}
                className="px-6 py-3 font-semibold bg-orange-500 text-white rounded-xl hover:bg-orange-600 w-full"
              >
                SUBSCRIBE
              </button>
            </form>
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

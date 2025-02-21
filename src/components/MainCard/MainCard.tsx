import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Video from "../../assests/implant.mp4"
import theme from "../../constant/Constant";

function MainCard({ openPopForm }: Record<string, any>) {
  return (
    <div className="w-full flex flex-col items-center gap-5 bg-white rounded-3xl  px-5 py-5  max-w-[419px]">
      <div className="w-[263px]  sm:w-[290px] lg:w-[320px] xl:max-w-[380px] mr-[11.5%] sm:mr-[10%]">
        <video autoPlay playsInline loop muted controls className="w-full rounded-2xl ">
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex justify-center">
          <h2 className="font-bold text-[28px] lg:text-3xl">Dental Implants</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span
            style={{ color: theme }}
            className="text-[#153371] font-bold text-xl  lg:text-3xl"
          >
            $2,495
          </span>
          <span>(all-in)</span>
        </div>

        <div className="w-full flex gap-2 items-center justify-center">
          <div className="w-fit">
            <img src="https://redwoodcityimplantclinic.com/wp-content/plugins/constant-images-plugin/images/Line-10.svg" />
          </div>
          <span
            style={{ color: theme }}
            className="text-[#153371] font-bold text-center text-[17px] w-fit lg:text-xl "
          >
            Affordable Financing
          </span>
          <div className="w-fit">
            <img src="https://redwoodcityimplantclinic.com/wp-content/plugins/constant-images-plugin/images/Line-10.svg" />
          </div>
        </div>

        <div className="w-full flex gap-3 items-center py-1 justify-center">
          <div
            style={{ color: theme }}
            className="text-[#153371] font-bold text-base  lg:text-sm"
          >
            1 Implant + Crown 73$/month
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            onClick={() => {
              openPopForm();
            }}
            type="button"
            style={{ backgroundColor: theme }}
            className="w-[15em] focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultation
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-3 justify-center items-center lg:text-base  py-1">
          <div className=" lg:flex gap-3 lg:flex-row justify-center">
            <div className="flex gap-3 w-25">
              <div style={{ color: theme }} className="text-[#153371]">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div>
                <p>Zero Down Payment</p>
              </div>
            </div>

            <div className="flex gap-3 w-25">
              <div style={{ color: theme }} className="text-[#153371]">
                <FontAwesomeIcon icon={faCheckCircle} />
              </div>
              <div>
                <p>48 Months</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;

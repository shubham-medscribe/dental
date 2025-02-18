import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainCard({ openPopForm }: Record<string, any>) {
  return (
    <div className="w-full bg-white rounded-3xl  px-9 py-10 pt-10 sm:pt-24 max-w-[419px] relative">
      <div className="w-[150px] sm:w-[250px] lg:w-[320px] max-w-[400px] absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <img
          className="object-center object-cover"
          src="https://redwoodcityimplantclinic.com/wp-content/uploads/2024/07/dentalimplantimage-1.png"
        />
      </div>
      <div className="flex flex-col gap-2 ">
        <div className="flex justify-center">
          <h2 className="font-bold lg:text-3xl">Dental Implants</h2>
        </div>
        <div className="flex items-center justify-center gap-2">
          <span className="text-[#153371] font-bold lg:text-3xl">$2,495</span>
          <span>(all-in)</span>
        </div>

        <div className="w-full flex gap-2 items-center justify-center">
          <div className="h-[1px] bg-black w-10"></div>
          <span className="text-[#153371] font-bold text-center text-base w-fit lg:text-xl ">
            Affordable Financing
          </span>
          <div className="h-[1px] bg-black w-10"></div>
        </div>

        <div className="w-full flex gap-3 items-center py-1 justify-center">
          <div className="text-[#153371] font-bold text-sm">
            1 Implant + Crown 73$/month
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            onClick={()=>{openPopForm()}}
            type="button"
            className="w-[15em] focus:outline-none text-white bg-[#FEAC34] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-base px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Free Consultation
          </button>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-3 justify-center lg:text-base items-center py-1">
          <div className="flex gap-3 ">
            <div className="text-[#153371]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <p>Zero Down Payment</p>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="text-[#153371]">
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
            <div>
              <p>48 Months</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCard;

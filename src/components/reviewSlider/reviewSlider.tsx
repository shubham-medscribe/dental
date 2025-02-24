import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ReviewSlider() {
  const reviews = [
    {
      name: "Farzaneh Zafari",
      star: 5,
      review:
        "I truly appreciated Dr. Jain and Dr. Gupta and the amazing staff. They were also kind and made me feel comfortable throughout the process. Thanks to them. I now have a beautiful smile and I could be happier. I will definitely recommend this office to my friends and family and they have an in-house lab and amazing technology.",
    },
    {
      name: "Michele",
      star: 5,
      review:
        "I am very pleased with the care at the center for implant dentistry. I had full mouth implants, upper and lower jaw. I was given back my smile and the confidence in interaction with people. I’m very impressed with the technology here, it helped with the time. The staff is very knowledgeable and helpful, always ready to help and go the extra mile. I would recommend the center to my family and friends.",
    },
    {
      name: "Mercedes Deguzman",
      star: 5,
      review:
        "I've been going to this dental office for many years. Dr. Gupta and Dr. Jain and their staff have taken care of my dental needs exceptionally. They are experts in what they do. They did implants that eventually saved me grief from root canals, etc. It has made my life less stressful. I highly recommend them.",
    },
    {
      name: "Chai Zhen Liao",
      star: 5,
      review:
        "I had my upper jaw implant procedure done here and I couldn't be happier with the result. The team was professional, caring, and made the entire process smooth and comfortable, and Dr. Jain is very helpful. They did my job very well.",
    },
    {
      name: "Minnie Novak",
      star: 5,
      review:
        "I have been coming to Center for Implants for 6 years. I’m always treated with professionalism and courtesy. Staff is great! I have not ever had a problem with any of my treatments and visits.",
    },
    {
      name: "Chieng Nim",
      star: 5,
      review:
        "Getting the all on 8 full mouth implants at the center for implant dentistry has truly changed my life. I had implants on both jaws. Dr. Jain and Dr. Gupta are amazing. It's a big difference now. I can bite the whole apple without any problems. Great job with the staff and doctors.",
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="text-xl flex justify-center items-center gap-2 py-5">
        <div className="text-4xl w-fit">❤️</div>
        <div className="capitalize font-bold text-base md:text-2xl lg:text-3xl w-fit">
          <h1 className="w-fit t">Real stories from happy patients</h1>
        </div>
      </div>

      {/*  swiper js */}
      <div className="w-full max-w-4xl lg:max-w-screen-lg mx-auto p-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 }, // For screens >= 640px
            768: { slidesPerView: 2 }, // For screens >= 768px
            1024: { slidesPerView: 3 }, // For screens >= 1024px
            1280: { slidesPerView: 4 },
          }}
          className="rounded-lg shadow-lg space-x-2"
        >
          {reviews.map((review) => (
            <SwiperSlide>
              <Card
                name={review.name}
                review={review.review}
                star={review.star}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

function Card({ name, review, star }: Record<string, any>) {
  return (
    <div className="w-full  flex flex-col p-5 bg-[#F9FAFF]">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white">
          {name[0]}
        </div>
        <div className="flex gap-3">
          <span>{name}</span>
          <span>
            <FontAwesomeIcon className="text-[#FF8754]" icon={faStar} />
          </span>
          <span>{star}</span>
        </div>
        <div>
          <p>{review}</p>
        </div>
      </div>
    </div>
  );
}

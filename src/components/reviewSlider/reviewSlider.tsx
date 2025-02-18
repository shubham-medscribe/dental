import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function ReviewSlider() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-10">
      <div className="text-xl flex flex-col items-center gap-2 py-5">
        <div className="text-4xl">❤️</div>
        <div className="capitalize font-bold italic lg:text-3xl">
          <h1>Real stories form happy patients</h1>
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
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
          <SwiperSlide>
            <Card />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="w-full  flex flex-col p-5 bg-[#F9FAFF]">
      <div className="space-y-3">
        <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center text-white">
          J
        </div>
        <div className="flex gap-3">
          <span>Paul N.</span>
          <span>
            <FontAwesomeIcon className="text-[#FF8754]" icon={faStar} />
          </span>
          <span>5</span>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non
            repudiandae atque saepe suscipit magni dolore, asperiores nesciunt
            delectus corrupti veritatis! Deserunt voluptas beatae saepe a omnis
            facere adipisci? Consectetur, est!
          </p>
        </div>
      </div>
    </div>
  );
}

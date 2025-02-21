import React, { useState } from "react";
import FAQ from "../components/faq/faq";
import BookAvailable from "../components/BookAvailable/BookAvailable";
import Footer from "../components/footer/Footer";
import EasyDental from "../components/EasyDental/EasyDental";
import DentalpriceDown from "../components/DentalpriceDown/DentalpriceDown";
import SaveOffer from "../components/SaveOffer/SaveOffer";
import LocationAndOfficeHour from "../components/LocationAndOfficeHour/LocationAndOfficeHour";
import Navbar from "../components/navbar/navbar";
import ReviewSlider from "../components/reviewSlider/reviewSlider";
import PopFor from "../components/popForm/PopFor";
import CallUsBar from "../components/CallUsBar/CallUsbar";
import WhyDenatlImplant from "../components/whyDenatlImplant/whyDenatlImplant";

export default function Home() {
  const [open, setClose] = useState<boolean>(false);
  return (
    <div className="w-full font-arial">
      <CallUsBar />
      {open && <PopFor closePopForm={() => setClose(false)} />}
      <Navbar openPopForm={() => setClose(true)} />
      <LocationAndOfficeHour />
      <SaveOffer openPopForm={() => setClose(true)} />
      <ReviewSlider />
      <DentalpriceDown openPopForm={() => setClose(true)} />

      <EasyDental openPopForm={() => setClose(true)} />
      <WhyDenatlImplant />
      <FAQ openPopForm={() => setClose(true)} />
      <BookAvailable openPopForm={() => setClose(true)} />
      <Footer openPopForm={() => setClose(true)} />
    </div>
  );
}

import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/contact";
import ThankYou from "../pages/thankyou";

const RoutesRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/thank-you" element={<ThankYou />} />
    </Routes>
  );
};

export default RoutesRoot;

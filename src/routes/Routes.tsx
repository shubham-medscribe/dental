import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";

const RoutesRoot = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default RoutesRoot;

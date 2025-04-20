import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UxWriting from "../../pages/ux-writing/uxWriting";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";
import ServiceDetails from "../../pages/service-details/ServiceDetails";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/ux-writing" element={<UxWriting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/service-details" element={<ServiceDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

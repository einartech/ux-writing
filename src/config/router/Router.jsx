import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import UxWriting from "../../pages/ux-writing/UxWriting";
import Login from "../../pages/login/Login";
import Registration from "../../pages/registration/Registration";


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UxWriting />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}


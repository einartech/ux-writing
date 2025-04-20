import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import App from "../../App";
import "../../../src/index.css";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/welcome" element={<App />} />
        <Route path="/homepage" element={<App />} />
        <Route path="/favorites" element={<App />} />
        <Route path="/onsale" element={<App />} />
        <Route path="/checkout" element={<App />} />
        <Route path="/aboutus" element={<App />} />
        <Route path="/contactpage" element={<App />} />
        <Route path="/privatepolicy" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./i18next";
// @ts-ignore
import Router from "../src/config/router/Router";

const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <Router />
    </StrictMode>
  );
}
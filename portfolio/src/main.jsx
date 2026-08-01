import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.jsx";

function resetScrollPosition() {
  if (typeof window === "undefined") return;

  window.history.scrollRestoration = "manual";
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

function Root() {
  useEffect(() => {
    resetScrollPosition();

    AOS.init({
      duration: 1000,
      once: false,
      offset: 0,
    });
  }, []);

  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
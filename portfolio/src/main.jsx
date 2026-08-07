import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.jsx";


function Root() {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({
      duration: 800, 
      mirror: true, 
      once: false,  
      offset: 50,  
    });

    // Força o AOS a recalcular as posições dos elementos após a renderização inicial do React
    requestAnimationFrame(() => {
      AOS.refresh();
    });
  }, []);

  return (
    <App />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
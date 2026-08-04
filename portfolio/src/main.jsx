import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.jsx";

// Evita a restauração automática do scroll pelo navegador ao dar F5
if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

function Root() {
  useEffect(() => {
    // Inicializa o AOS
    AOS.init({
      duration: 600, // 1000ms pode parecer um pouco lento com Smooth Scroll; 800ms costuma ser o ponto ideal
      mirror: true, // Faz a animação rodar de forma reversa ao rolar para cima
      once: false,   // Garante que a animação aconteça apenas uma vez e não quebre durante a rolagem
      offset: 50,   // Um offset menor (50px em vez de 0/100) garante que o elemento já comece a animar assim que entra na viewport
    });

    // Força o AOS a recalcular as posições dos elementos após a renderização inicial do React
    // requestAnimationFrame(() => {
    //   AOS.refresh();
    // });
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
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
// ❌ Removemos o import do BrowserRouter daqui
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
      duration: 600, 
      mirror: true, 
      once: false,  
      offset: 50,  
    });

    // Força o AOS a recalcular as posições dos elementos após a renderização inicial do React
    requestAnimationFrame(() => {
      AOS.refresh();
    });
  }, []);

  // ✅ Retornamos apenas o App direto. 
  // O controle de rotas agora é feito internamente pelo RouterProvider dentro do App.jsx
  return (
    <App />
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
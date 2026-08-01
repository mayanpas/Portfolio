// import { useScrollAnimation } from './hooks/useScrollAnimation';
import "@fontsource/cal-sans";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import DetalhesProjeto from "./components/DetalhesProjetos";
import LoadingScreen from "./components/LoadingScreen";
import "./App.css";

// Agrupa as seções da página principal
function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => {
        // 1. Se o destino for o topo / hero, reseta o scroll para (0,0)
        if (hash === "#heroSection" || hash === "#hero") {
          window.scrollTo({ top: 0, left: 0, behavior: "instant" });
          return;
        }

        // 2. Para as outras seções (sobre, projetos, contato, etc.)
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView();
        }
      });
    } else {
      // Se não tiver hash na URL, garante que abre no topo
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <div className="fade-in-page">
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Aguarda o React/DOM estarem totalmente prontos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  return (
    <SmoothScroll>
      <LoadingScreen isLoading={isLoading} />
      <div className="App">
        <Header/>
        <main>
          <Routes>
            {/* Rota principal (página única) */}
            <Route path="/" element={<Home />} />

            {/* Nova rota para cada projeto */}
            <Route path="/projeto/:id" element={<DetalhesProjeto />} />
          </Routes>
        </main>
        
      </div>
    </SmoothScroll>
  );
}

export default App;

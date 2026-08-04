import "@fontsource/cal-sans";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import DetalhesProjeto from "./components/DetalhesProjetos";
import "./App.css";

function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, [hash]);

  return (
    <>
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </>
  );
}

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projeto/:id" element={<DetalhesProjeto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
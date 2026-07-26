// import { useScrollAnimation } from './hooks/useScrollAnimation';

import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SobreMim from "./components/SobreMim";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import FaleComigo from "./components/FaleComigo";
import Footer from "./components/Footer";
import FooterShadow from "./components/FooterShadow";
import Background from "./components/Background";
import Experiencia from "./components/Experiencia";
import FraseFinal from "./components/FraseFinal";
import "./App.css";

function App() {
  // Ativa a animação universalmente para qualquer elemento com a classe .animar
  // useScrollAnimation('.hidden');
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <SobreMim />
        <Experiencia />
        <Habilidades />
        <Projetos />
        <FaleComigo />
        <FraseFinal />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;

import sobreMim from "../assets/Header/sobremim.svg";
import habilidades from "../assets/Header/habilidades.svg";
import projetos from "../assets/Header/projetos.svg";
import faleComigo from "../assets/Header/falecomigo.svg";
import { useState, useEffect } from 'react';

export default function Navbar() {
const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      // Ignora pequenos ruídos de scroll no topo
      if (currentScrollTop <= 50) {
        setShowNavbar(true);
        lastScrollTop = currentScrollTop;
        return;
      }

      // Se chegou no final ou entrou no efeito de bounce da borda inferior
      if (currentScrollTop >= maxScroll - 40) {
        setShowNavbar(false); // Mantém oculto e ignora o quique
        lastScrollTop = currentScrollTop;
        return;
      }

      // Comportamento normal: descendo esconde, subindo aparece
      if (currentScrollTop > lastScrollTop) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className={`navbar ${showNavbar ? "visible" : "hidden"}`}
    >
      <nav id="headerLinks">
        <a
          href="#cardSobreMim"
          className="headerLink"
          onClick={(e) => handleNavLinkClick(e, "cardSobreMim")}
        >
          <img src={sobreMim} alt="iconePessoa" />
          Sobre mim
        </a>
        <a
          href="#cardHabilidades"
          className="headerLink"
          onClick={(e) => handleNavLinkClick(e, "cardHabilidades")}
        >
          <img src={habilidades} alt="iconeCodigo" />
          Habilidades
        </a>
        <a
          href="#cardProjetos"
          className="headerLink"
          onClick={(e) => handleNavLinkClick(e, "cardProjetos")}
        >
          <img src={projetos} alt="iconeArquivos" />
          Projetos
        </a>
        <a
          href="#cardContato"
          className="headerLink"
          onClick={(e) => handleNavLinkClick(e, "cardContato")}
        >
          <img src={faleComigo} alt="iconeBalao" />
          Fale Comigo
        </a>
      </nav>
    </header>
  );
}

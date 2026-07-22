import sobreMim from "../assets/Header/sobremim.svg";
import habilidades from "../assets/Header/habilidades.svg";
import projetos from "../assets/Header/projetos.svg";
import faleComigo from "../assets/Header/falecomigo.svg";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [isClickScrolling, setIsClickScrolling] = useState(false);

  useEffect(() => {
    // Como o Lenis gerencia o scroll global, pegamos a instância dele se estiver ativa,
    // ou usamos um evento de scroll normal compatível.
    let lastScrollTop = 0;

    const handleScroll = () => {
      // Se o movimento foi causado por um clique em um link interno, ignora o hide/show
      if (isClickScrolling) return;

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      // Se rolar para baixo e já passou do topo (ex: 80px)
      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        setShowNavbar(false); // Esconde a navbar
      } else {
        setShowNavbar(true); // Mostra a navbar ao rolar para cima
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClickScrolling]);

  // Função acionada ao clicar em um item do menu
  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsClickScrolling(true); // Trava a ocultação automática
    setShowNavbar(true); // Garante que ela fique visível

    // const element = document.getElementById(targetId);
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }

    // Libera a ocultação por scroll manual após a animação de clique terminar
    setTimeout(() => {
      setIsClickScrolling(false);
    }, 800); // 800ms é o tempo médio da rolagem suave até o destino
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

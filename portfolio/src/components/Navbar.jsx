import sobreMim from "../assets/Header/sobremim.svg";
import habilidades from "../assets/Header/habilidades.svg";
import projetos from "../assets/Header/projetos.svg";
import faleComigo from "../assets/Header/falecomigo.svg";
import { useState, useEffect, useRef } from 'react';

export default function Navbar() {
const [showNavbar, setShowNavbar] = useState(true);
  
  const isClickScrolling = useRef(false);
  const targetScrollTop = useRef(0);

  useEffect(() => {
    // 1. Força o navegador a ir para o topo absoluto assim que carregar/recarregar
    window.scrollTo(0, 0);
    
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;

      if (isClickScrolling.current) {
        if (Math.abs(currentScrollTop - targetScrollTop.current) < 15 || currentScrollTop >= maxScroll - 5) {
          isClickScrolling.current = false;
        }
        return; 
      }

      if (currentScrollTop > lastScrollTop && currentScrollTop > 80) {
        setShowNavbar(false); 
      } else {
        setShowNavbar(true);  
      }

      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e, targetId) => {
    e.preventDefault();
    
    const element = document.getElementById(targetId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      
      targetScrollTop.current = Math.min(elementPosition - 80, maxScroll); 
      isClickScrolling.current = true;

      window.scrollTo({
        top: targetScrollTop.current,
        behavior: 'smooth'
      });

      setTimeout(() => {
        if (targetScrollTop.current >= maxScroll - 10) {
          setShowNavbar(false);
        }
      }, 1000);
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

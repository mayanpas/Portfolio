import "../css/Header.css";
import "../App.css";
import { useTheme } from "../hooks/useTheme";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Buttons/Button2";
import { useState, useEffect } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  // const [activeSection, setActiveSection] = useState("");
  // const [menuOpen, setMenuOpen] = useState(false);
  // const location = useLocation();

  // const handleLinkClick = () => setMenuOpen(false);

  // // Trava o scroll do body quando o menu retrátil estiver aberto no mobile
  // useEffect(() => {
  //   if (menuOpen) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "unset";
  //   }

  //   return () => {
  //     document.body.style.overflow = "unset";
  //   };
  // }, [menuOpen]);

  // // Observer do Scrollspy
  // useEffect(() => {
  //   if (location.pathname !== "/") {
  //     setActiveSection("");
  //     return;
  //   }

  //   const sections = document.querySelectorAll("section[id]");

  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           setActiveSection(entry.target.id);
  //         }
  //       });
  //     },
  //     {
  //       rootMargin: "-45% 0px -45% 0px",
  //       threshold: 0,
  //     }
  //   );

  //   sections.forEach((section) => observer.observe(section));

  //   const handleScroll = () => {
  //     const isBottom =
  //       window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
  //     if (isBottom) {
  //       setActiveSection("contatoSection");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     observer.disconnect();
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [location]);

  return (
    <header>
      {/* 1. LOGO (Esquerda) */}
      <Link to="/#heroSection" id="headerLogo" >
        mayanpas
      </Link>

      {/* 2. CONJUNTO DE NAVEGAÇÃO E AÇÕES (Alinhados à Direita no Desktop) */}
      <div className="headerRightGroup">
        <nav id="headerNav">
          <ul>
            <li>
              <Link
                to="/#sobreSection"
                
                
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/#habSection"
                
                
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="/#prjSection"
            
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/#contatoSection"
                
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        
          {/* 💡 ÍCONE CORRIGIDO: Modo escuro mostra o Sol, Modo claro mostra a Lua */}
          <Button
            acao={toggleTheme}
            icon={theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
            id="headerButton"
          />

      
       
      </div>
    </header>
  );
}

export default Header;
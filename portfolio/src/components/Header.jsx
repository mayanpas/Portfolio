import "../css/Header.css";
import { useTheme } from "../hooks/useTheme";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Buttons/Button1";
import { useState, useEffect } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setMenuOpen(false);

  // Controle total do Menu Aberto (Scroll, Meta Tag e Fix do Safari)
  useEffect(() => {
    let themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (menuOpen) {
      // 1. Cria a meta tag dinamicamente se não existir
      if (!themeColorMeta) {
        themeColorMeta = document.createElement("meta");
        themeColorMeta.name = "theme-color";
        document.head.appendChild(themeColorMeta);
      }
      
      // 2. Trava o scroll
      document.body.style.overflow = "hidden";
      
      // 3. Adiciona a classe que esconde a imagem de fundo no CSS
      document.documentElement.classList.add("menu-open-safari-fix");
      
      // 4. Força a cor na meta tag
      themeColorMeta.setAttribute("content", theme === "dark" ? "#0c0c0c" : "#ffffff");
      
    } else {
      // Reverte tudo quando o menu fecha
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("menu-open-safari-fix");
      
      if (themeColorMeta) {
        themeColorMeta.remove();
      }
    }

    // Cleanup de segurança caso o componente seja desmontado
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.classList.remove("menu-open-safari-fix");
    };
  }, [menuOpen, theme]);

  // Observer do Scrollspy
  useEffect(() => {
    // Se não estiver na Home, limpa a seção ativa
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 50;
      if (isBottom) {
        setActiveSection("contatoSection");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <header className={menuOpen ? "menu-active" : ""}>
      {/* 1. LOGO */}
      <Link to="/#heroSection" id="headerLogo" onClick={handleLinkClick}>
        mayanpas
      </Link>

      {/* 2. NAVEGAÇÃO E AÇÕES DA DIREITA */}
      <div className="headerRightGroup">
        <nav id="headerNav" className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link
                to="/#sobreSection"
                className={activeSection === "sobreSection" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/#habSection"
                className={activeSection === "habSection" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="/#prjSection"
                className={activeSection === "prjSection" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/#contatoSection"
                className={activeSection === "contatoSection" ? "active" : ""}
                onClick={handleLinkClick}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="headerActions">
          {/* Alternador de Tema */}
          <Button
            acao={toggleTheme}
            icon={theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
            id="headerButton"
            ariaLabel="Alternar tema"
          />
          
          {/* Botão Hambúrguer Mobile */}
          <button
            className="mobileMenuToggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <BiX size={28} /> : <BiMenu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
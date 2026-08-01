import "../css/Header.css";
import { useTheme } from "../hooks/useTheme";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Buttons/Button2";
import { useState, useEffect } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleLinkClick = () => setMenuOpen(false);

  // Trava o scroll do body quando o menu retrátil estiver aberto no mobile
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  // Observer do Scrollspy
  useEffect(() => {
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
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50;
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
      {/* 1. LOGO (Esquerda) */}
      <Link to="/#heroSection" id="headerLogo" onClick={handleLinkClick}>
        mayanpas
      </Link>

      {/* 2. CONJUNTO DE NAVEGAÇÃO E AÇÕES (Alinhados à Direita no Desktop) */}
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
          {/* 💡 ÍCONE CORRIGIDO: Modo escuro mostra o Sol, Modo claro mostra a Lua */}
          <Button
            acao={toggleTheme}
            icon={theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
            id="headerButton"
          />

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
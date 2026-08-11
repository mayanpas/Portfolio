import "../css/Header.css";
import { useTheme } from "../hooks/useTheme";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import Button from "../components/Buttons/Button1";
import { useState, useEffect, useRef } from "react";

function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]);

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

    return () => {
      observer.disconnect();
    };
  }, [location]);

  const handleNavClick = (e, sectionId) => {
    setMenuOpen(false); 
    if (location.pathname === "/") {
      e.preventDefault();
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, null, `#${sectionId}`);
    }
  };

  return (
    <header ref={headerRef} className={menuOpen ? "menu-active" : ""}>
      <Link
        to="/#heroSection"
        id="headerLogo"
        onClick={(e) => handleNavClick(e, "heroSection")}
      >
        mayanpas
      </Link>

      <div className="headerRightGroup">
        <nav id="headerNav" className={menuOpen ? "open" : ""}>
          <ul>
            <li>
              <Link
                to="/#sobreSection"
                className={activeSection === "sobreSection" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "sobreSection")}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/#habSection"
                className={activeSection === "habSection" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "habSection")}
              >
                Habilidades
              </Link>
            </li>
            <li>
              <Link
                to="/#prjSection"
                className={activeSection === "prjSection" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "prjSection")}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link
                to="/#contatoSection"
                className={activeSection === "contatoSection" ? "active" : ""}
                onClick={(e) => handleNavClick(e, "contatoSection")}
              >
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className="headerActions">
      
          <Button
            acao={toggleTheme}
            icon={theme === "dark" ? <BiSun /> : <BiMoon />}
            id="headerButton"
            ariaLabel="Alternar tema"
          />

          <Button
            acao={() => setMenuOpen(!menuOpen)}
            ariaLabel="Toggle menu"
            label={menuOpen ? <BiX /> : <BiMenu />}
            id="headerMobileMenuButton"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
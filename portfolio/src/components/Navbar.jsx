import { useEffect, useState } from "react";
import sobreMim from "../assets/Header/sobremim.svg";
import habilidades from "../assets/Header/habilidades.svg";
import projetos from "../assets/Header/projetos.svg";
import faleComigo from "../assets/Header/falecomigo.svg";
import experiencia from "../assets/Header/experiencia.svg";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    if (sections.length === 0) return;

    const getActiveSection = () => {
      const line = window.innerHeight * 0.35;

      const active = sections.reduce((currentActive, section) => {
        const rect = section.getBoundingClientRect();
        const distance = Math.abs(rect.top - line);

        if (!currentActive || distance < currentActive.distance) {
          return { id: section.id, distance };
        }
        return currentActive;
      }, null);

      if (active && active.id !== activeSection) {
        setActiveSection(active.id);
      }
    };

    const handleScroll = () => {
      window.requestAnimationFrame(getActiveSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [activeSection]);

  const links = [
    {
      id: "sectionSobreMim",
      label: "Sobre mim",
      icon: sobreMim,
      alt: "iconePessoa",
    },
    {
      id: "sectionExperiencia",
      label: "Experiência",
      icon: experiencia,
      alt: "iconeBalao",
    },
    {
      id: "sectionHabilidades",
      label: "Habilidades",
      icon: habilidades,
      alt: "iconeCodigo",
    },
    {
      id: "sectionProjetos",
      label: "Projetos",
      icon: projetos,
      alt: "iconeArquivos",
    },
    {
      id: "sectionFaleComigo",
      label: "Fale Comigo",
      icon: faleComigo,
      alt: "iconeBalao",
    },
  ];

  return (
    <header id="header">
      <nav id="headerLinks">
        {links.map((link) => {
          const isActive = activeSection === link.id;

          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`headerLink${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              <img src={link.icon} alt={link.alt} />
              {link.label}
            </a>
          );
        })}
      </nav>
    </header>
  );
}

export default Navbar;

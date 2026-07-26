import desktopTower from "../assets/DesktopTower.svg";
import code from "../assets/code.svg";
import uiDesign from "../assets/uiDesign.svg";
import book from "../assets/Book.svg";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile"; // 1. Importa o hook

function Experiencia() {
  const isMobile = useIsMobile(); // 2. Executa em 1 linha!
  return (
    <section className="superSection" id="sectionExperiencia">
      <div
        className="superTitleContainer"
        id="experienciaSuperTitle"
        data-aos={isMobile ? "fade-up" : "fade"}
      >
        <h1 id="experienciaTitle">
          Minha <br />
          <span>Experiência</span>
        </h1>
        <p>
          {/* <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br /> */}
          Minha vivência na área de T.I.
        </p>
      </div>
      <div id="experiencia" data-aos="fade-up">
        <div className="microCard" id="expMicroCard">
          <img src={desktopTower} alt="desktopIcon" />
          <h2>2+ Anos de experiência</h2>
          <p>Como profissional de T.I.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={code} alt="codeIcon" />
          <h2>1 ano de experiência</h2>
          <p>Em desenvolvimeto.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={uiDesign} alt="squaresIcon" />
          <h2>2+ Anos de experiência</h2>
          <p>Em design de UI.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={book} alt="bookIcon" />
          <h2>Formação superior</h2>
          <p>5º período em Engenharia de Software na UNILESTE.</p>
        </div>
      </div>
    </section>
  );
}

export default Experiencia;

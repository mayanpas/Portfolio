import HTML5 from "../assets/html5.svg";
import CSS3 from "../assets/css3.svg";
import JavaScript from "../assets/javaScript.svg";
import NodeJS from "../assets/nodeJs.svg";
import ReactJS from "../assets/reactJs.svg";
import Java from "../assets/java.svg";
import MySQL from "../assets/mySqlBlue.svg";
import Git from "../assets/git.svg";
import GitHub from "../assets/github.svg";
import Figma from "../assets/figma.svg";
import Illustrator from "../assets/adobeIllustrator.svg";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile"; // 1. Importa o hook

function Habilidades() {
  const isMobile = useIsMobile(); // 2. Executa em 1 linha!
  return (
    <section className="superSection" id="sectionHabilidades">
      <div
        className="superTitleContainer"
        id="habSuperTitle"
        data-aos={isMobile ? "fade-up" : "fade-left"}
      >
        <h1 id="habTitle">
          Minhas <br />
          <span>HABILIDADES</span>
        </h1>
        <p>
          {/* <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br /> */}
          Um conjunto de ferramentas completo para criar aplicações modernas e
          escaláveis.
        </p>
      </div>
      <div className="" id="cardHabilidades" data-aos={isMobile ? "fade-up" : "fade-right"}>
        <div className="habMicroCards">
          <div className="microCard" id="habMicroCard">
            <h2>Frontend</h2>
            <div className="habButtons">
              <div className="habButton">
                <img src={HTML5} alt="html5Icon" /> HTML
              </div>
              <div className="habButton">
                <img src={CSS3} alt="css3Icon" /> CSS
              </div>
              <div className="habButton">
                <img src={JavaScript} alt="jsIcon" /> JavaScript
              </div>
              <div className="habButton">
                <img src={NodeJS} alt="nodeJsIcon" /> NodeJS
              </div>
              <div className="habButton">
                <img src={ReactJS} alt="reactJsIcon" /> React
              </div>
            </div>
          </div>
          <div className="microCard" id="habMicroCard">
            <h2>Backend</h2>
            <div className="habButtons">
              <div className="habButton">
                <img src={Java} alt="javaIcon" /> Java
              </div>
              <div className="habButton">
                <img src={MySQL} alt="mySqlIcon" /> MySQL
              </div>
            </div>
          </div>
          <div className="microCard" id="habMicroCard">
            <h2>Ferramentas & Outros</h2>
            <div className="habButtons">
              <div className="habButton">
                <img src={Git} alt="giticon" /> Git
              </div>
              <div className="habButton">
                <img src={GitHub} alt="gitHubIcon" /> GitHub
              </div>
            </div>
          </div>
          <div className="microCard" id="habMicroCard">
            <h2>Design</h2>
            <div className="habButtons">
              <div className="habButton">
                <img src={Figma} alt="figmaIcon" />
                Figma
              </div>
              <div className="habButton">
                <img src={Illustrator} alt="illustratorIcon" />
                Illustrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;

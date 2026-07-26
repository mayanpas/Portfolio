import downloadFile from "../assets/downloadFile.svg";
import React from "react";
import { useTheme } from "../hooks/useTheme";
import { BiSun, BiMoon } from "react-icons/bi";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section
      id="hero"
      className=""
      // AQUI ESTÁ O SEGREDO: Adicione o atributo data-aos
      // Você pode adicionar um delay sequencial para cada card entrar um de cada vez
      data-aos="fade-up"
    >
      <div className="superTitleContainer">
        <h1>
          Mayan <br />
          <span>Patrick</span>
        </h1>
        <p>
          <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br />
          Transformando código em impacto real.
        </p>
        <div className="heroButtons">
          <div className="heroButtonContainer">
            <a
              href="/files/Currículo Mayan Patrick.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="curriculo"
            >
              <img src={downloadFile} alt="downloadIcon" id="curriculoIcon" />
              Currículo
            </a>
          </div>
          {/* BOTAO DE MUDAR TEMA CLARO/ESCURO */}
          <div className="heroButtonContainer">
            <a rel="noopener noreferrer" id="theme" onClick={toggleTheme}>
              {/* <img src={downloadFile} alt="downloadIcon" id="curriculoIcon" /> */}
              {/* Exibe o Sol se estiver em 'dark', ou a Lua se estiver em 'light' */}
              {theme === "dark" ? <BiSun /> : <BiMoon />}
              Mudar tema
            </a>
          </div>
        </div>
      </div>

      <div className="profilePhoto" id="profilePhoto1"></div>
    </section>
  );
}

export default Hero;

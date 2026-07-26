import { BiCopy } from "react-icons/bi";
import { BiGitBranch } from "react-icons/bi";
import { BiStar } from "react-icons/bi";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile"; // 1. Importa o hook

function SobreMim() {
  const isMobile = useIsMobile(); // 2. Executa em 1 linha!
  return (
    <section className="superSection" id="sectionSobreMim">
      <div className="STPhoto" data-aos={isMobile ? "fade-up" : "fade-right"}>
        <div className="superTitleContainer" id="sobreMimSuperTitle">
          <h1 id="sobreMimTitle">
            Sobre <br />
            <span>Mim</span>
          </h1>
          <p>
            {/* <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br /> */}
            Conheça um pouco sobre a minha pessoa.
          </p>
        </div>
        <div className="profilePhoto" id="profilePhoto2"></div>
      </div>

      <div
        className=""
        id="cardSobreMim"
        data-aos={isMobile ? "fade-up" : "fade-left"}
      >
        {/* <h2 className="cardTitle">Sobre mim</h2> */}
        <div id="sobreContent">
          <div id="sobreMim">
            <p id="txtSobreMim1">
              <strong>
                Engenheiro de Software Júnior | Analista de Suporte N1 |
                Desenvolvedor Web Front-End
              </strong>
              <br />
              <br />
              Apaixonado por tecnologia e estudante de Engenharia de Software
              (5º período - UNILESTE). Combino uma base técnica sólida adquirida
              em suporte especializado e infraestrutura com habilidades
              avançadas em desenvolvimento de software.
              <br />
              <br />
              Busco oportunidades como desenvolvedor onde possa aplicar meu
              pensamento analítico de engenharia para construir aplicações
              resilientes e impactantes.
              <br />
              <br />
            </p>
            <ul id="lista">
              <li>
                <BiCopy size={25} color="#3c80da" /> Stack Técnica: Java,
                React.js, JavaScript, HTML5, CSS3.
              </li>
              <li>
                <BiGitBranch size={25} color="#8bec90" /> Dados e Versão: SQL,
                MySQL, Git e GitHub.
              </li>
              <li>
                <BiStar size={25} color="#ebb369" /> Diferencial: Experiência
                prática com arquitetura de sistemas, suporte técnico e visão de
                produto, garantindo um desenvolvimento mais consciente e
                centrado na performance.
              </li>
            </ul>
            <br />
            <p id="txtSobreMim2">
              
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;

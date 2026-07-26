import imgProjeto1 from "../assets/Cadastro de pacientes 1.jpg";
import imgProjeto2 from "../assets/bonbonetto.jpg";
import imgProjeto3 from "../assets/painelVendas.jpg";
import gitHub from "../assets/github.svg";
import saibaMais from "../assets/setaDireita.svg";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile"; // 1. Importa o hook

function Projetos() {
  const isMobile = useIsMobile(); // 2. Executa em 1 linha!
  return (
    <section className="superSection" id="sectionProjetos">
      <div
        className="superTitleContainer"
        id="projetosSuperTitle"
        data-aos={isMobile ? "fade-up" : "fade"}
      >
        <h1 id="projetosTitle">
          Meus <br />
          <span>PROJETOS</span>
        </h1>
        <p>
          {/* <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br /> */}
          Uma seleção dos meus trabalhos recentes, que demonstram diversas
          tecnologias e abordagens para a resolução de problemas.
        </p>
      </div>
      <div class="" id="cardProjetos" >
        <div id="prjMicrocards">
          {/* <!-- PROJETO 1 --> */}

          <div class="microCard bloquear-clique" id="prjMicrocard" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div class="prjContent">
              <img src={imgProjeto1} alt="imgProjeto1" class="prjImage" />
              <div class="prjText">
                <h2>Sistema Administrativo Clínico Odontológico</h2>
                <p>
                  Sistema completo, otimizando as operações de uma clínica
                  ondontológica, oferecendo um atendimento mais ágil e eficiente
                  aos pacientes e uma gestão mais organizada de suas atividades.
                </p>
                <div class="prjHabs">
                  <div class="prjHabButton">HTML</div>
                  <div class="prjHabButton">CSS</div>
                  <div class="prjHabButton">JavaScript</div>
                  <div class="prjHabButton">NodeJS</div>
                  <div class="prjHabButton">React</div>
                </div>
              </div>
            </div>
            <div class="prjButtons">
              <a
                href="https://github.com/mayanpas"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton desativado"
                id="github"
              >
                <img src={gitHub} alt="githubIcon" id="githubIcon" />
                GitHub
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton desativado"
                id="saibaMais"
              >
                <img src={saibaMais} alt="setaIcon" id="saibaMaisIcon" />
                Saiba Mais
              </a>
            </div>
          </div>

          {/* <!-- PROJETO 2 --> */}

          <div class="microCard bloquear-clique" id="prjMicrocard" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div class="prjContent">
              <img src={imgProjeto2} alt="imgProjeto" class="prjImage" />
              <div class="prjText">
                <h2>Bonbonetto</h2>
                <p>Vitrine e cardápio virtual de uma confeitaria fictícia.</p>
                <div class="prjHabs">
                  <div class="prjHabButton">HTML</div>
                  <div class="prjHabButton">CSS</div>
                  <div class="prjHabButton">JavaScript</div>
                </div>
              </div>
            </div>
            <div class="prjButtons">
              <a
                href="https://github.com/mayanpas/bonbonetto"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton"
                id="github"
              >
                <img src={gitHub} alt="githubIcon" id="githubIcon" />
                GitHub
              </a>
              <a
                href="https://github.com/mayanpas"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton desativado"
                id="saibaMais"
              >
                <img src={saibaMais} alt="setaIcon" id="saibaMaisIcon" />
                Saiba Mais
              </a>
            </div>
          </div>

          {/* <!-- PROJETO 3 --> */}

          <div class="microCard bloquear-clique" id="prjMicrocard" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <div class="prjContent">
              <img src={imgProjeto3} alt="imgProjeto" class="prjImage" />
              <div class="prjText">
                <h2>Painel de vendas</h2>
                <p>
                  Painel de vendas com dashboard de vendas mensais e atualização
                  ao vivo de métricas.
                </p>
                <div class="prjHabs">
                  <div class="prjHabButton">HTML</div>
                  <div class="prjHabButton">CSS</div>
                  <div class="prjHabButton">JavaScript</div>
                </div>
              </div>
            </div>
            <div class="prjButtons">
              <a
                href="https://github.com/mayanpas/Painel-de-vendas"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton"
                id="github"
              >
                <img src={gitHub} alt="githubIcon" id="githubIcon" />
                GitHub
              </a>
              <a
                href="https://github.com/mayanpas"
                target="_blank"
                rel="noopener noreferrer"
                class="prjButton desativado"
                id="saibaMais"
              >
                <img src={saibaMais} alt="setaIcon" id="saibaMaisIcon" />
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;

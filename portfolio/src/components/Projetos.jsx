import imgProjeto1 from '../assets/Cadastro de pacientes 1.jpg';
import imgProjeto2 from '../assets/bonbonetto.jpg';
import imgProjeto3 from '../assets/painelVendas.jpg';

import gitHub from '../assets/github.svg';
import saibaMais from '../assets/setaDireita.svg';

function Projetos() {
  return (
    <section class="card " id="cardProjetos" data-aos="fade-up" data-aos-delay="30">
      <h2 class="cardTitle">Projetos</h2>

      <p>
        Uma seleção dos meus trabalhos recentes, que demonstram diversas
        tecnologias e abordagens para a resolução de problemas.
      </p>
      <div id="prjMicrocards">
        {/* <!-- PROJETO 1 --> */}

        <div class="microCard" id="prjMicrocard">
          <div class="prjContent">
            <img
              src={imgProjeto1}
              alt="imgProjeto1"
              class="prjImage"
            />
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
              <img
                src={saibaMais}
                alt="setaIcon"
                id="saibaMaisIcon"
              />
              Saiba Mais
            </a>
          </div>
        </div>

        {/* <!-- PROJETO 2 --> */}

        <div class="microCard" id="prjMicrocard">
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
              <img
                src={saibaMais}
                alt="setaIcon"
                id="saibaMaisIcon"
              />
              Saiba Mais
            </a>
          </div>
        </div>

        {/* <!-- PROJETO 3 --> */}

        <div class="microCard" id="prjMicrocard">
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
              <img
                src={saibaMais}
                alt="setaIcon"
                id="saibaMaisIcon"
              />
              Saiba Mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;

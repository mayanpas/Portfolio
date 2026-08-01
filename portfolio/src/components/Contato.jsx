import "../css/Contato.css";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Contato() {
  return (
    <section id="contatoSection">
      <div className="sectionContent" id="contatoContent">
        <div className="sectionText" id="contatoText" data-aos="fade-up">
          <h2>Contato</h2>
          <p>
            <span>Estou disponível</span> para novas oportunidades e projetos freelances.
            Envie uma mensagem pelo e-mail ou me mande um oi nas redes sociais!
          </p>
        </div>
        <div className="contatoButtons" data-aos="fade-up">
          <a
            href="mailto:mayanpas0710@gmail.com?subject=Contato do Site&body=Olá, gostaria de falar sobre..."
            className="contatoButton"
          >
            <BiLogoGmail />
          </a>
          <a
            href="https://github.com/mayanpas"
            target="_blank"
            className="contatoButton"
          >
            <BiLogoGithub />
          </a>
          <a
            href="https://www.instagram.com/mayanpas"
            target="_blank"
            className="contatoButton"
          >
            <BiLogoInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/mayanpatrick/"
            target="_blank"
            className="contatoButton"
          >
            <BiLogoLinkedinSquare />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;

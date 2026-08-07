import "../css/Contato.css";
import {
  BiLogoGmail,
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

function Contato() {
  return (
    <section id="contatoSection" >
      <div className="sectionContent" id="contatoContent">
        <div className="sectionText" id="contatoText" data-aos="fade">
          <h2>Contato</h2>
          <p>
            <span className="textHighlight">Estou disponível</span> para novas oportunidades e projetos freelances.
            Envie uma mensagem pelo e-mail ou me mande um oi nas redes sociais!
          </p>
        </div>
        
        <div className="contatoButtons" data-aos="fade">
          <a
            href="mailto:mayanpas0710@gmail.com?subject=Contato do Site&body=Olá, gostaria de falar sobre..."
            className="contatoButton"
            aria-label="Enviar e-mail para Mayan"
          >
            <BiLogoGmail aria-hidden="true" />
          </a>
          
          <a
            href="https://github.com/mayanpas"
            target="_blank"
            rel="noopener noreferrer"
            className="contatoButton"
            aria-label="Acessar perfil do GitHub"
          >
            <BiLogoGithub aria-hidden="true" />
          </a>
          
          <a
            href="https://www.instagram.com/mayanpas"
            target="_blank"
            rel="noopener noreferrer"
            className="contatoButton"
            aria-label="Acessar perfil do Instagram"
          >
            <BiLogoInstagram aria-hidden="true" />
          </a>
          
          <a
            href="https://www.linkedin.com/in/mayanpatrick/"
            target="_blank"
            rel="noopener noreferrer"
            className="contatoButton"
            aria-label="Acessar perfil do LinkedIn"
          >
            <BiLogoLinkedinSquare aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
import Email from "../assets/mail.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Localizacao from "../assets/localization.svg";
import React from "react";
import { useIsMobile } from "../hooks/useIsMobile";

function FaleComigo() {
    const isMobile = useIsMobile();
  return (
    <section className="superSection" id="sectionFaleComigo">
      <div className="superTitleContainer" id="FaleComigoSuperTitle" data-aos={isMobile ? "fade-up" : "fade"}>
        <h1 id="FaleComigoTitle">
          <span>fale comigo</span>
        </h1>
        <p>
          Tem algum projeto em mente ou quer colaborar? Adoraria saber mais
          sobre você!
        </p>
      </div>
      <div className="" id="cardContato" data-aos="fade-up">
        <div id="contactMicroCards">
          <a
            href="mailto:mayanpas0710@gmail.com?subject=Contato do Site&body=Olá, gostaria de falar sobre..."
            className="microCard mail"
            id="contactMicroCard"
          >
            <img src={Email} alt="mailIcon" />

            <div className="contactMicroCardText">
              <h2 className="contactMicroCardTitle">mayanpas0710@gmail.com</h2>
              <p>E-mail</p>
            </div>
          </a>

          <a
            href="https://www.instagram.com/mayanpas"
            className="microCard"
            id="contactMicroCard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagramIcon" />
            <div className="contactMicroCardText">
              <h2 className="contactMicroCardTitle">@mayanpas</h2>
              <p>Instagram</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/mayanpatrick/"
            className="microCard"
            id="contactMicroCard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Linkedin} alt="linkedinIcon" />
            <div className="contactMicroCardText">
              <h2 className="contactMicroCardTitle">Mayan Patrick</h2>
              <p>Linkedin</p>
            </div>
          </a>

          <a
            href="https://github.com/mayanpas"
            className="microCard"
            id="contactMicroCard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="gitHubIcon" />
            <div className="contactMicroCardText">
              <h2 className="contactMicroCardTitle">mayanpas</h2>
              <p>GitHub</p>
            </div>
          </a>

          <a
            href="https://pt.wikipedia.org/wiki/Ipatinga"
            target="_blank"
            rel="noopener noreferrer"
            className="microCard"
            id="contactMicroCard"
          >
            <img src={Localizacao} alt="locationIcon" />

            <div className="contactMicroCardText">
              <h2 className="contactMicroCardTitle">Ipatinga - MG</h2>
              <p>Localização</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaleComigo;

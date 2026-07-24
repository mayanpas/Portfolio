import Email from "../assets/mail.svg";
import Instagram from "../assets/instagram.svg";
import Linkedin from "../assets/linkedin.svg";
import GitHub from "../assets/github.svg";
import Localizacao from "../assets/localization.svg";

function FaleComigo() {
  return (
    // AQUI ESTÁ O SEGREDO: Adicione o atributo data-aos
    // Você pode adicionar um delay sequencial para cada card entrar um de cada vez
    <section
      className="card"
      id="cardContato"
      data-aos="fade-up"
      data-aos-delay="40"
    >
      <h2 className="cardTitle">Fale comigo</h2>
      <div id="firstContactContent">
        <p>
          Tem algum projeto em mente ou quer colaborar? Adoraria saber mais
          sobre você!
        </p>
        <div id="contactMicroCards">
          <a
            href="mailto:mayanpas0710@gmail.com?subject=Contato do Site&body=Olá, gostaria de falar sobre..."
            className="microCard"
            id="contactMicroCard"
          >
            <img src={Email} alt="mailIcon" />

            <div className="contactMicroCardText">
              <h3 className="contactMicroCardTitle">mayanpas0710@gmail.com</h3>
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
              <h3 className="contactMicroCardTitle">@mayanpas</h3>
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
              <h3 className="contactMicroCardTitle">Mayan Patrick</h3>
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
              <h3 className="contactMicroCardTitle">mayanpas</h3>
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
              <h3 className="contactMicroCardTitle">Ipatinga - MG</h3>
              <p>Localização</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FaleComigo;

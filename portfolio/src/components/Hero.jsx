import "../css/Hero.css";

function Hero() {
  return (
    <section id="heroSection">
      <div className="sectionContent" id="heroContent" data-aos="fade-up">
        <div className="heroText">
          <span className="greeting">Prazer,</span>
          <h1>
            Mayan <br />
            Patrick
          </h1>
          <p className="subtitle">Engenheiro de Software</p>
        </div>

        <div
          id="heroPhoto"
          role="img"
          aria-label="Foto de Mayan Patrick"
        />
      </div>
    </section>
  );
}

export default Hero;
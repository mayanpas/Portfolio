import "../css/Hero.css";

function Hero() {
  return (
    <section id="heroSection">
      <div className="sectionContent" id="heroContent" data-aos="fade-up">
        <div className="heroText">
          <span className="greeting" data-aos="fade-up">
            Prazer,
          </span>
          <h1 data-aos="fade-up" data-aos-delay={50}>
            Mayan
          </h1>
          <h1 data-aos="fade-up" data-aos-delay={100}>
            Patrick
          </h1>
          <p className="subtitle" data-aos="fade-up" data-aos-delay={150}>
            Engenheiro de Software
          </p>
        </div>

        <div
          className="photo"
          id="heroPhoto"
          role="img"
          aria-label="Foto de Mayan Patrick"
        />
      </div>
    </section>
  );
}

export default Hero;

import "../css/Hero.css";

function Hero() {
  return (
    <section id="heroSection">
      <div className="sectionContent" id="heroContent" data-aos="fade-up">
        <h1>
          <span id="prazer">Prazer,</span>
          <br />
          <span id="mayan">mayan</span>
          <br />
          <span id="patrick">patrick</span>
          <br />
          <span id="subtitulo">engenheiro de software</span>
        </h1>
        <div id="heroPhoto"></div>
      </div>
    </section>
  );
}

export default Hero;

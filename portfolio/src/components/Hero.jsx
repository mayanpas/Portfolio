import "../css/Hero.css";

function Hero() {
  return (
    <section id="heroSection" data-aos="fade-up">
      <div className="sectionContent" id="heroContent">
        <h1>
          <span id="prazer">Prazer,</span><br />
          <span id="mayan">mayan</span><br /><span id="patrick">patrick</span><br /><span id="subtitulo">engenheiro de software</span>
        </h1>
        <div id="heroPhoto"></div>
      </div>
    </section>
  );
}

export default Hero;

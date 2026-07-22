import downloadFile from "../assets/downloadFile.svg";

function Hero() {
  return (
    <div
      id="mainCard"
      className=""
      // AQUI ESTÁ O SEGREDO: Adicione o atributo data-aos
      // Você pode adicionar um delay sequencial para cada card entrar um de cada vez
      data-aos="fade-up" // Animação de fade subindo
      data-aos-delay="" // Atraso aumenta para cada card (0ms, 150ms, 300ms...)
    >
      <div id="titleContainer">
        <h1>
          Mayan <br />
          <span id="patrick">Patrick</span>
        </h1>
        <p id="my-info">
          <strong>Engenheiro de Software & Técnico em T.I.</strong>
          <br />
          Desenvolvendo aplicações focadas na experiência do usuário.
          <br />
          Transformando código em impacto real.
        </p>
      </div>

      <div id="fcButtons">
        <div className="fcButtonDiv">
          <a
            href="/files/Currículo Mayan Patrick.pdf"
            target="_blank"
            rel="noopener noreferrer"
            id="curriculo"
          >
            <img src={downloadFile} alt="downloadIcon" id="curriculoIcon" />
            Currículo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;

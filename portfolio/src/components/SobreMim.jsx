import desktopTower from '../assets/DesktopTower.svg';
import code from '../assets/code.svg';
import uiDesign from '../assets/uiDesign.svg';
import book from '../assets/Book.svg';

function SobreMim() {
  return (
    <section className="card" id="cardSobreMim" data-aos="fade-up" data-aos-delay="10">
      <h2 className="cardTitle">Sobre mim</h2>
      <div id="sobreContent">
        <div id="sobreMim">
          <div id="profilePhoto"></div>
          <p id="txtSobreMim1">
            Engenheiro de Software Júnior | Analista de Suporte N1 |
            Desenvolvedor Web Front-End
            <br />
            <br />
            Apaixonado por tecnologia e estudante de Engenharia de Software (5º
            período - UNILESTE). Combino uma base técnica sólida adquirida em
            suporte especializado e infraestrutura com habilidades avançadas em
            desenvolvimento de software.
            <br />
            <br />
          </p>
          <ul id="lista">
            <li>Stack Técnica: Java, React.js, JavaScript, HTML5, CSS3.</li>
            <li>Dados e Versão: SQL, MySQL, Git e GitHub.</li>
            <li>
              Diferencial: Experiência prática com arquitetura de sistemas,
              suporte técnico e visão de produto, garantindo um desenvolvimento
              mais consciente e centrado na performance.
            </li>
          </ul>
          <br />
          <p id="txtSobreMim2">
            Busco oportunidades como desenvolvedor onde possa aplicar meu
            pensamento analítico de engenharia para construir aplicações
            resilientes e impactantes.
          </p>
        </div>
      </div>

      <div id="experiencia">
        <div className="microCard" id="expMicroCard">
          <img src={desktopTower} alt="desktopIcon" />
          <h3>2+ Anos de experiência</h3>
          <p>Como profissional de T.I.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={code} alt="codeIcon" />
          <h3>1 ano de experiência</h3>
          <p>Em desenvolvimeto.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={uiDesign} alt="squaresIcon" />
          <h3>2+ Anos de experiência</h3>
          <p>Em design de UI.</p>
        </div>
        <div className="microCard" id="expMicroCard">
          <img src={book} alt="bookIcon" />
          <h3>Formação superior</h3>
          <p>5º período em Engenharia de Software na UNILESTE.</p>
        </div>
      </div>
    </section>
  );
}

export default SobreMim;

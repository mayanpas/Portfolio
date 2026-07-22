import HTML5 from '../assets/html5.svg';
import CSS3 from '../assets/css3.svg';
import JavaScript from '../assets/javaScript.svg';
import NodeJS from '../assets/nodeJs.svg';
import ReactJS from '../assets/reactJs.svg';
import Java from '../assets/java.svg';
import MySQL from '../assets/mySqlBlue.svg';
import Git from '../assets/git.svg';
import GitHub from '../assets/github.svg';
import Figma from '../assets/figma.svg';
import Illustrator from '../assets/adobeIllustrator.svg';

function Habilidades() {
  return (
    <div className="card" id="cardHabilidades" data-aos="fade-up" data-aos-delay="20">
      <h2 className="cardTitle">Habilidades</h2>
      <p className="info">
        Um conjunto de ferramentas completo para criar aplicações modernas e
        escaláveis.
      </p>
      <div className="habMicroCards">
        <div className="microCard" id="habMicroCard">
          <h3>Frontend</h3>
          <div className="habButtons">
            <div className="habButton">
              <img src={HTML5} alt="html5Icon" /> HTML
            </div>
            <div className="habButton">
              <img src={CSS3} alt="css3Icon" /> CSS
            </div>
            <div className="habButton">
              <img src={JavaScript} alt="jsIcon" /> JavaScript
            </div>
            <div className="habButton">
              <img src={NodeJS} alt="nodeJsIcon" /> NodeJS
            </div>
            <div className="habButton">
              <img src={ReactJS} alt="reactJsIcon" /> React
            </div>
          </div>
        </div>
        <div className="microCard" id="habMicroCard">
          <h3>Backend</h3>
          <div className="habButtons">
            <div className="habButton">
              <img src={Java} alt="javaIcon" /> Java
            </div>
            <div className="habButton">
              <img src={MySQL} alt="mySqlIcon" /> MySQL
            </div>
          </div>
        </div>
        <div className="microCard" id="habMicroCard">
          <h3>Ferramentas & Outros</h3>
          <div className="habButtons">
            <div className="habButton">
              <img src={Git} alt="giticon" /> Git
            </div>
            <div className="habButton">
              <img src={GitHub} alt="gitHubIcon" /> GitHub
            </div>
          </div>
        </div>
        <div className="microCard" id="habMicroCard">
          <h3>Design</h3>
          <div className="habButtons">
            <div className="habButton">
              <img src={Figma} alt="figmaIcon" />
              Figma
            </div>
            <div className="habButton">
              <img src={Illustrator} alt="illustratorIcon" />
              Illustrator
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;

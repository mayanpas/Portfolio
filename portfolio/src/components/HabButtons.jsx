import HTML5 from "../assets/Habilidades/html5.svg";
import CSS3 from "../assets/Habilidades/css3.svg";
import JavaScript from "../assets/Habilidades/javaScript.svg";
import NodeJS from "../assets/Habilidades/nodeJs.svg";
import ReactJS from "../assets/Habilidades/react.svg";
import Java from "../assets/Habilidades/java.svg";
import MySQL from "../assets/Habilidades/mySqlBlue.svg";
import Git from "../assets/Habilidades/git.svg";
import GitHub from "../assets/Habilidades/github.svg";
import Figma from "../assets/Habilidades/figma.svg";
import Vite from "../assets/Habilidades/vite.svg";
import "../css/Habilidades.css";

// Dicionário com os dados associados a cada ID
const habilidadesData = {
  html5: { label: "HTML 5", icon: HTML5 },
  css3: { label: "CSS 3", icon: CSS3 },
  javaScript: { label: "JavaScript", icon: JavaScript },
  sql: { label: "SQL", icon: MySQL },
  node: { label: "Node", icon: NodeJS },
  react: { label: "React", icon: ReactJS },
  java: { label: "Java", icon: Java },
  mySql: { label: "MySQL", icon: MySQL },
  git: { label: "Git", icon: Git },
  gitHub: { label: "GitHub", icon: GitHub },
  vite: { label: "Vite", icon: Vite },
  figma: { label: "Figma", icon: Figma },
};

export default function HabButtons({ habs = [] }) {
  // Se passar um array de IDs (ex: ['html5', 'css3']), renderiza só eles.
  // Se não passar nada, renderiza todos os cadastrados.
  const listaParaExibir = habs.length > 0 ? habs : Object.keys(habilidadesData);

  return (
    <div className="habButtonsCollection">
      {listaParaExibir.map((id) => {
        const item = habilidadesData[id];

        // Se o id não existir no dicionário, ignora
        if (!item) return null;

        return (
          <div key={id} className="habButton" id={id}>
            <img src={item.icon} alt={item.label} />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import "../css/Habilidades.css";

import {
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoJava,
  BiLogoGit,
  BiLogoGithub,
  BiLogoFigma,
} from "react-icons/bi";
import { SiMysql, SiVite } from "react-icons/si";

const habilidadesData = {
  html5: { label: "HTML 5", Icon: BiLogoHtml5, color: "#E34F26" },
  css3: { label: "CSS 3", Icon: BiLogoCss3, color: "#1572B6" },
  javaScript: { label: "JavaScript", Icon: BiLogoJavascript, color: "#F7DF1E" },
  sql: { label: "SQL", Icon: SiMysql, color: "#4479A1" },
  node: { label: "Node", Icon: BiLogoNodejs, color: "#339933" },
  react: { label: "React", Icon: BiLogoReact, color: "#61DAFB" },
  java: { label: "Java", Icon: BiLogoJava, color: "#007396" },
  mySql: { label: "MySQL", Icon: SiMysql, color: "#4479A1" },
  git: { label: "Git", Icon: BiLogoGit, color: "#F05032" },
  gitHub: { label: "GitHub", Icon: BiLogoGithub, color: "#181717" },
  vite: { label: "Vite", Icon: SiVite, color: "#646CFF" },
  figma: { label: "Figma", Icon: BiLogoFigma, color: "#F24E1E" },
};

export default function HabButtons({ habs = [] }) {
  const listaParaExibir = habs.length > 0 ? habs : Object.keys(habilidadesData);

  return (
    <div className="habButtonsCollection">
      {listaParaExibir.map((id) => {
        const item = habilidadesData[id];

        if (!item) return null;

        const IconComponent = item.Icon;

        return (
          <div key={id} className="habButton" id={id}>
            <IconComponent className="habIcon" style={{ color: item.color }} />
            {item.label}
          </div>
        );
      })}
    </div>
  );
}
import "../css/Hero.css";
import Button from "../components/Buttons/Button2";
import { useTheme } from "../hooks/useTheme";
import { BiMoon, BiSun, BiMenu, BiX } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  return (
    <section id="heroSection" data-aos="fade-up">
      <div className="sectionContent" id="heroContent">
        <Button
          acao={toggleTheme}
          icon={theme === "dark" ? <BiSun size={20} /> : <BiMoon size={20} />}
          id="headerButton"
        />
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

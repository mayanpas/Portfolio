import "../css/Sobre.css";
import Button1 from "./Buttons/Button1";
import { BiFile } from "react-icons/bi";

function Sobre() {
  return (
    <section id="sobreSection">
      <div className="sectionContent" id="sobreContent" >
        <div
          className="photo"
          id="sobrePhoto"
          role="img"
          aria-label="Foto sobre mim"
        />

        <div className="sectionText" id="sobreText" data-aos="fade-up">
          <h2 className="sectionTitle">Sobre mim</h2>
          <p>
            <span className="textHighlight">Apaixonado por tecnologia</span> e
            estudante de Engenharia de Software, desenvolvo aplicações focadas
            na experiência do usuário, onde eu possa aplicar meu pensamento
            analítico de engenharia para construir aplicações resilientes e
            impactantes, transformando código em impacto real.
          </p>

          <Button1
            icon={<BiFile size={20}/>}
            label="Currículo"
            acao="/files/CurriculoMayanPatrick.pdf"
            id="sobreButton"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;

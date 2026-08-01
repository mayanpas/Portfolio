import "../css/Sobre.css";
import Button1 from "./Buttons/Button1";

function Sobre() {
  return (
    <section id="sobreSection">
      <div className="sectionContent" id="sobreContent" >
        <div id="sobrePhoto" ></div>
        <div className="sectionText" id="sobreText" data-aos="fade" data-aos-duration="800">
          <h2 className="sectionTitle">Sobre mim</h2>
            <p>
              <span className="textHighlight">Apaixonado por tecnologia</span> e
              estudante de Engenharia de Software, Desenvolvo aplicações focadas
              na experiência do usuário, onde eu possa aplicar meu pensamento
              analítico de engenharia para construir aplicações resilientes e
              impactantes transformando o código em impacto real.
            </p>
          <Button1 label="Currículo" acao="/files/Currículo Mayan Patrick.pdf" id="sobreButton"/>
        </div>
      </div>
    </section>
  );
}

export default Sobre;

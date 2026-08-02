import "../css/Sobre.css";
import Button1 from "./Buttons/Button1";

function Sobre() {
  return (
    <section id="sobreSection">
      <div 
        className="sectionContent" 
        id="sobreContent"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div 
          id="sobrePhoto" 
          role="img" 
          aria-label="Foto sobre mim"
        />
        
        <div className="sectionText" id="sobreText">
          <h2 className="sectionTitle">Sobre mim</h2>
          <p>
            <span className="textHighlight">Apaixonado por tecnologia</span> e
            estudante de Engenharia de Software, desenvolvo aplicações focadas
            na experiência do usuário, onde eu possa aplicar meu pensamento
            analítico de engenharia para construir aplicações resilientes e
            impactantes, transformando código em impacto real.
          </p>
          
          <Button1 
            label="Currículo" 
            acao="/files/curriculo-mayan-patrick.pdf" 
            id="sobreButton"
          />
        </div>
      </div>
    </section>
  );
}

export default Sobre;
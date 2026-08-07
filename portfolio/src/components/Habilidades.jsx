import { BiCodeBlock, BiCoinStack, BiStar, BiHive } from "react-icons/bi";
import HabButtons from "./HabButtons";

function Habilidades() {
  return (
    <section id="habSection">
      <div className="sectionContent" id="habContent">
        <div className="sectionText" id="habText" data-aos="fade">
          <h2>Habilidades</h2>
          <p>
            Soluções completas e bem estruturadas, integrando Front-end,
            Back-end e Banco de Dados. Trabalho com as{" "}
            <span>principais linguagens e ferramentas do mercado</span> como
            JavaScript, Java, MySQL e Git para garantir código limpo, interfaces
            modernas e alta performance em todas as camadas do sistema.
          </p>
        </div>

        <div className="habCards" data-aos="fade-up">
          <div className="part1">
            <div className="habCard" id="HB1">
              <div className="habCardIcon">
                <BiCodeBlock />
              </div>
              <h3>1. Linguagens</h3>
              <div className="habButtons">
                <HabButtons
                  habs={["html5", "css3", "java", "javaScript", "sql"]}
                />
              </div>
            </div>

            <div className="habCard" id="HB2">
              <div className="habCardIcon">
                <BiCoinStack />
              </div>
              <h3>2. Frameworks</h3>
              <div className="habButtons">
                <HabButtons habs={["node", "react"]} />
              </div>
            </div>
          </div>

          <div className="part2">
            <div className="habCard" id="HB3">
              <div className="habCardIcon">
                <BiHive />
              </div>
              <h3>3. Tecnologias</h3>
              <div className="habButtons">
                <HabButtons habs={["gitHub", "mySql"]} />
              </div>
            </div>

            <div className="habCard" id="HB4">
              <div className="habCardIcon">
                <BiStar />
              </div>
              <h3>4. Outros</h3>
              <div className="habButtons">
                <HabButtons habs={["figma"]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
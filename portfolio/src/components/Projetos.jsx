import "../css/Projetos.css";
import PrjCard from "../components/CardProjeto";
import { projetosData } from "../hooks/projetosData";

function Projetos() {
  return (
    <section id="prjSection">
      <div className="sectionContent" id="prjContent">
        <div className="sectionText" id="prjText" data-aos="fade-up">
          <h2>Projetos</h2>
          <p>
            Uma seleção dos meus trabalhos recentes, que demonstram diversas
            tecnologias e abordagens para a resolução de problemas.
          </p>
        </div>
        
        <div className="prjCards">
          {projetosData.map((projeto, index) => (
            <PrjCard
              key={projeto.id || index} // Chave única e estável
              {...projeto}              // Passa todas as propriedades limpamente
              delay={index * 100}       // Incremental: 0ms, 100ms, 200ms...
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
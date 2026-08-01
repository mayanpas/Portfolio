import "../css/Projetos.css";
import PrjCard from "../components/CardProjeto";
import { projetosData } from "../hooks/projetosData"; // Importa os dados aqui

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
              key={index}
              id={projeto.id}
              image={projeto.image}
              type={projeto.type}
              title={projeto.title}
              description={projeto.description}
              habilities={projeto.habilities}
              photos={projeto.photos}
              github={projeto.github}
              liveDemo={projeto.liveDemo}
              delay={index * 100} // Card 0 = 0ms | Card 1 = 200ms | Card 2 = 400ms...
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;

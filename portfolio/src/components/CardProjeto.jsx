import "../css/Projetos.css";
import { Link } from "react-router-dom";

export default function CardProjeto({
  id,
  image,
  type,
  title,
  description,
  delay = 0, // Valor default para evitar 'undefined' no AOS
}) {

  return (
    <article className="cardProjeto" data-aos="fade-up" data-aos-delay={delay}>
      <div
        className="prjImage"
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={`Capa do projeto ${title}`}
      />

      <div className="cardProjetoContent">
        <span className="type">{type}</span>
        <h3>{title}</h3>
        <p className="description">{description}</p>
      </div>
      <Link to={`/projeto/${id}`} className="button1">
        Saiba Mais
      </Link>
    </article>
  );
}

import "../css/Projetos.css";
import { Link, useNavigate } from "react-router-dom";
import { useLenis } from "lenis/react"; // ou 'lenis/react' dependendo da sua versão
import Button from "../components/Buttons/Button1";

export default function CardProjeto({
  id,
  image,
  type,
  title,
  description,
  delay = 0,
}) {
  const navigate = useNavigate();
  const lenis = useLenis(); // Instância do Lenis

  const lidarComNavegacao = () => {
    navigate(`/projeto/${id}`);
  };

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
      <Link onClick={lidarComNavegacao} className="button1">
        Saiba Mais
      </Link>
    </article>
  );
}

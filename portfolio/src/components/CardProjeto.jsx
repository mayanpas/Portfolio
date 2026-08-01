import "../css/Projetos.css";
import { Link } from "react-router-dom";

import Button from "../components/Buttons/Button1";

export default function CardProjeto({
  id,
  image,
  type,
  title,
  description,
  delay,
}) {
  return (
    <div className="cardProjeto" data-aos="fade-up" data-aos-delay={delay}>
      <div
        className="prjImage"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <p className="type">{type}</p>
      <h3>{title}</h3>
      <p className="description">{description}</p>
      {/* Redireciona para a nova rota dinamicamente */}
      <Link
        to={`/projeto/${id}`}
        className="button1"
        onClick={() => {
          if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
          window.scrollTo(0, 0);
        }}
      >
        Saiba Mais
      </Link>
    </div>
  );
}

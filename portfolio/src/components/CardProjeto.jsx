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
  // const handleScrollToTop = () => {
  //   // 👇 ADICIONE ESTE BLOCO AQUI
  //   useEffect(() => {
  //     window.scrollTo({
  //       top: 0,
  //       left: 0,
  //       behavior: "instant", // "instant" faz ir pro topo de uma vez, sem animação feia de rolagem
  //     });
  //   }, [id]);
  //   // Tratamento seguro para a instância do Lenis
  //   // if (window.lenis) {
  //   //   window.lenis.scrollTo(0, { immediate: true });
  //   // } else {
  //   //   // Força a rolagem suave para o topo caso o Lenis não esteja ativado
  //   //   indow.scrollTo(0, 0);

  //   // }
  // };

  return (
    <article className="cardProjeto">
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

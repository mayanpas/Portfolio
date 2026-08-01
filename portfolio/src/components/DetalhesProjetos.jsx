import React from "react";
import { useParams, Link } from "react-router-dom";
import { projetosData } from "../hooks/projetosData";
import "../css/DetalhesProjetos.css";
import HabButtons from "../components/HabButtons";
import Button from "../components/Buttons/Button1";
import { BiArrowBack, BiLogoGithub, BiExit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function DetalhesProjeto() {
  const { id } = useParams(); // Pega o id/slug vindo da URL

  // 3. Encontra o objeto do projeto correspondente
  const projeto = projetosData.find((item) => item.id === id);

  // Tratamento caso o id da URL não exista no array
  if (!projeto) {
    return (
      <section id="prjDetailsSection">
        <h2>Projeto não encontrado</h2>
        <Link to="/">
          <Button icon={<BiArrowBack />} label="Voltar" />
        </Link>
      </section>
    );
  }

  // Dentro do seu componente DetalhesProjetos:
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleGoBack = () => {
    // 1. Ativa a classe de animação de saída
    setIsExiting(true);

    // 2. Aguarda o tempo da animação (ex: 300ms) antes de mudar de rota
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  return (
    <section
      id="prjDetailsSection"
      className={`project-detail-container ${isExiting ? "page-exit" : "page-enter"}`}
    >
      <div
        className="sectionContent"
        id="prjDetailContent"
        data-aos="fade-right"
      >
        <Link to="/#prjSection" className="backButton">
          <Button icon={<BiArrowBack />} label="Voltar" />
        </Link>
        <div className="sectionText" id="prjDetailText">
          <h2>{projeto.title}</h2>
          <p>{projeto.description}</p>
          <div className="prjHabilities">
            <HabButtons habs={projeto.habilities} />
          </div>
        </div>
        <div className="prjHabs"></div>
        <div className="prjPhotos">
          {projeto.photos?.map((photo, index) => (
            <div key={index} className="prjPhoto">
              <img
                src={photo}
                alt={`Foto ${index + 1} do projeto ${projeto.title}`}
              />
            </div>
          ))}
        </div>
        <div className="prjButtons" data-aos="fade">
          <Button
            acao={projeto.github}
            icon={<BiLogoGithub size={20} />}
            label="GitHub"
            id="github"
          />
          <Button
            acao={projeto.liveDemo}
            icon={<BiExit size={20} />}
            label="Live demo"
            id="liveDemo"
          />
        </div>
      </div>
    </section>
  );
}

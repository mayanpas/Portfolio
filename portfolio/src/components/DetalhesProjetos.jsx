import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projetosData } from "../hooks/projetosData";
import "../css/DetalhesProjetos.css";
import HabButtons from "../components/HabButtons";
import Button from "../components/Buttons/Button1";
import { BiArrowBack, BiLogoGithub, BiExit } from "react-icons/bi";

export default function DetalhesProjeto() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const projeto = projetosData.find((item) => item.id === id);

  if (!projeto) {
    return (
      <section id="prjDetailsSection">
        <h2>Projeto não encontrado</h2>
        <Link to="/#prjSection">
          <Button icon={<BiArrowBack />} label="Voltar" />
        </Link>
      </section>
    );

    // Força o reset absoluto do scroll para o topo no carregamento da página
    useEffect(() => {
      // 1. Desativa a restauração automática de scroll do navegador
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      // 2. Joga instantaneamente para o topo (sem animação) assim que a página abre
      window.scrollTo(0, 0);

      // 3. Se o Lenis estiver ativo, garante que ele também inicie no topo
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      }
    }, []);
  }

  // Redireciona diretamente para a seção de projetos na Home (#prjSection)
  // const handleGoBack = () => {
  //   setIsExiting(true);
  //   setTimeout(() => {
  //     navigate("/#prjSection");
  //   }, 300);
  // };

  return (
    <section
      id="prjDetailsSection"
      className={`project-detail-container ${
        isExiting ? "page-exit" : "page-enter"
      }`}
    >
      <div
        className="sectionContent"
        id="prjDetailContent"
        data-aos="fade-right"
      >
        <div className="backButton">
          <Link to="/#prjSection">
            <Button icon={<BiArrowBack />} label="Voltar" id="backButton" />
          </Link>
        </div>

        <div className="sectionText" id="prjDetailText">
          <h2>{projeto.title}</h2>
          <p>{projeto.description}</p>
          <div className="prjHabilities">
            <HabButtons habs={projeto.habilities} />
          </div>
        </div>

        {projeto.photos && projeto.photos.length > 0 && (
          <div className="prjPhotos">
            {projeto.photos.map((photo, index) => (
              <div key={index} className="prjPhoto">
                <img
                  src={photo}
                  alt={`Foto ${index + 1} do projeto ${projeto.title}`}
                />
              </div>
            ))}
          </div>
        )}

        <div className="prjButtons" data-aos="fade">
          {projeto.github && (
            <a href={projeto.github} target="_blank" rel="noopener noreferrer">
              <Button
                icon={<BiLogoGithub size={20} />}
                label="GitHub"
                id="github"
              />
            </a>
          )}
          {projeto.liveDemo && (
            <a
              href={projeto.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                icon={<BiExit size={20} />}
                label="Live Demo"
                id="liveDemo"
              />
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

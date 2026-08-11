import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projetosData } from "../hooks/projetosData";
import "../css/DetalhesProjetos.css";
import HabButtons from "../components/HabButtons";
import Button from "../components/Buttons/Button1";
import { BiChevronLeft, BiLogoGithub, BiExit } from "react-icons/bi";

export default function DetalhesProjeto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  // Dentro do componente da página do projeto:
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projeto = projetosData.find((item) => item.id === id);

  if (!projeto) {
    return (
      <section id="prjDetailsSection">
        <Button
          icon={<BiChevronLeft size={20} />}
          label="Voltar"
          id="backButton"
          acao={navigate(-1)}
        />
        <h2>Projeto não encontrado</h2>
      </section>
    );
  }

  return (
    <section id="prjDetailsSection">
      <div className="sectionContent" id="prjDetailContent" data-aos="fade-up">
        <div className="sectionText" id="prjDetailText">
          <h2>
            <div className="backButton">
              <Link to={navigate(-1)} className="button1" id="backButton">
                <BiChevronLeft size={30} />
              </Link>
            </div>
            {projeto.title}
          </h2>
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

        <div className="prjButtons">
          {projeto.github && (
            <Button
              acao={projeto.github}
              icon={<BiLogoGithub size={20} />}
              label="GitHub"
              id="github"
            />
          )}

          {projeto.liveDemo && (
            <Button
              acao={projeto.liveDemo}
              icon={<BiExit size={20} />}
              label="Live Demo"
              id="liveDemo"
            />
          )}
        </div>
      </div>
    </section>
  );
}

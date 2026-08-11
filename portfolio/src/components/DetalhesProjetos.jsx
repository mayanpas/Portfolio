import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projetosData } from "../hooks/projetosData";
import "../css/DetalhesProjetos.css";
import HabButtons from "../components/HabButtons";
import Button from "../components/Buttons/Button1";
import { BiLeftArrowCircle, BiLogoGithub, BiExit } from "react-icons/bi";

export default function DetalhesProjeto() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-2);
  };

  const projeto = projetosData.find((item) => item.id === id);

  if (!projeto) {
    return (
      <section id="prjDetailsSection">
        <Button
          icon={<BiLeftArrowCircle />}
          label="Voltar"
          id="backButton"
          acao={handleVoltar}
        />
        <h2>Projeto não encontrado</h2>
      </section>
    );
  }

  return (
    <section id="prjDetailsSection" data-aos="fade-up">
      <div className="sectionContent" id="prjDetailContent">
        <div className="backButton">
          <Button
            icon={<BiLeftArrowCircle />}
            label="Voltar"
            id="backButton"
            acao={handleVoltar}
          />
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

        <div className="prjButtons">
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

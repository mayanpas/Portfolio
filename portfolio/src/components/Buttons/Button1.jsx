import React from "react";

export default function Button1({ id, acao, icon, label, ariaLabel }) {
  // Se "acao" for uma string (um link/URL), renderiza a tag <a>
  if (typeof acao === "string") {
    return (
      <a
        className="button1"
        id={id}
        href={acao}
        target="_blank"
        rel="noopener noreferrer" // 👈 Atributo de segurança essencial adicionado
        aria-label={ariaLabel}
      >
        {icon}
        {label}
      </a>
    );
  }

  // Se "acao" for uma função (um onClick), renderiza a tag <button>
  return (
    <button className="button1" id={id} onClick={acao} aria-label={ariaLabel}>
      {icon}
      {label}
    </button>
  );
}
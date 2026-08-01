// src/hooks/useTheme.js
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Verifica se já existe um tema salvo no LocalStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // 2. Se não houver, verifica a preferência do sistema operacional
    return window.matchMedia("(prefers-color-scheme: light)").matches
      ? "light"
      : "dark";
  });

  useEffect(() => {
    // Aplica o atributo 'data-theme' na tag <html> ou <body>
    document.documentElement.setAttribute("data-theme", theme);
    // Salva a escolha do usuário no LocalStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // 1. Pega as cores exatas definidas no seu App.css (#ffffff e #0c0c0c)
    const metaColor = nextTheme === "dark" ? "#0c0c0c" : "#ffffff";

    // 2. Atualiza a meta tag instantaneamente na DOM para o Safari/iOS ler no clique
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.name = "theme-color";
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", metaColor);

    // 3. Atualiza o estado da aplicação
    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}

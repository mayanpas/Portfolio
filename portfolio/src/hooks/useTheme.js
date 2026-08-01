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

  // Função para alternar entre 'dark' e 'light'
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";

    // 1. Define as cores exatas correspondentes aos seus temas
    const metaColor = nextTheme === "dark" ? "#162133" : "#b2cff8";

    // 2. Atualiza ou cria a meta tag theme-color no DOM
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.name = "theme-color";
      document.head.appendChild(metaTheme);
    }

    // 3. O 'PULO DO GATILHO' DO SAFARI:
    // Removemos momentaneamente o atributo e colocamos de volta via setTimeout.
    // Essa micro-quebra obriga o Safari do iOS a 'acordar' e repintar a Dynamic Island sem precisar de refresh.
    metaTheme.removeAttribute("content");

    setTimeout(() => {
      metaTheme.setAttribute("content", metaColor);
    }, 10);

    // 4. Prossegue com a troca normal do seu estado no React/CSS
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  return { theme, toggleTheme };
}

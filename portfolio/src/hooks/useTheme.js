// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // 1. Verifica se já existe um tema salvo no LocalStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    // 2. Se não houver, verifica a preferência do sistema operacional
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

useEffect(() => {
    // Aplica o atributo 'data-theme' na tag <html> ou <body>
    document.documentElement.setAttribute('data-theme', theme);
    // Salva a escolha do usuário no LocalStorage
    localStorage.setItem('theme', theme);

    // --- HACK EXTREMO PARA O SAFARI ---
    setTimeout(() => {
      const header = document.querySelector('header');
      if (header) {
        // Guarda como estava
        const displayAntigo = header.style.display;
        
        // Esconde o header sumariamente
        header.style.display = 'none';
        
        // Esta linha inútil obriga o navegador a processar a tela sem o header (Reflow)
        void header.offsetHeight; 
        
        // Devolve o header instantaneamente
        header.style.display = displayAntigo;
      }
    }, 50); // Atraso minúsculo para garantir que o CSS do novo tema já "chegou"

  }, [theme]);

  // Função para alternar entre 'dark' e 'light'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
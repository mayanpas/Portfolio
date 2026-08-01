// src/hooks/useTheme.js
import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    // Tratamento para SSR / ambiente de build
    if (typeof window === 'undefined') return 'dark';

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  // Função auxiliar para garantir a meta tag no <head>
  const updateMetaThemeColor = (currentTheme) => {
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    
    // Se a meta tag não existir no HTML, cria ela dinamicamente
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }

    // Define a cor exata do topo baseada no tema ativo
    // (Ajuste os hexadecimais #000000 e #ffffff para as cores exatas do seu layout)
    const color = currentTheme === 'dark' ? '#000000' : '#ffffff';
    metaTheme.setAttribute('content', color);
  };

  useEffect(() => {
    // Aplica no DOM e no localStorage
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    // Atualiza a meta tag do Safari
    updateMetaThemeColor(theme);
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    // ⚡ MUDANÇA CRÍTICA: Atualiza o topo IMEDIATAMENTE no evento do clique
    updateMetaThemeColor(nextTheme);

    setTheme(nextTheme);
  };

  return { theme, toggleTheme };
}
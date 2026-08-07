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

    // --- CÓDIGO NOVO PARA O SAFARI AQUI ---
    
    // Busca a tag meta theme-color no HTML
    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    
    // Se a tag não existir no index.html, cria ela dinamicamente
    if (!metaThemeColor) {
      metaThemeColor = document.createElement('meta');
      metaThemeColor.name = 'theme-color';
      document.head.appendChild(metaThemeColor);
    }
    
    // Define a cor baseada no tema atual (substitua pelas cores exatas do seu site)
    const corTemaEscuro = '#0c0c0c'; // Exemplo: cor do fundo escuro
    const corTemaClaro = '#ffffff';  // Exemplo: cor do fundo claro
    
    metaThemeColor.setAttribute('content', theme === 'dark' ? corTemaEscuro : corTemaClaro);
    
    // --------------------------------------

  }, [theme]); // Como o 'theme' está no array de dependências, isso roda sempre que o tema muda.

  // Função para alternar entre 'dark' e 'light'
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
}
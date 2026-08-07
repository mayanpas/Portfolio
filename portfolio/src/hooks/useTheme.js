// // src/hooks/useTheme.js
// import { useState, useEffect } from 'react';

// export function useTheme() {
//   const [theme, setTheme] = useState(() => {
//     // 1. Verifica se já existe um tema salvo no LocalStorage
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) return savedTheme;

//     // 2. Se não houver, verifica a preferência do sistema operacional
//     return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
//   });

//   useEffect(() => {
//     // Aplica o atributo 'data-theme' na tag <html> ou <body>
//     document.documentElement.setAttribute('data-theme', theme);
//     // Salva a escolha do usuário no LocalStorage
//     localStorage.setItem('theme', theme);
//   }, [theme]);

//   // Função para alternar entre 'dark' e 'light'
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
//   };

//   return { theme, toggleTheme };
// }
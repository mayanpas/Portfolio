const toggleTheme = () => {
  const nextTheme = theme === 'dark' ? 'light' : 'dark';

  // 1. Pega as cores exatas definidas no seu App.css (#ffffff e #0c0c0c)
  const metaColor = nextTheme === 'dark' ? '#0c0c0c' : '#ffffff';

  // 2. Atualiza a meta tag instantaneamente na DOM para o Safari/iOS ler no clique
  let metaTheme = document.querySelector('meta[name="theme-color"]');
  if (!metaTheme) {
    metaTheme = document.createElement('meta');
    metaTheme.name = 'theme-color';
    document.head.appendChild(metaTheme);
  }
  metaTheme.setAttribute('content', metaColor);

  // 3. Atualiza o estado da aplicação
  setTheme(nextTheme);
};
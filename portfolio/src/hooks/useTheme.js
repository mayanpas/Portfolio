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
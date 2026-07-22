import { useEffect } from 'react';

export function useScrollAnimation(classNameToObserve = '.hidden') {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Quando o elemento entra na tela, adiciona a classe para animar
          entry.target.classList.add('show');
        } else {
          // Quando o elemento sai da tela, remove a classe para poder animar de novo ao voltar
          entry.target.classList.remove('show');
        }
      });
    }, {
      threshold: 0.1 // Dispara quando 10% do elemento estiver visível
    });

    const elements = document.querySelectorAll(classNameToObserve);
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [classNameToObserve]);
}
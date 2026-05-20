const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Quando entra na tela
            entry.target.classList.add('show');
        } else {
            // Quando sai da tela (permite repetir a animação ao subir/descer)
            entry.target.classList.remove('show');
        }
    });
}, {
    // Ajuste o threshold para 0.2 para a animação começar 
    // apenas quando 20% do card estiver visível
    // threshold: 0.1 
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


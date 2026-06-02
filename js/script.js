// Efeito de blur no background ao rolar
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // Calcula o blur em pixels (0px até 20px)
  // A cada 100px de scroll, aumenta 1px de blur
  const blurValue = Math.min(scrollY / 20, 20);
  document.documentElement.style.setProperty("--blur-value", `${blurValue}px`);
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Quando entra na tela
        entry.target.classList.add("show");
      } else {
        // Quando sai da tela (permite repetir a animação ao subir/descer)
        entry.target.classList.remove("show");
      }
    });
  },
  {
    // Ajuste o threshold para 0.2 para a animação começar
    // apenas quando 20% do card estiver visível
    // threshold: 0.1
  },
);

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

// teste backgrounnd

document.getElementById("github").addEventListener("click", function (event) {
  event.preventDefault(); // Impede a navegação
  alert("Este link está desativado!");
});

const blurConfig = {
  maxScroll: 500,
  stepPixels: 120,
};

function updateBackgroundBlur() {
  const scrollY = Math.min(window.scrollY || window.pageYOffset, blurConfig.maxScroll);
  const steps = blurConfig.maxScroll / blurConfig.stepPixels;
  const opacity = Math.round((scrollY / blurConfig.maxScroll) * steps) / steps;

  document.documentElement.style.setProperty(
    '--blur-overlay-opacity',
    opacity.toFixed(.5)
  );
}

window.addEventListener('scroll', updateBackgroundBlur, { passive: true });
window.addEventListener('DOMContentLoaded', updateBackgroundBlur);
window.addEventListener('resize', updateBackgroundBlur);

// Animação de desvandecer dos cards
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

// bloquear botão github 
document.getElementById("github").addEventListener("click", function (event) {
  event.preventDefault(); // Impede a navegação
  alert("Este link está desativado!");
});
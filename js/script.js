// // Efeito de blur no background ao rolar
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   // Calcula o blur em pixels (0px até 20px)
//   // A cada 100px de scroll, aumenta 1px de blur
//   const blurValue = Math.min(scrollY / 20, 20);
//   document.documentElement.style.setProperty("--blur-value", `${blurValue}px`);
// });

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

// ========== Mudar Background-Image ao Rolar (com Blur Progressivo) ==========
const backgroundImageNormal = "../img/backgroundV5.jpg";
const backgroundImageBlur = "../img/backgroundV5Blur.jpg";

let lastScrollPercent = 0;
let isAnimating = false;

window.addEventListener("scroll", () => {
  if (isAnimating) return; // Evita recalcular enquanto está animando

  isAnimating = true;

  requestAnimationFrame(() => {
    // Calcula o percentual de scroll
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const scrollPercent = Math.min(scrolled / scrollHeight, 1);

    // Só atualiza se mudou significativamente (a cada ~5% de scroll)
    if (Math.abs(scrollPercent - lastScrollPercent) > 0.05) {
      lastScrollPercent = scrollPercent;

      // Determina qual imagem usar baseado no scroll
      // 0% = imagem normal, 100% = imagem com blur
      const image =
        scrollPercent < 0.2 ? backgroundImageNormal : backgroundImageBlur;

      document.documentElement.style.setProperty(
        "--bg-image",
        `url('${image}')`,
      );
    }

    isAnimating = false;
  });
});

// Efeito de blur no background ao rolar
// window.addEventListener("scroll", () => {
//   const scrollY = window.scrollY;
//   // Calcula o blur em pixels (0px até 20px)
//   // A cada 20px de scroll, aumenta 1px de blur
//   const imageValue = Math.min(scrollY / 20, 20);
//   document.documentElement.style.setProperty("--bgImageBlur", `${imageValue}%`);
// });

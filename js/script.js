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

const header = document.getElementById("header");
let lastScrollTop = window.scrollY || window.pageYOffset;
let suppressHeaderUntil = 0;
const hideThreshold = 12;

function showHeader() {
  header?.classList.remove("header-hidden");
}

function hideHeader() {
  header?.classList.add("header-hidden");
}

function toggleHeaderOnScroll() {
  if (!header) return;

  const currentScrollTop = window.scrollY || window.pageYOffset;
  const now = Date.now();
  const delta = currentScrollTop - lastScrollTop;

  if (now < suppressHeaderUntil) {
    lastScrollTop = currentScrollTop;
    return;
  }

  if (Math.abs(delta) < hideThreshold) {
    lastScrollTop = currentScrollTop;
    return;
  }

  if (currentScrollTop <= 0) {
    showHeader();
  } else if (delta > 0) {
    hideHeader();
  } else {
    showHeader();
  }

  lastScrollTop = currentScrollTop;
}

document.querySelectorAll(".headerLink").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const targetId = link.getAttribute("href")?.replace("#", "");
    const target = targetId ? document.getElementById(targetId) : null;

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    suppressHeaderUntil = Date.now() + 900;
    showHeader();
  });
});

window.addEventListener("scroll", toggleHeaderOnScroll, { passive: true });
window.addEventListener("touchstart", showHeader, { passive: true });
window.addEventListener("load", () => {
  showHeader();
  lastScrollTop = window.scrollY || window.pageYOffset;
});

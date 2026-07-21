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
let manualScrollTriggered = false;

function showHeader() {
  header?.classList.remove("header-hidden");
}

function hideHeader() {
  header?.classList.add("header-hidden");
}

function toggleHeaderOnScroll() {
  if (!header) return;

  const currentScrollTop = window.scrollY || window.pageYOffset;

  if (!manualScrollTriggered) {
    lastScrollTop = currentScrollTop;
    return;
  }

  if (currentScrollTop <= 0) {
    showHeader();
  } else if (currentScrollTop > lastScrollTop) {
    hideHeader();
  } else {
    showHeader();
  }

  lastScrollTop = currentScrollTop;
  manualScrollTriggered = false;
}

function markManualScroll() {
  manualScrollTriggered = true;
}

document.querySelectorAll(".headerLink").forEach((link) => {
  link.addEventListener("click", showHeader);
});

window.addEventListener("wheel", markManualScroll, { passive: true });
window.addEventListener("touchmove", markManualScroll, { passive: true });
window.addEventListener("keydown", (event) => {
  if (["ArrowDown", "PageDown", " ", "End"].includes(event.key)) {
    markManualScroll();
  }
});
window.addEventListener("scroll", toggleHeaderOnScroll, { passive: true });
window.addEventListener("load", () => {
  showHeader();
  lastScrollTop = window.scrollY || window.pageYOffset;
});

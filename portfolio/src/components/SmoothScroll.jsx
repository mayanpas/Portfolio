import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    // Detecta se o dispositivo é touch primário (sem suporte a hover preciso)
    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;

    // Se for touch, não inicializa o Lenis e mantém o scroll nativo da tela
    if (isTouchDevice) return;

    // Instância do Lenis apenas para Desktop / Mouse
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    return () => {
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Monitora as mudanças de rota
  useEffect(() => {
    // Se for uma navegação nova (clicou num projeto) e não for um link de âncora (#hash)
    if (navType === "PUSH" && !location.hash) {
      if (lenisRef.current) {
        // Cenário 1: Desktop (Lenis está ativo)
        lenisRef.current.scrollTo(0, { immediate: true });
      } else {
        // Cenário 2: Mobile / Touch (Lenis está desativado)
        // Usa o comando nativo do navegador para forçar a ida ao topo instantaneamente
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "instant",
        });
      }
    }
  }, [location, navType]);

  return <>{children}</>;
}

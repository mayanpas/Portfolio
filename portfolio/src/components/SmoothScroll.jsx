import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
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
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
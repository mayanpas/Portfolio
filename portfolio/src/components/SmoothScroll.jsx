import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // 1. Instância do Lenis com opções otimizadas
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: true,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
      duration: 1.2, // Duração suave padrão
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Curva de aceleração fluida
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5, // Resposta mais ágil em telas de toque
    });

    // 2. Reseta o scroll para o topo de forma limpa na montagem
    lenis.scrollTo(0, { immediate: true });

    // 3. Cleanup garantido
    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
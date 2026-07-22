import { useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Importa o CSS padrão do Lenis

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      autoToggle: true,
      anchors: true,
      allowNestedScroll: false,
      naiveDimensions: true,
      stopInertiaOnNavigate: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
// src/hooks/useIsMobile.js
import { useState, useEffect } from 'react';

export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checarTamanho = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    // Checagem inicial
    checarTamanho();

    // Listener para resize
    window.addEventListener('resize', checarTamanho);
    return () => window.removeEventListener('resize', checarTamanho);
  }, [breakpoint]);

  return isMobile;
}
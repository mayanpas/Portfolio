// src/hooks/useIsMobile.js
import { useState, useEffect } from "react";
import AOS from "aos";

export function useIsMobile(breakpoint = 960) { // Aumentado para 960 para cobrir celulares na horizontal
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checarTamanho = () => {
      // É mobile se a largura for menor que o breakpoint OU se a altura for de celular deitado (< 500px)
      const mobileWidth = window.innerWidth <= breakpoint;
      const mobileLandscape = window.innerHeight <= 500 && window.matchMedia("(orientation: landscape)").matches;
      
      const ehMobile = mobileWidth || mobileLandscape;

      setIsMobile(ehMobile);

      // Força a atualização do AOS
      if (typeof window !== "undefined" && AOS) {
        AOS.refreshHard(); // refreshHard força o recalculo completo do DOM
      }
    };

    const handleOrientationChange = () => {
      setTimeout(() => {
        checarTamanho();
      }, 300);
    };

    // Checagem inicial
    checarTamanho();

    // Listeners
    window.addEventListener("resize", checarTamanho);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", checarTamanho);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, [breakpoint]);

  return isMobile;
}
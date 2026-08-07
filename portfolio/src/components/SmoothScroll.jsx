import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

export default function SmoothScroll({ children }) {
  const location = useLocation();
  const navType = useNavigationType();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const root = document.documentElement;
    const previousBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = prefersReducedMotion ? "auto" : "smooth";
    root.style.scrollPaddingTop = "1.5rem";

    return () => {
      root.style.scrollBehavior = previousBehavior;
      root.style.scrollPaddingTop = "";
    };
  }, []);

  useEffect(() => {
    if (navType === "PUSH" && !location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }
  }, [location, navType]);

  return <>{children}</>;
}

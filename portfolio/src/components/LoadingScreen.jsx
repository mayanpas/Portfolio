import React from "react";
import "../css/LoadingScreen.css";

export default function LoadingScreen({ isLoading }) {
  return (
    <div className={`loading-overlay ${!isLoading ? "fade-out" : ""}`}>
      <div className="spinner"></div>
    </div>
  );
}
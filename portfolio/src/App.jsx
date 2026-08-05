import "@fontsource/cal-sans";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/700.css";
// IMPORTANTE: Mudamos os imports aqui
import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { useEffect } from "react";

import SmoothScroll from "./components/SmoothScroll";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Sobre from "./components/Sobre";
import Habilidades from "./components/Habilidades";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import DetalhesProjeto from "./components/DetalhesProjetos";
import "./App.css";

// 1. Sua Home continua igual
function Home() {
  const { hash } = useLocation();

  useEffect(() => {
    requestAnimationFrame(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
  }, [hash]);

  return (
    <>
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </>
  );
}

// 2. Criamos o Layout Base (O "molde" do site)
function RootLayout() {
  return (
    <SmoothScroll>
      <div className="App">
        <Header />
        
        <main>
          {/* O <Outlet /> é o "buraco" onde o React Router vai 
              injetar a <Home /> ou o <DetalhesProjeto /> */}
          <Outlet />
        </main>
        
        <Footer />
        
        {/* Agora o ScrollRestoration vai funcionar perfeitamente! */}
        <ScrollRestoration />
      </div>
    </SmoothScroll>
  );
}

// 3. Configuramos as rotas no formato Data Router
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // O Layout envolve todas as rotas filhas
    children: [
      {
        path: "/", // Quando a rota for só "/", renderiza a Home no Outlet
        element: <Home />,
      },
      {
        path: "/projeto/:id", // Quando for projeto, renderiza os Detalhes no Outlet
        element: <DetalhesProjeto />,
      },
    ],
  },
]);

// 4. O componente App agora apenas entrega as rotas configuradas para o React
function App() {
  return <RouterProvider router={router} />;
}

export default App;
// src/data/projetosData.js
import clinigest from "../assets/Projetos/clinigest.jpg";
import bonbonetto from "../assets/Projetos/bonbonetto.jpg";
import painelVendas from "../assets/Projetos/painelVendas.jpg";
import HabButtons from "../components/HabButtons";

// Carrega automaticamente todas as fotos da pasta Clinigest
const clinigestPhotosObj = import.meta.glob("../assets/Projetos/Clinigest/*.{jpeg,jpg,png,svg}", {
  eager: true,
  import: "default",
});

// Transforma o objeto retornado pelo Vite em um Array com os caminhos das imagens
const clinigestPhotos = Object.values(clinigestPhotosObj);

export const projetosData = [
  {
    id: "clinegest",
    image: clinigest,
    type: "front-end / back-end",
    title: "clinigest",
    description:
      "Sistema completo de uma clínica odontológica, promovendo uma gestão mais organizada de suas atividades.",
    habilities: ["html5", "css3", "javaScript", "react", "gitHub"],
    photos: clinigestPhotos, // <--- Passa o Array de fotos aqui!
    github: "https://github.com/mayanpas",
    liveDemo: "",
  },
  {
    id: "bonbonetto",
    image: bonbonetto,
    type: "front-end",
    title: "Bonbonetto",
    description: "Vitrine e cardápio virtual de uma confeitaria fictícia.",
    habilities: ["html5", "css3", "javaScript", "gitHub"],
    photos: null, // <--- Passa o Array de fotos aqui!
    github: "https://github.com/mayanpas",
    liveDemo: "",
  },
  {
    id: "painelDeVendas",
    image: painelVendas,
    type: "front-end",
    title: "Painel de vendas",
    description:
      "Painel de vendas com dashboard de vendas mensais e atualização ao vivo de métricas.",
    habilities: ["html5", "css3", "javaScript", "gitHub"],
    photos: null, // <--- Passa o Array de fotos aqui!
    github: "https://github.com/mayanpas",
    liveDemo: "",
  },
];


import clinigest from "../assets/Projetos/clinigest.jpg";
import bonbonetto from "../assets/Projetos/bonbonetto.jpg";
import painelVendas from "../assets/Projetos/painelVendas.jpg";

// Carrega automaticamente todas as fotos da pasta Clinigest
const clinigestPhotosObj = import.meta.glob("../assets/Projetos/Clinigest/*.{jpeg,jpg,png,svg}", {
  eager: true,
  import: "default",
});
const bonbonettoPhotosObj = import.meta.glob("../assets/Projetos/Bonbonetto/*.{jpeg,jpg,png,svg}", {
  eager: true,
  import: "default",
});
const painelVendasPhotosObj = import.meta.glob("../assets/Projetos/PainelVendas/*.{jpeg,jpg,png,svg}", {
  eager: true,
  import: "default",
});

// Transforma o objeto retornado pelo Vite em um Array com os caminhos das imagens
const clinigestPhotos = Object.values(clinigestPhotosObj);
const bonbonettoPhotos = Object.values(bonbonettoPhotosObj);
const painelVendasPhotos = Object.values(painelVendasPhotosObj);

export const projetosData = [
  {
    id: "clinigest",
    image: clinigest,
    type: "front-end / back-end",
    title: "Clinigest",
    description:
      "Sistema completo de uma clínica odontológica, promovendo uma gestão mais organizada de suas atividades.",
    habilities: ["html5", "css3", "javaScript", "react", "gitHub"],
    photos: clinigestPhotos,
    github: "https://github.com/EmanuelScapim/CliniGest---PI",
    liveDemo: "", 
  },
  {
    id: "bonbonetto",
    image: bonbonetto,
    type: "front-end",
    title: "Bonbonetto",
    description: "Vitrine e cardápio virtual de uma confeitaria fictícia.",
    habilities: ["html5", "css3", "javaScript", "gitHub"],
    photos: bonbonettoPhotos,
    github: "https://github.com/mayanpas/bonbonetto",
    liveDemo: "https://mayanpas.github.io/bonbonetto/",
  },
  {
    id: "painelDeVendas",
    image: painelVendas,
    type: "front-end",
    title: "Painel de vendas",
    description:
      "Painel de vendas com dashboard de vendas mensais e atualização ao vivo de métricas.",
    habilities: ["html5", "css3", "javaScript", "gitHub"],
    photos: painelVendasPhotos,
    github: "https://github.com/mayanpas/Painel-de-vendas",
    liveDemo: "https://mayanpas.github.io/Painel-de-vendas/",
  },
];
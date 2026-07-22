import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// 1. Importe o CSS da biblioteca AOS
import 'aos/dist/aos.css' 
import { useEffect } from 'react'

// 2. Importe o objeto AOS
import AOS from 'aos'

// 3. Crie um componente auxiliar simples para inicializar o AOS (ou faça isso dentro do App.jsx)
function Root() {
  useEffect(() => {
    // Inicializa a biblioteca assim que o site carregar
    AOS.init({
      duration: 800, // Duração da animação em milissegundos (1 segundo)
      once: false,     // Se a animação deve ocorrer apenas uma vez ao rolar (evita ficar piscando)
      offset: 0,    // Distância em pixels antes do elemento para disparar a animação
    });
  }, [])

  return <App />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
)
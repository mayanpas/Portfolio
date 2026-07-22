import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SobreMim from './components/SobreMim';
import Habilidades from './components/Habilidades';
import Projetos from './components/Projetos';
import FaleComigo from './components/FaleComigo';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Hero />
        <SobreMim />
        <Habilidades />
        <Projetos />
        <FaleComigo />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
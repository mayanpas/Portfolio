import sobreMim from '../assets/Header/sobremim.svg';
import habilidades from '../assets/Header/habilidades.svg';
import projetos from '../assets/Header/projetos.svg';
import faleComigo from '../assets/Header/falecomigo.svg';

function Navbar() {
  return (
    <header id="header">
      <nav id="headerLinks">
        <a href="#cardSobreMim" className="headerLink">
          <img src={sobreMim} alt="iconePessoa" />
          Sobre mim
        </a>
        <a href="#cardHabilidades" className="headerLink">
          <img src={habilidades} alt="iconeCodigo" />
          Habilidades
        </a>
        <a href="#cardProjetos" className="headerLink">
          <img src={projetos} alt="iconeArquivos" />
          Projetos
        </a>
        <a href="#cardContato" className="headerLink">
          <img src={faleComigo} alt="iconeBalao" />
          Fale Comigo
        </a>
      </nav>
    </header>
  );
}

export default Navbar;

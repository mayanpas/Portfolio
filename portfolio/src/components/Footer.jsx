import "../css/Footer.css";
import { BiLogoGithub } from "react-icons/bi";

function Footer() {
  return (
    <footer id="footer" className="">
      <p id="copyright">&copy; 2026 Mayan Patrick</p>
      <a
        href="https://github.com/mayanpas/Portfolio"
        id="portGithub"
        target="_blank"
        rel="noopener noreferrer"
      >
       <BiLogoGithub size={20}/> GitHub deste portfólio
      </a>
      {/* <small id='react'>Feito com React</small> */}
    </footer>
  );
}

export default Footer;

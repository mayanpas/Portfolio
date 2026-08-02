import "../css/Footer.css";
import { BiLogoGithub } from "react-icons/bi";

function Footer() {
  return (
    <footer id="footer">
      <p id="copyright">&copy; 2026 Mayan Patrick</p>
      
      <a
        href="https://github.com/mayanpas/Portfolio"
        id="portGithub"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BiLogoGithub className="footerIcon" /> GitHub deste portfólio
      </a>
    </footer>
  );
}

export default Footer;
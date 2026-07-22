import GitHub from '../assets/github.svg';

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
        <img src={GitHub} alt="gitHubIcon" />
        GitHub deste portfólio
      </a>
    </footer>
  );
}

export default Footer;

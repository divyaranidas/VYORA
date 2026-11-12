
import './Footer.css';

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-top">
        <div className="footer-brand">
          <span className="footer-logo">VYORA.</span>
          <p>
            Thoughtful workspaces.
            <br />
            Meaningful progress.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <span>EXPLORE</span>
            <a href="#home">Home</a>
            <a href="#features">Features</a>
            <a href="#solutions">Workspace</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div>
            <span>CONNECT</span>
            <a href="mailto:hello@vyora.com">Email us</a>
            <a href="#contact">Get started</a>
          </div>
        </div>
      </div>

      <div className="footer-statement">
        <span>THE FUTURE OF WORK STARTS HERE</span>

        <h2>
          MAKE WORK
          <span>MEAN MORE.</span>
        </h2>

        <a href="#home" className="footer-back">
          BACK TO TOP <span>↗</span>
        </a>
      </div>

      <div className="footer-bottom">
        <span>© 2026 VYORA. ALL RIGHTS RESERVED.</span>
        <span>DESIGNED TO MOVE YOU FORWARD.</span>

        <div className="footer-socials">
          <a href="https://instagram.com" aria-label="Instagram">IG</a>
          <a href="https://linkedin.com" aria-label="LinkedIn">IN</a>
          <a href="https://github.com" aria-label="GitHub">GH</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;

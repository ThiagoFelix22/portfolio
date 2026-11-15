import "./footer.css";

function Footer() {
  return (
    <footer className="footer-container">
      <p>© {new Date().getFullYear()} Thiago Alves Felix. Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;

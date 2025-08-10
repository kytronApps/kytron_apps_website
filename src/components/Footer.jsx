// src/components/Footer.jsx
export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div>© {new Date().getFullYear()} kytron</div>
        <nav style={{display:'flex', gap:16}}>
          <a href="mailto:hello@example.com">Contacto</a>
          <a href="/legal.html">Legal</a>
          <a href="https://github.com/youruser" target="_blank" rel="noreferrer">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}
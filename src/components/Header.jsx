// src/components/Header.jsx
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner container" style={{justifyContent: 'center'}}>
        <Link to="/" className="brand" style={{display: 'inline-flex', alignItems: 'center'}}>
          <img 
            src="/logo.png" 
            alt="Kytron" 
            style={{height: 48, width: 'auto'}} 
          />
        </Link>
      </div>
    </header>
  );
}
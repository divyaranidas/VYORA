
import { useState } from 'react';
import { Layers3, Menu, X, ArrowUpRight } from 'lucide-react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: 'Features', href: '#features' },
    { name: 'Solutions', href: '#solutions' },
    { name: 'How it works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="navbar">
      <a href="#" className="nav-logo">
        <span className="logo-icon">
          <Layers3 size={23} />
        </span>
        <span>VYORA</span>
      </a>

      <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}
      </nav>

      <a href="#contact" className="nav-cta">
        Get Started <ArrowUpRight size={17} />
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;
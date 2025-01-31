/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


function Nav({ links = [] }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="logo">
          <img
            src="https://png.pngtree.com/png-vector/20220617/ourmid/pngtree-logos-of-green-tree-leaf-ecology-nature-element-vector-png-image_5123066.png"
            alt="Logo"
          />
        </Link>
        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="nav-icon"></span>
        </label>
        <nav className="menu">
          <ul>
            {links.map((link) => (
              <li key={link.id}>
                <Link to={link.url}>{link.content}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="mailto:alessandro.axhenti@einsteinvimercate.edu.it" target="_blank" rel="noopener noreferrer">
          <button className="contattaci">Contattaci</button>
        </a>
      </header>
    </>
  );
}

export default Nav;

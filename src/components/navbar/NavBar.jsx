import "./NavBar.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import Close from "../../../public/images/icon-close.svg";
import Open from "../../../public/images/icon-hamburger.svg";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(true);

  const showMenu = () => {
    setMobileMenu((prevMobileMenu) => !prevMobileMenu);
  };

  const closeMenuLink = () => {
    setMobileMenu(true);
  };

  const [scrolling, setScrolling] = useState(false);

  // Função para verificar a posição do scroll
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Adicionar um event listener para o evento de scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Limpar o event listener quando o componente é desmontado
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      {mobileMenu ? (
        ""
      ) : (
        <nav className="navbar-mobile">
          <h1>
            <Link onClick={() => closeMenuLink()} className="nav-link">
              loopstudios
            </Link>
          </h1>
          <ul>
            <li>
              <Link
                onClick={() => closeMenuLink()}
                className="nav-link"
                to="/about"
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenuLink()}
                className="nav-link"
                to="/careers"
              >
                CAREERS
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenuLink()}
                className="nav-link"
                to="/events"
              >
                EVENTS
              </Link>
            </li>
            <li>
              <Link
                onClick={() => closeMenuLink()}
                className="nav-link"
                to="/products"
              >
                PRODUCTS
              </Link>
            </li>
            <li>
              <Link onClick={() => closeMenuLink()} className="nav-link" to="/">
                SUPPORT
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <h1>
        <Link className="nav-link">loopstudios</Link>
      </h1>
      <ul>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/careers">
            Careers
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/events">
            Events
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/products">
            Products
          </Link>
        </li>
      </ul>

      <button
        className={`menu-mobile ${scrolling ? 'dark-button' : ''}`}
        onClick={() => showMenu()}
      >
        {mobileMenu ? (
          <img src={Open} alt="Ícone de fechar" />
        ) : (
          <img src={Close} alt="Ícone de fechar" />
        )}
      </button>
    </nav>
  );
};

export default NavBar;

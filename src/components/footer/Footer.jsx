import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="top-footer">
          <h1>
            <Link className="nav-link">loopstudios</Link>
          </h1>

          <ul className="social-icons">
            <li>
              <a href="#">
                <FaFacebook size='25px' />
              </a>
            </li>
            <li>
              <a href="#">
                <FaTwitter size='25px' />
              </a>
            </li>
            <li>
              <a href="#">
                <FaPinterest size='25px' />
              </a>
            </li>
            <li>
              <a target="blank" href="https://www.instagram.com/junior.rx22/">
                <FaInstagram size='25px' />
              </a>
            </li>
          </ul>
        </div>
        <div className="bottom-footer">
          <ul className="links-footer">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/">Suport</Link>
            </li>
          </ul>

          <h5>© 2021 Loopstudios. All rights reserved.</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import "../styles/Navbar.css";
import { Link } from "react-router-dom";
import clean from "../assets/images/icons/clean.png";
import powerWashing from "../assets/images/icons/power-washing.png";
import steamIron from "../assets/images/icons/steam-iron.png";
import connexion from "../assets/images/icons/connexion.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <div className="navbar-logo">WeCasa</div>
      </Link>
      <nav className="navbar-link">
        <ul className="navbar-link-items">
          <li>
            <Link to="/fullcleaning">
              <img src={powerWashing} alt="le ménage doit être régulier" />
              <span className="navbar-link-items--name"> Ménage complet</span>
            </Link>
          </li>
          <li>
            <Link to="/quickcleaning">
              <img src={clean} alt="le ménage doit être ponctuel" />{" "}
              <span className="navbar-link-items--name">Ménage rapide</span>
            </Link>
          </li>
          <li>
            <Link to="/ironing">
              <img src={steamIron} alt="le repassage complet" />{" "}
              <span className="navbar-link-items--name">
                Service de repassage
              </span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src={connexion} alt="connexion" />
              <span className="navbar-link-items--name">Connectez-vous</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

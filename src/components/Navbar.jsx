import "../styles/Navbar.css";
import clean from "../images/clean.png";
import powerWashing from "../images/power-washing.png";
import steamIron from "../images/steam-iron.png";
import connexion from "../images/connexion.png";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">WeCasa</div>
      <nav className="navbar-link">
        <ul className="navbar-link-items">
          <li>
            <a href="#">
              <img src={powerWashing} alt="le ménage doit être régulier" />
              Ménage régulier
            </a>
          </li>
          <li>
            <a href="#">
              <img src={clean} alt="le ménage doit être ponctuel" /> Ménage
              ponctuel
            </a>
          </li>
          <li>
            <a href="#">
              <img src={steamIron} alt="le repassage complet" /> Service de
              repassage
            </a>
          </li>
          <li>
            <a href="#">
              <img src={connexion} alt="connexion" /> Connectez-vous
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

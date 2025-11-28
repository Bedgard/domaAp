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
              <span className="navbar-link-items--name"> Ménage régulier</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={clean} alt="le ménage doit être ponctuel" />{" "}
              <span className="navbar-link-items--name">Ménage ponctuel</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={steamIron} alt="le repassage complet" />{" "}
              <span className="navbar-link-items--name">
                Service de repassage
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src={connexion} alt="connexion" />
              <span className="navbar-link-items--name">Connectez-vous</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

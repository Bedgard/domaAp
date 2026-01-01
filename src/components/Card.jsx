import "../styles/Card.css";
import repassage from "../images/photo-repassage.png";
import menageComplet from "../images/photomenagecomplet.png";
import menagePonctuel from "../images/photomenageponctuel.png";

function Card() {
  return (
    <div className="card-container">
      <div className="card-container-img">
        <h1>Service de repassage</h1>
        <img src={repassage} alt="une femme de ménage en train de repasser" />
        <a href="#" className="card-button">
          Réservez maintenant
        </a>
      </div>
    </div>
  );
}
export default Card;

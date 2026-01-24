import chrono from "../assets/images/icons/clock.png";
import lien from "../assets/images/icons/user.png";
import pouce from "../assets/images/icons/thumbs-up.png";
import "../styles/Banner.css";

function Banner() {
  return (
    <ul className="banner-container">
      <li className="banner-container-icons">
        <img src={lien} alt="une icone montrant une connexion" />
        <p className="banner-container-title">personnel qualifié</p>
        <p className="banner-container-description">
          Nous disposons d'une équipe de professionnels du nettoyage
          indépendants, vérifiés et expérimentés qui interviennent chaque jour
          dans vos maisons et appartements
        </p>
      </li>
      <li className="banner-container-icons">
        <img src={pouce} alt="une icone montrant un pouce levé" />
        <p className="banner-container-title">nettoyage de qualité</p>
        <p className="banner-container-description">
          Notre nettoyage s'effectue dans les moindres détails incluant le
          dépoussiérage complet, le nettoyage des sols, des vitres, de
          l'électroménager, des sanitaires, des grilles d'aération
        </p>
      </li>
      <li className="banner-container-icons">
        <img src={chrono} alt="une icone d'une montre" />
        <p className="banner-container-title">Rapide et efficace</p>
        <p className="banner-container-description">
          Nos équipes sont mobiles et savent exactement quoi faire. Pour eux, un
          travail bien fait est aussi un travail réalisé en temps et en heure
          pour vous rendre un logement propre et agréable
        </p>
      </li>
    </ul>
  );
}
export default Banner;

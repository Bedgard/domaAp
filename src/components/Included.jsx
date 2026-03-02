import checked from "../assets/images/icons/check.png";
import dessin from "../assets/images/icons/femme-de-menage-dessin.jpg";
import "../styles/Checked.css";
function Included() {
  return (
    <div className="check-box-container">
      <ul className="check-box">
        <h1>Ménage complet</h1>
        <li className="check-box-list">
          <img src={checked} alt="ce qui est inclus" />
          <p className="check-box-txt">
            Dès 26,90€, soit 13,45€/h avec 2 heures de ménage assuré et garanti
          </p>
        </li>
        <li className="check-box-list">
          <img src={checked} alt="ce qui est inclus" />
          <p className="check-box-txt">
            Hommes et femmes de ménage de confiance et de qualité, notés par les
            clients
          </p>
        </li>
        <li className="check-box-list">
          <img src={checked} alt="ce qui est inclus" />
          <p className="check-box-txt">
            Service disponible partout en France, en quelques clics sans
            engagement
          </p>
        </li>
        <div className="check-box-button">
          <a href="">Réserver mon ménage</a>
          <a href="">Devenir aide ménagère WeCasa</a>
        </div>
      </ul>
      <div className="image-box">
        <img src={dessin} alt="femme de ménage en dessin" />
      </div>
    </div>
  );
}
export default Included;

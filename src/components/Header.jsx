import "../styles/Header.css";
import banner from "../images/banner.jpg";

function Header() {
  return (
    <header className="header-banner">
      <h1 className="header-title">Ménage régulier ou ponctuel</h1>
      <a href="#" className="header-button">
        Réserver mon ménage
      </a>
      <img src={banner} alt="bannière qui montre une femmme au ménage" />
    </header>
  );
}
export default Header;

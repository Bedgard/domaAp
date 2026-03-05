import checked from "../assets/images/icons/check.png";

import "../styles/Included.css";
function Included({ title, price, items, image }) {
  return (
    <div className={'check-box-container'}>
      <ul className="check-box">
        <h1>{title}</h1>
        <li className="check-box-list">
          <img src={checked} alt="ce qui est inclus" />
          <p className="check-box-txt">{price}</p>
        </li>
        {items.map((item, index) => (
          <li className="check-box-list" key={index}>
            <img src={checked} alt="ce qui est inclus" />
            <p className="check-box-txt">{item}</p>
          </li>
        ))}
        <div className="check-box-button">
          <a href="">Réserver mon ménage</a>
          <a href="">Devenir aide ménagère WeCasa</a>
        </div>
      </ul>
      <div className="image-box">
        <img src={image} alt="femme de ménage en dessin" />
      </div>
    </div>
  );
}
export default Included;

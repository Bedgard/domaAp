import "../styles/Card.css";

function Card({ title, description, color, image }) {
  return (
    <div className={`card-container-img ${color}`}>
      <h1>{title}</h1>
      <img src={image} alt={description} />
      <a href="#" className="card-button">
        Réservez maintenant
      </a>
    </div> 
  );
}
export default Card;

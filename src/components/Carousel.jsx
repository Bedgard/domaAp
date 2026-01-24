import slide1 from "../assets/images/carousel/image-1-fullcleaning.jpg";
import slide2 from "../assets/images/carousel/image-2-fullcleaning.jpg";
import slide3 from "../assets/images/carousel/image-3-fullcleaning.jpg";
import slide4 from "../assets/images/carousel/image-4-fullcleaning.jpg";
import slide5 from "../assets/images/carousel/image-5-fullcleaning.jpg";
import slide6 from "../assets/images/carousel/image-6-fullcleaning.jpg";

function Carousel() {
  const images = [
    { img: slide1, description: "Une femme de ménage nettoyant une table" },
    { img: slide2, description: "Un homme passant l'aspirateur" },
    { img: slide3, description: "Une femme nettoyant les carreaux" },
    { img: slide4, description: "Une femme faisant la vaisselle" },
    { img: slide5, description: "Un homme nettoyant le plan de travail" },
    { img: slide6, description: "Une femme nettoyant les vitres" },
  ];

  return (
    <>
      <div className="carousel">
        <div className="group">
          {images.map((item, index) => (
            <div className="card" key={index}>
              <img src={item.img} alt={item.description} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Carousel;

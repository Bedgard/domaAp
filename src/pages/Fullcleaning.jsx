import Carousel from "../components/Carousel";
import "../styles/Carousel.css";
import slide1 from "../assets/images/carousel/image-1-fullcleaning.jpg";
import slide2 from "../assets/images/carousel/image-2-fullcleaning.jpg";
import slide3 from "../assets/images/carousel/image-3-fullcleaning.jpg";
import slide4 from "../assets/images/carousel/image-4-fullcleaning.jpg";
import slide5 from "../assets/images/carousel/image-5-fullcleaning.jpg";
import slide6 from "../assets/images/carousel/image-6-fullcleaning.jpg";

function Fullcleaning() {
  const images = [
    {
      img: slide1,
      description: "Une femme de ménage nettoyant une table",
      dataLabel: "Efficace",  
    },
    {
      img: slide3,
      description: "Une femme nettoyant les carreaux",
      dataLabel: "Rapide",
    },
    {
      img: slide2,
      description: "Un homme passant l'aspirateur",
      dataLabel: "Précis",
    },
    {
      img: slide4,
      description: "Une femme faisant la vaisselle",
      dataLabel: "Rigoureux",
    },
    {
      img: slide6,
      description: "Une femme nettoyant les vitres",
      dataLabel: "Actif",
    },
    {
      img: slide5,
      description: "Un homme nettoyant le plan de travail",
      dataLabel: "Serviable",
    },
  ];

  return (
    <>
      <Carousel items={images} />
    </>
  );
}
export default Fullcleaning;

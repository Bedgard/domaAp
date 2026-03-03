import Carousel from "../components/Carousel";
import Included from "../components/Included";
import dessin from "../assets/images/icons/femme-de-menage-dessin-2.png";
import "../styles/Carousel.css";
import slide1 from "../assets/images/carousel/image-1-fullcleaning.jpg";
import slide2 from "../assets/images/carousel/image-2-fullcleaning.jpg";
import slide3 from "../assets/images/carousel/image-3-fullcleaning.jpg";
import slide4 from "../assets/images/carousel/image-4-fullcleaning.jpg";
import slide5 from "../assets/images/carousel/image-5-fullcleaning.jpg";
import slide6 from "../assets/images/carousel/image-6-fullcleaning.jpg";

function Quickcleaning() {
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

      <Included
        title="Ménage rapide"
        price="Dès 13,50€, soit 7,45€/h avec 1 heure de ménage assuré et garanti"
        items={[
          "Hommes et femmes de ménage de confiance et de qualité, notés par les clients",
          "Service disponible partout en France, en quelques clics sans engagement",
        ]}
        image={dessin}
      />
    </>
  );
}
export default Quickcleaning;

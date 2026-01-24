import { nanoid } from "nanoid";
import repassage from "../images/photo-repassage.png";
import menageComplet from "../images/photomenagecomplet.png";
import menagePonctuel from "../images/photomenageponctuel.png";
import Header from "../components/Header";
import About from "../components/About";
import Banner from "../components/Banner";
import Card from "../components/Card";

function Home() {
  const cardsDatas = [
    {
      id: nanoid(),
      title: "repassage",
      description: "une femme de ménage en train de repasser",
      color: "blue-opacity",
      image: repassage,
    },
    {
      id: nanoid(),
      title: "menage complet",
      description: "un homme qui range tout l'intérieur",
      color: "green-opacity",
      image: menageComplet,
    },
    {
      id: nanoid(),
      title: "menage rapide",
      description: "une femme de ménage qui nettoie",
      color: "red-opacity",
      image: menagePonctuel,
    },
  ];

  return (
    <>
      <Header />
      <div className="grid-informations">
        <p>La vie est trop courte pour s'occuper des tâches ménagères</p>
        <h2>
          {" "}
          <span className="title-grid">WeCasa</span> est là pour vous servir !
        </h2>
        <div className="grid-container">
          {cardsDatas.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              color={card.color}
              image={card.image}
            />
          ))}
        </div>
      </div>
      <Banner />
      <About />
    </>
  );
}
export default Home;

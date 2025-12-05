import about from "../images/about.jpeg";
import "../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-informations">
        <h1>
          A propos de<span> Kasa</span>
        </h1>
        <p>
          La vie est trop courte pour s'occuper sans cesse des tâches ménagères
          de votre logement. Cela tombe bien, Kasa est là pour vous servir !
        </p>
      </div>
      <div className="about-informations-text">
        <h2>Finies les tâches ménagères</h2>
        <p>
          Créee en 2025, Kasa vous propose des services de nettoyage complet.
          Que vous soyez en vacances, que vous louiez votre logement, que vous
          avez besoin d'un ménage de printemps, Kasa s'occupe de tout : ménage
          régulier, ponctuel, ou encore repassage, à vous de choisir, n'hésitez
          pas Kasa s'occupe de votre intérieur.
        </p>
        <p>
          Grâce à une équipe dynamique, professionelle, et disponible en
          permanence pour vos besoins, Kasa vous propose différents services
          afin que vous puissiez en toute tranquillité et en toute sécurité
          retrouver un logement propre et prêt dès votre retour.
        </p>
        <p>
          Face à l'explosion d'une vie où tout le monde n'a plus le temps, notre
          équipe dévouée répond immédiatement à votre demande, et exécute dans
          les moindres détails toutes vos requêtes. Alors n'hésite pas,
          choisissez Kasa !
        </p>
      </div>
      <div className="about-informations-img">
        <img src={about} alt="informations sur les services de ménage" />
      </div>
    </div>
  );
}
export default About;

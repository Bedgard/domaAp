import about from "../images/about.png";
import "../styles/About.css";

function About() {
  return (
    <div className="about-informations">
      <div className="about-informations--infos">
        <h1>
          A propos de<span> WeCasa</span>
        </h1>
        <p>
          La vie est trop courte pour s'occuper des tâches ménagères
          <br />
          <span className="title-second"> WeCasa</span> est là pour vous servir
          !
        </p>
      </div>
      <div className="about-information-grid">
        <div className="about-informations-grid--text">
          <h2>Finies les tâches ménagères</h2>
          <p>
            Créée en 2025, <span>WeCasa</span> vous propose{" "}
            <span className="txt-black">
              {" "}
              des services de nettoyage complet.{" "}
            </span>
            Que vous soyez en vacances, que vous louiez votre logement ou que
            vous avez besoin d'un ménage de printemps, <span>WeCasa</span>{" "}
            s'occupe de vous :{" "}
            <span className="txt-black">ménage régulier</span>,{" "}
            <span className="txt-black">ménage ponctuel</span>,{" "}
            <span className="txt-black">repassage</span>, <span>WeCasa</span>{" "}
            s'occupe de votre intérieur.
          </p>
          <p>
            Grâce à une équipe dynamique, professionelle, et disponible en
            permanence pour vos besoins, <span>WeCasa</span> vous propose
            différents services afin que vous puissiez en toute tranquillité et
            en toute sécurité retrouver un logement propre et prêt dès votre
            retour.
          </p>
          <p>
            Face à l'explosion d'une vie où tout le monde n'a plus le temps,
            notre équipe dévouée répond immédiatement à votre demande, et
            exécute dans les moindres détails toutes vos requêtes. Alors
            n'hésite pas, choisissez <span>WeCasa</span> !
          </p>
        </div>
        <div className="about-informations-grid--img">
          <img src={about} alt="informations sur les services de ménage" />
        </div>
      </div>
    </div>
  );
}
export default About;

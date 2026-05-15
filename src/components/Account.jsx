import { useState } from "react";
import "../styles/Account.css";
import profil from "../assets/images/carousel/test-photo-profil.jpg";
import Calendar from "./Calendar";

function Account() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [data, setFormData] = useState({
    photo: profil,
    lastName: "",
    firstName: "",
    adress: "",
    email: "",
    postalCode: "",
    password: "",
    confirmation: "",
    service: "",
    date: "",
  });

  const isFormInvalid =
    !data.lastName ||
    !data.firstName ||
    !data.adress ||
    !data.postalCode ||
    !data.email ||
    !data.password ||
    !data.service ||
    !data.confirmation;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "password" || name === "service"
          ? value
          : value.trim().toLowerCase(),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");
    if (isFormInvalid) {
      setError("Veuillez remplir tous les champs ⚠️");
      setTimeout(() => setError(""), 3000);
      return;
    }

    if (data.password !== data.confirmation) {
      setError("Mot de passe pas identique ⚠️");
      setTimeout(() => setError(""), 3000);
      return;
    }

    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    console.log("Données envoyées", data);
  };
  return (
    <div className="layout-page">
      <main className="account-page">
        <form onSubmit={handleSubmit}>
          <div className="container-account">
            <h2>Bienvenue parmi nous</h2>
            <div className="container-photo">
              <img src={data.photo} alt="ma photo de profil" />
            </div>

            {/* Nom */}
            <div className="container-account--firstName">
              <label>Nom :</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Prenom */}
            <div className="container-account--lastName">
              <label>Prenom :</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
              />
            </div>

            {/* Adresse */}
            <div className="container-account--adress">
              <label>Adresse :</label>
              <input
                type="text"
                id="adress"
                name="adress"
                value={data.adress}
                onChange={handleChange}
              />
            </div>

            {/* codePostal */}
            <div className="container-account--adress">
              <label>code Postal :</label>
              <input
                type="text"
                id="postalCode"
                name="postalCode"
                value={data.postalCode}
                onChange={handleChange}
                maxLength="5"
              />
            </div>

            {/* email */}
            <div className="container-account--email">
              <label>Email :</label>
              <input
                type="text"
                id="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>

            {/* Password */}
            <div className="container-account--password">
              <label>Password :</label>
              <input
                type="password"
                id="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>

            {/* //confirmation */}
            <div className="container-account--password">
              <label>Confirmer :</label>
              <input
                type="password"
                id="confirmation"
                name="confirmation"
                value={data.confirmation}
                onChange={handleChange}
              />
            </div>

            <div className="container-account--service">
              <label htmlFor="service">Service :</label>
              <select
                id="service"
                name="service"
                value={data.service}
                onChange={handleChange}
              >
                <option value="">-- Choisissez un service --</option>
                <option value="fullCleaning">Menage Complet</option>
                <option value="quickCleaning">Menage Rapide</option>
                <option value="ironing">Repassage</option>
              </select>
            </div>

            {/* succes ou erreur */}
            {error && <p className="account-error">{error}</p>}
            {success && <p className="account-success">Profil crée ✅</p>}
            <button className="account-button" type="submit">
              Enregistrer
            </button>
          </div>
        </form>
      </main>
      <div className="account-calendar-panel">
        <h3>Vos disponibilités</h3>
        <p className="calendar-subtitle">
          Veuillez sélectionner plusieurs dates sur la grille.
        </p>
        <div className="container-photo">
          <img src={data.photo} alt="ma photo de profil" />
        </div>
        <div className="calendar-box">
          <Calendar
            firstName={data.firstName}
            lastName={data.lastName}
            service={data.service}
          />
        </div>
      </div>
    </div>
  );
}
export default Account;

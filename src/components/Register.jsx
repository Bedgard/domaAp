import { useState } from "react";
import "../styles/Register.css";

function Register() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState(""); // ✅ ajouté
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    const nameRegex = /^[A-Z][a-zA-Z-]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // NOM
    if (!nameRegex.test(name)) {
      newErrors.name = "Nom invalide (Majuscule requise)";
    }

    // PRENOM ✅
    if (!nameRegex.test(firstname)) {
      newErrors.firstname = "Prénom invalide (Majuscule requise)";
    }

    // EMAIL
    if (!emailRegex.test(email)) {
      newErrors.email = "Email invalide";
    }

    // PASSWORD
    if (password.length < 6) {
      newErrors.password = "Minimum 6 caractères";
    }

    // CONFIRM
    if (password !== confirm) {
      newErrors.confirm = "Les mots de passe ne correspondent pas";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    console.log("Compte créé ✅");

    // reset
    setName("");
    setFirstname("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Créer un compte</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label>Prénom</label>
            <input
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            {errors.firstname && <p className="error">{errors.firstname}</p>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label>Mot de passe</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <div className="form-group">
            <label>Confirmer</label>
            <input
              type="password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
            />
            {errors.confirm && <p className="error">{errors.confirm}</p>}
          </div>

          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Register;

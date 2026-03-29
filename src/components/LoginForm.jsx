import { useState } from "react";
import "../styles/LoginForm.css";
import { Link } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // simulation simple (à remplacer par une API)
    if (!email || !password) {
      setError("Tous les champs sont obligatoires");
      return;
    }

    setError("");
    setSuccess(true);

    console.log("Email:", email);
    console.log("Password:", password);

    setEmail("");
    setPassword("");
  };

  return (
    <main className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="container-form">
          <h2>Connexion</h2>

          <p className="subtitle">
            Pas encore de compte ? <Link to="/register">Créer un compte</Link>
          </p>

          <div className="container-form--email">
            <label>Email :</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="container-form--password">
            <label>Password :</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">Connexion réussie ✅</p>}

          <button type="submit">Connexion</button>
        </div>
      </form>
    </main>
  );
}

export default LoginForm;

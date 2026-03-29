import { useState } from "react";
import "../styles/LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSuccess(true);
    console.log("Email:", email);
    console.log("Password:", password);

    // ici tu peux appeler une API
  };

  return (
    <main className="login-page">
      <form onSubmit={handleSubmit}>
        <div className="container-form">
          <h2>Connexion</h2>

          <p className="subtitle">Accédez à votre espace personnel</p>

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
            <label>Password : </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Connexion</button>
          {success && <p className="success">Connexion réussie ✅</p>}
        </div>
      </form>
    </main>
  );
}
export default LoginForm;

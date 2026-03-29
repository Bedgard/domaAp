
import "../styles/Register.css";

function Register() {
  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Créer un compte</h2>

        <div className="form-group">
          <label>Nom</label>
          <input type="text" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input type="password" />
        </div>

        <div className="form-group">
          <label>Confirmer</label>
          <input type="password" />
        </div>

        <button>S'inscrire</button>
      </div>
    </div>
  );
}

export default Register;

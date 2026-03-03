import "../styles/Form.css";
function Form() {
  return (
    <div>
      <h1 className="form-title">Connexion</h1>
      <form
        className="form-container"
        action="/ma-page-de-traitement"
        method="post"
      >
        <ul>
          <li>
            <label htmlFor="name">Nom&nbsp;:</label>
            <input type="text" id="name" name="user_name" />
          </li>
          <li>
            <label htmlFor="mail">E-mail&nbsp;:</label>
            <input type="email" id="mail" name="user_mail" />
          </li>
        </ul>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Form;

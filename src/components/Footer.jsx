
import gmail from "../images/gmail.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import facebook from "../images/facebook.png";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <p className="footer-down-txt">WeCasa</p>
      <ul className="footer-contacts">
        <li>
          <a href="#">
            <img src={facebook} alt="icone de Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="icone de Twitter" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={instagram} alt="icone de Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={gmail} alt="icone de Gmail" />
          </a>
        </li>
      </ul>
      <p className="footer-down-txt--legal">We Casa &copy;2025</p>
    </footer>
  );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./styles/Main.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Card from "./components/Card";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
    <div className="grid-informations">
      <p>
        La vie est trop courte pour s'occuper des tâches ménagères
        <br />
        <span className="title-grid"> WeCasa</span> est là pour vous servir !
      </p>
      <div className="grid-container">
        <Card />
        <Card />
        <Card />
      </div>
    </div>

    <About />
  </StrictMode>
);

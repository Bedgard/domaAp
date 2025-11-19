import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./components/Navbar";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <Header />
  </StrictMode>
);

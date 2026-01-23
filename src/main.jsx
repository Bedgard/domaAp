import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./pages/Home";
import Fullcleaning from "./pages/Fullcleaning";
import "./index.css";
import "./styles/Main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Home />
  </StrictMode>,
);

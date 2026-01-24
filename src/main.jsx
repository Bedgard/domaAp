import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Fullcleaning from "./pages/Fullcleaning";
import Home from "./pages/Home";
import "./index.css";
import "./styles/Main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fullcleaning" element={<Fullcleaning />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
);

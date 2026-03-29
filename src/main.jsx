import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Fullcleaning from "./pages/Fullcleaning";
import Quickcleaning from "./pages/Quickcleaning";
import Ironing from "./pages/Ironing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./components/Register";

import "./index.css";
import "./styles/Main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/fullcleaning" element={<Fullcleaning />} />
            <Route path="/quickcleaning" element={<Quickcleaning />} />
            <Route path="/ironing" element={<Ironing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </StrictMode>,
);

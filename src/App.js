import React from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import FaqPage from "./pages/faq-page/faq-page";
import AboutMePage from "./pages/about-me-page/about-me-page";
import MyWorksPage from "./pages/my-works-page/my-works-page";

function App() {
  return (
    <Routes>
      <Route index element={<FaqPage />} /> 
      <Route exact path="/faq" element={<FaqPage />} />
      <Route exact path="/about-me" element={<AboutMePage />} />
      <Route exact path="/my-works" element={<MyWorksPage />} />
    </Routes>
  )
}

export default App;
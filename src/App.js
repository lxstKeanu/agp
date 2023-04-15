import React from "react";
import { Routes, Route } from "react-router-dom"
import "./App.css";
import FaqPage from "./pages/faq-page/faq-page";


function App() {
  return (
    <Routes>
      <Route index element={<FaqPage />} />
      <Route exact path="/faq" element={<FaqPage />} />
    </Routes>
  )
}

export default App;
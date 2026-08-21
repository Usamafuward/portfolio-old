import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Experiences from "./pages/Experiences";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" exact element={<Index/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/certifications" element={<Certifications/>} />
          <Route path="/experiences" element={<Experiences/>} />
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

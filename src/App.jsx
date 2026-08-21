import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "@/pages/Index";
import Projects from "@/pages/Projects";
import Certifications from "@/pages/Certifications";
import Experiences from "@/pages/Experiences";
import Contact from "@/pages/Contact";
import { DarkModeProvider } from "@/context/DarkModeContext";

function App() {
  return (
    <BrowserRouter>
      <DarkModeProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </DarkModeProvider>
    </BrowserRouter>
  );
}

export default App;

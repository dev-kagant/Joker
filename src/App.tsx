import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
// import AboutPage from "./pages/AboutPage";
import CreatorPage from "./pages/CreatorPage";
import HeaderComponent from "./components/HeaderComponent";

interface NavLinkItem {
  name: string;
  path: string;
}

const navLinks: NavLinkItem[] = [
  { name: "Home", path: "/joker" },
  { name: "About", path: "/joker/about" },
  { name: "Creator", path: "/joker/creator" },
];

function App(): React.JSX.Element {
  return (
    <div className="max-h-screen bg-slate-900 font-quantico">
      <Router>
        <HeaderComponent links={navLinks}/>
        <Routes>
          <Route path="/joker" element={<LandingPage />} />
          {/* <Route path="/joker/about" element={<AboutPage />} /> */}
          <Route path="/joker/creator" element={<CreatorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

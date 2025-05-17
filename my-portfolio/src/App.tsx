
import React, {useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import InfoPanel from "./components/InfoPanel";
import Modal from "./components/Modal";
import LinksSection from "./components/LinksSection";
import "./App.css"; // Import your CSS file

const App: React.FC = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
	<Router>
	<Header onContactClick={() => setModalOpen(true)} />
	<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
	<nav className="navbar">
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link> */}
	<LinksSection />
    </nav>
    <Routes>
      <Route path="/" element={
		<div className="main-layout">
			<MainContent />
			<InfoPanel />
			</div>} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </Router>
);
};

export default App;
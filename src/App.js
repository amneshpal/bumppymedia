import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // Navbar component
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Bootstrap JS (needed for the toggle)

import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
 import Expert from './components/Expert';
import Tax from './components/Tax';
import Fsection from './components/Fsection';
import Footer from './components/Footer';


const Home = () => <h2 className="text-center"></h2>;
const About = () => <h2 className="text-center"></h2>;
const Contact = () => <h2 className="text-center"></h2>;

function App() {
  return (
    <Router>
      <Navbar />
      {/* Other components for homepage content */}
      <HeroSection />
      <FeatureCards />
      <ServicesSection />
      <ProductsSection />
      <Expert />
      <Tax />
      <Fsection />
      <Footer />

      {/* Defining Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

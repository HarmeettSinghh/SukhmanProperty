import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Home from './pages/Home';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';
import SellProperty from './pages/SellProperty';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/properties"            element={<Properties />} />
            <Route path="/properties/:slug"      element={<PropertyDetails />} />
            <Route path="/services"              element={<Services />} />
            <Route path="/about"                 element={<About />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="/sell-property"         element={<SellProperty />} />
            {/* 404 */}
            <Route path="*" element={
              <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF7] text-center px-5">
                <p className="font-serif text-8xl text-[#C9A84C] font-light mb-4">404</p>
                <h1 className="font-serif text-3xl text-[#111111] mb-3">Page Not Found</h1>
                <p className="text-[#6B6B6B] mb-8">The page you're looking for doesn't exist.</p>
                <a href="/" className="btn-gold">Go Home</a>
              </div>
            } />
          </Routes>
        </div>
        <Footer />
        <WhatsAppFloat />
      </div>
    </Router>
  );
}

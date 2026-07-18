import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './Components/Home';
import Services from './Components/Services'
import Lookbook from './Components/Lookbook'
import AboutUs from './Components/AboutUs'
import Reviews from './Components/Reviews'
import FAQ from './Components/FAQ'
import BookNow from './Components/BookNow'
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes> <Route path='/' element={<>
          <Home />
          <Services />
          <Lookbook />
          <AboutUs />
          <Reviews />
          <FAQ />
          <BookNow />
          </>
          }/>


          <Route path="/services" element={<Services />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/aboutus" element={<AboutUs />} />
           <Route path="/reviews" element={<Reviews />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/booknow" element={<BookNow />} />
         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
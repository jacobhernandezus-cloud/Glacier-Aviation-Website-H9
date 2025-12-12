import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Programs from './components/Programs';
import About from './components/About';
import Fleet from './components/Fleet';
import Gallery from './components/Gallery';
import Booking from './components/Booking';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans text-aviation-text bg-aviation-blue selection:bg-aviation-light selection:text-aviation-blue">
      <Header />
      <main>
        <Hero />
        <Features />
        <Programs />
        <About />
        <Fleet />
        <Gallery />
        <Booking />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
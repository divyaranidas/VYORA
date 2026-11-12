
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import HowitWorks from './components/HowitWorks';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Features />
        <Dashboard />
        <HowitWorks />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;

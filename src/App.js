import './App.css';
import NavBar from './components/NavBar';
import CarousalHeroSection from './components/CarousalHeroSection';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Teams from './components/Teams';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <header id='header'>
        <NavBar />
      </header>
      <main>
        <CarousalHeroSection />
        <About />
        <Services />
        <Works />
        <Teams />
        <Testimonials />
        <Pricing />
        <Blogs />
        <Contact />
        <footer id='footer'>
          <Footer />
        </footer>
      </main>
    </div>
  );
}

export default App;

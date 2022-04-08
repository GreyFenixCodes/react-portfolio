import './App.css';
import Navbar from './Navbar';
import Hero from './Hero'
import Languages from './Languages';
import About from './About';
import Samples from './Samples';
import Contact from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Languages />
      <About />
      <Samples />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

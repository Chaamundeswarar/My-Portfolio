import './App.css';
import Resume from './components/Resume'
import Projects from './components/Project';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from "./components/Contact";
import Footer from './components/Footer';
import Education from './components/Education';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Resume/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

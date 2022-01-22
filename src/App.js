import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About'
import Skills from './components/Skills';
import Projects from './components/Projects'
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
    <Router>
    <Navbar />
    </Router>
    <Hero/>
    <About/> 
    <Skills/>
    <Projects/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App

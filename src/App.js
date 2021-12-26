import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import About from './components/About'


const App = () => {
  return (
    <>

    <Router>
      <Navbar />
    </Router>
    <Hero/>
    <About/>

    </>
  )
}

export default App

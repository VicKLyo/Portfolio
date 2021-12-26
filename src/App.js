import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';

const App = () => {
  return (
    <>

    <Router>
      <Navbar />
    </Router>

    <Hero></Hero>

    </>
  )
}

export default App

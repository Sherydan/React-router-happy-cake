import './index.css'
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div className="App">
        <Navbar />
        <About />
        


    </div>
  );
}

export default App;

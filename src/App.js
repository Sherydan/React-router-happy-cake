import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<About />} />
                    <Route exact path="/contact" element={<Contact />} />
                    {/* 404 not found route */}
                    <Route path="*" element={<NotFound />} />
                    
                    
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;


import { NavLink } from "react-router-dom";
import CakeLogo from '../assets/img/cake.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
            
                <div className="navigation-links">
                    {/* we need to add "end" because "/" matches all routes so the active class is not being removed wen we change pages*/}
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/contact" >Contact</NavLink>
                </div>

                <div className="brand">
                    <p>HappyCake</p>
                    <img src={CakeLogo} alt="" id="brand-logo" />
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

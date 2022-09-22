import React from "react";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="navigation-links">
                    <a href="/">Home</a>
                    <a href="/contact">Contact</a>
                </div>

                <div className="brand">
                    <p>HappyCake</p>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="nav-bar">
            <div><Link to ="/stocks">Home Page</Link></div>
            <div><Link to ="/about">About Page</Link></div>
        </div>
    );
}

export default Navbar;



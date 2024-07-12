import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand mb-0 h1">React Boilerplate</Link>
            <div className="ml-auto">
                <Link to="/add-contact">
                    <button className="btn btn-primary">Add Contact</button>
                </Link>
                <Link to="/contact-list">
                    <button className="btn btn-secondary">View Contacts</button>
                </Link>
            </div>
        </nav>
    );
};
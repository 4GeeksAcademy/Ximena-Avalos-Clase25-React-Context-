import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light d-flex justify-content-between align-items-center">
            <Link to="/" className="navbar-brand mb-0 h1">React Boilerplate</Link>
            <div className="d-flex align-items-center gap-2">
                <Link to="/add-contact" className="btn btn-primary">Add Contact</Link>
                <Link to="/contact-list" className="btn btn-secondary">View Contacts</Link>
            </div>
        </nav>
    );
};
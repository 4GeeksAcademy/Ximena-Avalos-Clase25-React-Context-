import React, { useState, useContext } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, Link } from 'react-router-dom';

export const AddContact = () => {
    const { actions } = useContext(Context);
    const [contact, setContact] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        actions.addContact(contact);
        navigate('/contact-list');
    };

    return (
        <div className="container">
            <h2>Add a new contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Full Name"
                        value={contact.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Enter email"
                        value={contact.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Enter phone"
                        value={contact.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Enter address"
                        value={contact.address}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary mt-4">Save</button>
            </form>
            <Link to="/contact-list" className="btn btn-link mt-3">or get back to contacts</Link>
        </div>
    );
};
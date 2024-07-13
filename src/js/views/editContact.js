import React, { useState, useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, useParams, Link } from 'react-router-dom';

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { index } = useParams();
    const [contact, setContact] = useState(null); 
    const navigate = useNavigate();

    useEffect(() => {
        if (store.contacts && store.contacts[index]) {
            setContact(store.contacts[index]);
        } else {
            navigate('/contact-list');
        }
    }, [store.contacts, index, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact({ ...contact, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (contact) {
            actions.updateContact(index, contact);
            navigate('/contact-list');
        }
    };

    if (!contact) {
        return <div>Loading...</div>; 
    }

    return (
        <div className="container">
            <h2>Edit contact</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
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
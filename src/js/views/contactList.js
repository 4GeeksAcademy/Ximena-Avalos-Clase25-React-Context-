import React, { useEffect, useContext, useState } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { ContactCard } from '../component/contactCard';

export const ContactList = () => {
    const { store, actions } = useContext(Context);
    const [showConfirm, setShowConfirm] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);

    useEffect(() => {
        actions.getContacts();
    }, []);

    useEffect(() => {
        console.log('Store contacts:', store.contacts); 
    }, [store.contacts]);

    const handleDelete = (index) => {
        setShowConfirm(true);
        setContactToDelete(index);
    };

    const confirmDelete = () => {
        actions.deleteContact(contactToDelete);
        setShowConfirm(false);
    };

    const cancelDelete = () => {
        setShowConfirm(false);
        setContactToDelete(null);
    };

    return (
        <div className="container">
            <h2>Contact List</h2>
            <Link to="/add-contact" className="btn btn-success mb-3">Add new contact</Link>
            <ul className="list-group">
                {Array.isArray(store.contacts) && store.contacts.length > 0 ? (
                    store.contacts.map((contact, index) => (
                        <ContactCard 
                            key={index}
                            contact={contact}
                            index={index}
                            onDelete={() => handleDelete(index)}
                        />
                    ))
                ) : (
                    <li className="list-group-item">No contacts found</li>
                )}
            </ul>
            {showConfirm && (
                <div className="confirmation-modal">
                    <p>Are you sure? If you delete this thing the entire universe will go down!</p>
                    <button onClick={cancelDelete} className="btn btn-secondary">Oh no!</button>
                    <button onClick={confirmDelete} className="btn btn-danger">Yes baby!</button>
                </div>
            )}
        </div>
    );
};
import React from "react";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact, index, onDelete }) => {
    return (
        <li className="list-group-item">
            <div className="d-flex justify-content-between">
                <img src="https://via.placeholder.com/150" alt="Contact" className="rounded-circle mr-3" />
                <div>
                    <strong>{contact.name}</strong>
                    <p>{contact.address}</p>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
                <div>
                    <Link to={`/edit-contact/${index}`} className="btn btn-warning mr-2">Edit</Link>
                    <button className="btn btn-danger" onClick={onDelete}>Delete</button>
                </div>
            </div>
        </li>
    );
};
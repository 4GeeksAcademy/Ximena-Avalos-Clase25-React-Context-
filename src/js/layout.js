import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/scrollToTop';

import { Home } from './views/home';
import { Demo } from './views/demo';
import { Single } from './views/single';
import injectContext from './store/appContext';

import { Navbar } from './component/navbar';
import { Footer } from './component/footer';
import { AddContact } from './views/addContact'; 
import { ContactList } from './views/contactList'; 
import { EditContact } from './views/editContact'; 

const Layout = () => {
    const basename = process.env.BASENAME || "";

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/demo" element={<Demo />} />
                        <Route path="/single/:theid" element={<Single />} />
                        <Route path="/add-contact" element={<AddContact />} />
                        <Route path="/contact-list" element={<ContactList />} />
                        <Route path="/edit-contact/:index" element={<EditContact />} /> {}
                        <Route path="*" element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
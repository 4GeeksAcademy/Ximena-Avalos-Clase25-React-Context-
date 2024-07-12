const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
            contacts: [] 
        },
        actions: {
            changeColor: (index, color) => {
                const store = getStore();
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });
                setStore({ demo: demo });
            },
            addContact: async (contact) => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/Ximena%C2%B4s/contacts', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(contact)
                    });
                    if (!response.ok) {
                        throw new Error('Error creating contact');
                    }
                    const data = await response.json();
                    const store = getStore();
                    const updatedContacts = Array.isArray(store.contacts) ? [...store.contacts, data] : [data];
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error("Error creating contact:", error);
                }
            },
            deleteContact: (index) => {
                const store = getStore();
                const updatedContacts = store.contacts.filter((_, i) => i !== index);
                setStore({ contacts: updatedContacts });
            },
            updateContact: async (index, updatedContact) => {
                try {
                    const store = getStore();
                    const contactId = store.contacts[index].id;
                    const response = await fetch(`https://playground.4geeks.com/contact/agendas/Ximena%C2%B4s/contacts/${contactId}`
                        , {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(updatedContact)
                    });
                    if (!response.ok) {
                        throw new Error('Error updating contact');
                    }
                    const data = await response.json();
                    const updatedContacts = store.contacts.map((contact, i) => (i === index ? data : contact));
                    setStore({ contacts: updatedContacts });
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            },
            getContacts: async () => {
                try {
                    const response = await fetch('https://playground.4geeks.com/contact/agendas/Ximena%C2%B4s/contacts');
                    const data = await response.json();
                    const contactsArray = data.contacts || data; 
                    if (!Array.isArray(contactsArray)) {
                        throw new Error('Data fetched is not an array');
                    }
                    setStore({ contacts: contactsArray });
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            }
        }
    };
};

export default getState;
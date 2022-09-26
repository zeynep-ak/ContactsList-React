import { useState, useEffect } from 'react'

import List from './List'

import Form from '../Form'

function Contacts() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Zeynep",
            phone_number: 123,
        },
        {
            fullname: "Ali",
            phone_number: 456,
        },
        {
            fullname: "Ayşe",
            phone_number: 789,
        }
    ]);

    useEffect(() => {
        console.log(contacts);
    }, [contacts]);

    return (
        <div id='container'>

            <h1 id='main_heading'>CONTACTS</h1>

            <List contacts={contacts} />

            <Form setContacts={setContacts} contacts={contacts} />
        </div>
    )
}

export default Contacts
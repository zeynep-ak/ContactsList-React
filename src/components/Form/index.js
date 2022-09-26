import { useState } from "react";

function Form({ setContacts, contacts }) {

    const [form, setForm] = useState({ fullname: '', phone_number: '' });

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        if (form.fullname === '' || form.phone_number === '') {
            return false;
        }

        setContacts([...contacts, form]);

        setForm({ fullname: '', phone_number: '' }); // Input eklendikten sonra formu temizle

    };

    return (

        <form onSubmit={onSubmit}>

            <div>
                <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput}></input>
            </div>

            <div>
                <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}></input>
            </div>

            <div className="btn">
                <button>Add</button>
            </div>

        </form>
    )
}

export default Form
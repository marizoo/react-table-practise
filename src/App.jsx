import React, { useState } from 'react'
import {nanoid} from 'nanoid'
import styles from './Style.module.css'
import data from './mock-data.json'
import EditableRow from './components/EditableRow'
import ReadOnlyRow from './components/ReadOnlyRow'

const App = () => {
  const {container,addForm,  form, table,button, thead, thtd, title, input} = styles;

  // ? the states needed
  const [contacts, setContacts] = useState(data);
  const [editContactId, setEditContactId] = useState(null);
  const [addFormData, setAddFormData] = useState({
    fullName: '',
    address: '',
    phoneNumber: '',
    email: '',
  })


  // ? the input handle for data binding
  const handleAddInput = (ev) => {
    ev.preventDefault();
    
    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const newAddedContact = {...addFormData};
    newAddedContact[fieldName] = fieldValue;

    setAddFormData(newAddedContact);
  }


  // ? the form submission handles
  const submitAddContact = (ev) => {
    ev.preventDefault();

    const newContactAdded = {
      id: nanoid(),
      fullName: addFormData.fullName,
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email,
    }

    const currentAndNewContact = [...contacts, newContactAdded];
    setContacts(currentAndNewContact);
   
  }

  // ? delete contacts
  const handleDeleteContact = (contactId) => {
    const toDeleteContact = [...contacts];

    const index = contacts.findIndex(contact => contact.id === contactId);

    toDeleteContact.splice(index, 1);

    setContacts(toDeleteContact);
   
  }


  return (
  
    <div className={container}>
      <form className={form}>
        <table className={table}>
            <thead className={thead}>
              <th className={thtd}>Name</th>
              <th className={thtd}>Address</th>
              <th className={thtd}>Phone Number</th>
              <th className={thtd}>Email</th>
              <th className={thtd}>Actions</th>
            </thead>

            <tbody>
                {/* <EditableRow /> */}
                {contacts.map(contact => (
                <ReadOnlyRow key={contact.id} contact={contact} onDeleteContact={handleDeleteContact}/>
                ))}
            </tbody>
        </table>
      </form>
      
      <h2 className={title}>Add New Contact</h2>
        <form className={addForm} onSubmit={submitAddContact}>
          <input onChange={handleAddInput} className={input} type="text" name="fullName" placeholder='Enter full name...' required />
          <input onChange={handleAddInput} className={input} type="text" name="address" placeholder='Enter address...' required />
          <input onChange={handleAddInput} className={input} type="text" name="phoneNumber" placeholder='Enter phone number...' required />
          <input onChange={handleAddInput} className={input} type="text" name="email" placeholder='Enter email...' required />
          <button type="submit" className={button}>Add</button>
        </form>
      
    </div>
  )
}

export default App

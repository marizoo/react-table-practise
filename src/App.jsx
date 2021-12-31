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
 const [editFormData, setEditFormData] = useState({
   fullName: '',
   address: '',
   phoneNumber: '',
   email: '',
 })

  // ? the input handle for data binding: ADD
  const handleAddInput = (ev) => {
    ev.preventDefault();
    
    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const newAddedContact = {...addFormData};
    newAddedContact[fieldName] = fieldValue;

    setAddFormData(newAddedContact);
  }

    // ? the input handle for data binding: EDIT
  const handleEditInput = (ev) => {
    ev.preventDefault();

    const fieldName = ev.target.getAttribute('name');
    const fieldValue = ev.target.value;

    const editedContacts = {...editFormData};
    editedContacts[fieldName] = fieldValue;

    setEditFormData(editedContacts);
  }

  // ? the ADD form submission handles
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

  // ? the EDIT form submission handles
  const submitEditContact = (ev) => {
    ev.preventDefault()

    const editedContact = {
      id: editContactId,
      fullName : editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email,
    }

    const currentContacts = [...contacts];
    const index = contacts.findIndex(contact => contact.id === editContactId);
    
    currentContacts[index] = editedContact;

    setContacts(currentContacts);
    setEditContactId(null);
  }

  // ? delete contacts
  const handleDeleteContact = (contactId) => {
    const toDeleteContact = [...contacts];

    const index = contacts.findIndex(contact => contact.id === contactId);

    toDeleteContact.splice(index, 1);

    setContacts(toDeleteContact);
  }

  // ? Edit contacts
  const handleEditContact = (ev, contact) => {
    ev.preventDefault();
    setEditContactId(contact.id);

    const formValue = {
      fullName: contact.fullName,
      address: contact.address,
      phoneNumber : contact.phoneNumber,
      email: contact.email,
    }

    setEditFormData(formValue);
  }

   // ? Cancel Button
  const handleCancel = () => {
    setEditContactId(null);
  }


  return (
  
    <div className={container}>
      <form className={form} onSubmit={submitEditContact}>
        <table className={table}>
            <thead className={thead}>
              <th className={thtd}>Name</th>
              <th className={thtd}>Address</th>
              <th className={thtd}>Phone Number</th>
              <th className={thtd}>Email</th>
              <th className={thtd}>Actions</th>
            </thead>

            <tbody>
              {contacts.map(contact => (
                <>
                  {editContactId === contact.id
                    ?  <EditableRow 
                        editFormData={editFormData}
                        onHandleEditInput={handleEditInput}
                        onHandleCancel={handleCancel}
                      />
                    : <ReadOnlyRow 
                        key={contact.id} 
                        contact={contact} 
                        onEditContact={handleEditContact}
                        onDeleteContact={handleDeleteContact}/>
                    }
                </>
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

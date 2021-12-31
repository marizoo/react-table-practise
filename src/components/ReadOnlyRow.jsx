import React from 'react'
import {thtd, button} from '../Style.module.css'

const ReadOnlyRow = ({contact, onDeleteContact}) => {
    return (
        <tr>
           <td className={thtd}>{contact.fullName}</td> 
           <td className={thtd}>{contact.address}</td> 
           <td className={thtd}>{contact.phoneNumber}</td> 
           <td className={thtd}>{contact.email}</td> 
           <td className={thtd}>
               <button className={button}>Edit</button>
               <button onClick={() => onDeleteContact(contact.id)} className={button}>Delete</button>
           </td>
        </tr>
    )
}

export default ReadOnlyRow

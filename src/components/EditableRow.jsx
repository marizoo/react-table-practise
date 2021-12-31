import React from 'react'
import {input, button} from '../Style.module.css'

const EditableRow = ({onHandleEditInput, editFormData, onHandleCancel}) => {
    return (
        <tr>
           <td>
                <input 
                className={input}
                type="text"
                name="fullName"
                required
                placeholder="Enter full name ..."
                value={editFormData.fullName}
                onChange={onHandleEditInput}
                />   
            </td> 
           <td>
                <input 
                 className={input}
                type="text"
                name="address"
                required
                placeholder="Enter address ..."
                value={editFormData.address}
                onChange={onHandleEditInput}
                />   
            </td> 
           <td>
                <input 
                 className={input}
                type="text"
                name="phoneNumber"
                required
                placeholder="Enter phone number ..."
                value={editFormData.phoneNumber}
                onChange={onHandleEditInput}
                />   
            </td> 
           <td>
                <input 
                 className={input}
                type="text"
                name="email"
                required
                placeholder="Enter email ..."
                value={editFormData.email}
                onChange={onHandleEditInput}
                />   
            </td> 
            <td>
                <button className={button} type="submit">Save</button>
                <button className={button} onClick={onHandleCancel} type="button">Cancel</button>
            </td>
           
        </tr>
    )
}

export default EditableRow

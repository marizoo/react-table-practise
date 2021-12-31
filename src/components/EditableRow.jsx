import React from 'react'

const EditableRow = () => {
    return (
        <tr>
           <td>
                <input 
                type="text"
                name="fullName"
                required
                placeholder="Enter full name ..."
                />   
            </td> 
           <td>
                <input 
                type="text"
                name="address"
                required
                placeholder="Enter address ..."
                />   
            </td> 
           <td>
                <input 
                type="text"
                name="phoneNumber"
                required
                placeholder="Enter phone number ..."
                />   
            </td> 
           <td>
                <input 
                type="text"
                name="email"
                required
                placeholder="Enter email ..."
                />   
            </td> 
           
        </tr>
    )
}

export default EditableRow

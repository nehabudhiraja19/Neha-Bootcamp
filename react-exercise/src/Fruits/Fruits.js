import React from 'react'
const fruit=(props)=>{
    return (
        
        <tr className="Fruits">
            <td >{props.name} </td>
            <td >{props.quantity}</td> 
            <td><button className="button" onClick={props.click}>Delete</button></td>
        </tr>

    
    )
}

export default fruit;

import React, { useState } from 'react'

export default function UseStateWithObject() {

    const[name,setName]=useState({firstName:'',lastName:''})


    return (
        <div className="App">
            <form>
               FirstName : <input type="text"
               value={name.firstName}
               onChange={event =>{setName({...name,firstName:event.target.value})}}
               />
                <br />

                <br />

               LastName : <input type="text"
               value={name.lastName}
               onChange={event =>{setName({...name,lastName:event.target.value})}} />
                <h2>your firstName is - {name.firstName}</h2>
                <h2>your lastName is - {name.lastName}</h2>

            </form>
        </div>
    )
}

import React from 'react'
import {useState} from 'react'
export default function HooksCounter() {

    const [count,setCount]=useState(0)
    return (
        <div>
            <button onClick={()=>{setCount(count-1)}}>Decrement count is {count}</button>
        </div>
    )
}

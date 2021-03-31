import React, { useEffect, useState } from 'react'

export default function HookMouse() {
    
    const [x,setX]=useState(0)
    const [y,setY]=useState(0)

 let logMousePosition =(e)=>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }
   useEffect(() => {
       console.log("UseEffect called")
       window.addEventListener('mousemove',logMousePosition)
       return ()=>{
           console.log("componentwill unmount code")
           window.removeEventListener('mousemove',logMousePosition)
       }
   },[])

    return (
        <div>
            X Coordinate value is - {x}
            <br />
            Y Coordinate value is - {y}
        </div>
    )
}

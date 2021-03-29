import React,{useState} from 'react'

export default function HooksCounterTwo() {
    const initialCount=0
    const[count,setCount]=useState(initialCount)

   const incrementFive=()=>{
                for (let i=0;i<5;i++){
                    // setCount(count+1)
                    setCount(demo=>demo+1)
    }
}

    return (

        <div>
            Count is {count}
            <button onClick={()=>{setCount(initialCount)}}>Reset</button>
            <button onClick={()=>{setCount(d=>d+1)}}>Incremetn</button>
            <button onClick={()=>{setCount(de=>de-1)}}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

import React, { useReducer } from 'react'


const initialState=0
    const reducer =(state,action)=>{

        switch(action){
            case 'increment':
                return state+1
            case 'decrement':
                return state-1
                console.log(state)
            case 'reset':
                return initialState
            default:
                return state
                
        }
    }
function CountReducer() {

    

    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            Count is - {count}<br />
            <button onClick={()=>dispatch('increment')}>Increment</button><br /><br />
            <button onClick={()=>dispatch('decrement')}>Decrement</button><br /><br />
            <button onClick={()=>dispatch('reset')}>Reset</button>

        </div>
    )
}

export default CountReducer

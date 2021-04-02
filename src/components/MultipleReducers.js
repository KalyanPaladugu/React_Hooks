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
function MultipleReducers() {

    

    const [count,dispatch]=useReducer(reducer,initialState)
    const [countTwo,dispatchTwo]=useReducer(reducer,initialState)
    return (
        <div>
            Count is - {count}<br />
            <button onClick={()=>dispatch('increment')}>Increment</button>
            <button onClick={()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <br />
        Count is - {countTwo}<br />
        <button onClick={()=>dispatchTwo('increment')}>Increment</button>
        <button onClick={()=>dispatchTwo('decrement')}>Decrement</button>
        <button onClick={()=>dispatchTwo('reset')}>Reset</button>

    </div>
    )
}

export default MultipleReducers

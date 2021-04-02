import React, { useReducer } from 'react'


const initialState={
    firstCounter:0,
    secondCounter:10
}
    const reducer =(state,action)=>{

        switch(action.type){
            case 'increment':
                return {...state,firstCounter:state.firstCounter+action.value}
            case 'decrement':
                return {...state,firstCounter:state.firstCounter-action.value}
                console.log(state)
            case 'increment2':
                return {...state,secondCounter:state.secondCounter+action.value}
            case 'decrement2':
                return {...state,secondCounter:state.secondCounter-action.value}    
            case 'reset':
                return initialState
            default:
                return state
                
        }
    }
function ComplexReducer() {

    

    const [count,dispatch]=useReducer(reducer,initialState)
    return (
        <div>
            Count is - {count.firstCounter}<br />
            Count is - {count.secondCounter}<br />
            <button onClick={()=>dispatch({type: 'increment',value:1})}>Increment</button><br /><br />
            <button onClick={()=>dispatch({type: 'decrement',value:1})}>Decrement</button><br /><br />
            <button onClick={()=>dispatch({type: 'increment',value:5})}>Increment by 5 </button><br /><br />
            <button onClick={()=>dispatch({type: 'decrement',value:5})}>Decrement by 5 </button><br /><br />
            <button onClick={()=>dispatch({type: 'increment2',value:10})}>Increment by 10 </button><br /><br />
            <button onClick={()=>dispatch({type: 'decrement2',value:10})}>Decrement by 10</button><br /><br />
            
            <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>

        </div>
    )
}

export default ComplexReducer

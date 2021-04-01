import React from 'react'
import './App.css';
import ComponentC from './components/ComponentC'


export  const UserContext=React.createContext()
export const ChanelContext=React.createContext()
function App() {

 

  return (
    <div className="App">
       <UserContext.Provider value ={'kalyan'}>
         <ChanelContext.Provider value={'Mr.Mk'}>
         <ComponentC />
         </ChanelContext.Provider>
         
       </UserContext.Provider>
    </div>
  );
}

export default App;

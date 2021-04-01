import React from 'react'
import {UserContext} from '../App'
export default function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                    {
                        user => {
                            return <div>
                              <h1>User Name is  {user}</h1> 
                            </div>
                        }
                    }
            </UserContext.Consumer>
        </div>
    )
}

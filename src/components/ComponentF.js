import React from 'react'
import {ChanelContext, UserContext} from '../App'
export default function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                    {
                        user => {
                            return (
                                <ChanelContext.Consumer>
                                   {
                                       chanel =>{
                                           return (
                                               <h1> User is {user} and Chanel is {chanel}</h1>
                                           )
                                       }
                                   }
                                </ChanelContext.Consumer>
                            )
                            
                           
                        }
                    }
            </UserContext.Consumer>
        </div>
    )
}

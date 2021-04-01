import React,{useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext,ChanelContext} from '../App'


export default function ComponentE() {
    const user=useContext(UserContext)
const chanel=useContext(ChanelContext)
    return (
        <div>
            {user} - {chanel}
            <ComponentF />
        </div>
    )
}

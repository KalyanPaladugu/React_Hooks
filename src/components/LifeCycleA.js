import React, { Component } from 'react'

export default class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:"Kalyan Ram"
        }
        console.log("LifecycleA cnstrucotr")
    }
    componentDidMount(){
        console.log("LifeCycle Didmount")
    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA derivedStatefromProps");
        return null
    }
    
   
    render() {
        console.log("Rendering")
        return (
            
            <div>
                <h1>
                   { this.state.name}
                </h1>
            </div>
        )
    }
}

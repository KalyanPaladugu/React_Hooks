import React, { Component } from 'react'

export default class ClassCounter extends Component {

    constructor(){
        super();
        this.state={
            count:0
        }
    }

    increment=()=> {
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
    
     
        return (
            <div>
                <h1>Score is {this.state.count}</h1>
                <button onClick={this.increment}>Increment</button>
            </div>
        )
    }
}


import React, { Component } from 'react'

export class ClassMouse extends Component {
constructor(props) {
    super(props)

    this.state = {
         x:0,
         y:0
    }
}


    render() {
        return (
            <div>
                X Coordinate value is  - {this.state.x}
                <br />
                Y Coordinate value is  - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse

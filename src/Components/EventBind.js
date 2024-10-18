import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)

        this.state = {
            message: 'Hello'
        }
    }

  clickHandler = () =>{
    this.setState({
        message: this.state.message === 'GoodBye' ? 'Hello' : 'GoodBye'
    })
  }

    render() {
        const { message } = this.state
        return (
            <div>
                <h1>{message}</h1>
                <button onClick={this.clickHandler}>
                    Click
                </button>
            </div>
        )
    }
}

export default EventBind

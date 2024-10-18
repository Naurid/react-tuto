import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    Increment() {
        this.setState({
            count: this.state.count + 1
        })


    }
    render() {
        const {count} = this.state
        return (
            <div>
                <div>Count = {count}</div>
                <button onClick={() => this.Increment()}>
                    +1
                </button>
            </div>
        )
    }
}

export default Counter

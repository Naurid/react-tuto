import React, { Component } from 'react'

class UserGreetings extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }
    
    toggleBool = () =>{
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
    }
  render() {
    let message = this.state.isLoggedIn ? `Welcome ${this.props.name}` : 'Welcome unknown'
    let logMessage = this.state.isLoggedIn ? 'Log Out' : 'Log In'
    return (
      <div>
        <div>{message}</div>
        <button onClick={this.toggleBool}> {logMessage}</button>
      </div>
    )
  }
}

export default UserGreetings

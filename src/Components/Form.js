import React, { Component } from "react";

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName:'',
         comments:'',
         topic:'react'
      }
    }
    
    handleUserNameChange = (event) =>{
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = (event) =>{
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange= (event) =>{
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event)=>{
        alert(`${this.state.userName} on the topic of ${this.state.topic} : ${this.state.comments}`)
        event.preventDefault()
    }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>UserName</label>
          <input  type="text" value = {this.state.userName} onChange={this.handleUserNameChange}/>
        </div>
        <div>
            <label>Comments</label>
            <textarea value = {this.state.comments} onChange={this.handleCommentsChange}> </textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

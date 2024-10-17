import './App.css';
import { Component } from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
class App extends Component{
  render(){
    return (
      <div className="App">
        <Greet />
        <Welcome />
      </div>
    );
  } 
}

export default App;

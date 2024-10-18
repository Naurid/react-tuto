import './App.css';
import { Component } from 'react';
import HoverCounter from './Components/HoverCounter';
import ClickCounter from './Components/ClickCounter';
class App extends Component{
  render(){
    return (
      <div className="App">
        <HoverCounter/>
        <ClickCounter/>
      </div>
    );
  } 
}

export default App;

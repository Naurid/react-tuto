import './App.css';
import { Component } from 'react';
import ComponentC from './Components/ComponentC';
import { UserProvider } from './Components/userContext';
import { LastNameProvider } from './Components/lastNameContext';
class App extends Component{
  render(){
    return (
      <div className="App">
        <UserProvider value="Gabor">
        <LastNameProvider value="Vilics">
          <ComponentC />
        </LastNameProvider>
        </UserProvider>
      </div>
    );
  } 
}

export default App;

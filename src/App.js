import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.yourName = "Panda"
    this.state = {}
  }

  sayHello(name){
    return "Hello " + name
  }


  render() {
    const myName = "Rolando"
    return (
      <div className="App">
        <h2>Playing around with components: {this.yourName}</h2>
      </div>
    );
  }
}

export default App;
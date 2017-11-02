import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Prop number is: {this.props.propNumber}</h3>
        <h3>Prop string is: {this.props.propString}</h3>
        <h3>Prop object is: {this.props.propObject.obj1}</h3>
        <Parent />
      </div>
    );
  }
}


App.propTypes = {
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}

App.defaultProps = {
  propNumber: 3,
  propString: "This is propString",
  propObject: {
    obj1: "I am obj1",
    obj2: "I am obj2",
    obj3: "I am obj3"
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <h2>Just some info</h2>
        <Child msg="I am a message in the parent" number = "123456" animals = {this.props.animals} />
      </div>
    );
  }
}


Parent.defaultProps = {
  animals: ["lion", "cat", "dog"]
}

class Child extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h3>I am from child component</h3>
        <p>{this.props.msg}</p>
        <p>{this.props.number}</p>
        <p>{this.props.animals.map((item, i) => {
          return " "+ item
        })}</p>
      </div>
    );
  }
}

export default App;

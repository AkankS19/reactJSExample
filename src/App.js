import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    person : [
      {
        name : "max", age: 28
      },
      {
        name: 'akanksha', age : 27
      }
    ]
  }

  switchNameHandler = () =>{
    console.log("click");
    // this.person[0].name="hello world";
    this.setState({
      person : [
        {
          name : "deepti", age: 28
        },
        {
          name: 'akanksha', age : 27
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Hi, I am react app.</h1>
        <p>It is working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} >My hobbies : racing </Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}/>
      </div>
    );
    // return React.createElement('div',{className : 'App'}, React.createElement('h1',null, 'Hi i\'m a react app'));
  }
}

export default App;

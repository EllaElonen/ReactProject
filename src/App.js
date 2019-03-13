import React, { Component } from 'react';
import logo from './logo.jpg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: 'Max', age : 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
  //console.log('Was clicked!');
    this.setState({
      persons: [
    {name: 'newName', age : 28},
    {name: 'Manu', age: 29},
    {name: 'Stephanie', age: 27}
    ]
  })
}

  render() {
    return (
      <div className="App">

        <h1>Hello, I´m a React App</h1>
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>

        <h2>This is a register of person objects</h2>

        <button onClick={this.switchNameHandler.bind(this, 'Maximilian')}>Switch name</button>

        <Person 
          name={this.state.persons[0].name}  
          age={this.state.persons[0].age}>
        </Person>

        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilian')}>
        </Person>

        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}>
        </Person>

      </div>
    );
  }
}

export default App;

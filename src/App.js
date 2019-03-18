import React, { Component } from "react";
import logo from "./logo.jpg";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: "Manu", age: 29 },
      { name: "Stephanie", age: 26 }
    ],
    randomPersons: [
      { name: "randomPerson1", age: Math.floor(Math.random() * 30) }
    ]
  };

  switchHandler = (event) => {
    this.setState({
      persons: [
        { name: "newName", age: 29 }, //TODO: This is supposed to be a variable newName that gets the value Maximilian
        { name: "Manu", age: 29 },
        { name: "Stephanie", age: 26 }
      ]
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
    persons: [
      { name: 'Maximilian', age: 28 },
      { name: event.target.value, age: 29 },
      { name: "Stephanie", age: 26 }
    ]
  });
};

  /*randomChangeHandler = (event) => {
    this.setState({
    randomPersons: [
      { name: randomPerson, age: Math.floor(Math.random() * 30)}
    ]
  });
};*/

  render() {
    const style ={
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1>Hello, I´m a React App</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <h2>This is a register of person objects</h2>


        <button 
          style={style}
          onClick={this.switchHandler.bind(this, "Maximilian")}>
          Switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchHandler.bind(this, "Max")}
          changed={this.nameChangeHandler}
        />

        <button 
          style={style}
          onClick={this.switchHandler.bind(this, "Maximilian")}>
          Switch Max
        </button>

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          changed={this.nameChangeHandler}
        />
        
        <Person
          name={this.state.randomPersons[0].name}
          age={this.state.randomPersons[0].age}
          changed={this.randomChangeHandler}
        />

         <button 
            style={style}
            onClick={this.switchHandler.bind(this, "Maximilian")}
            changed={this.randomChangeHandler}>
            Switch random person
        </button>
      </div>
    );
  }
}

export default App;

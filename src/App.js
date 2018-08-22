import React, { Component } from 'react';
import './App.css';

//-------------------------------------------------------------------------
// To Do Example from class. Used to show us how to push to github
//-------------------------------------------------------------------------


class App extends Component {

  state = {
    todos: ["Brush Teeth", "Make Coffee", "Make Breakfast"],
    toDoItem: ""
  };

  handleInputChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
  };

  handleSubmit = event => {
    event.preventDefault();
    const {toDoItem, todos} = this.state;
    if (!toDoItem) return; // Keep empty strings from being added to list
    this.setState({
      todos: [toDoItem, ...todos],
      toDoItem: ""
    })
  };

  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} name="toDoItem" value={this.state.toDoItem} type="text"/>
        <input type="button" value="New ToDo" onClick={this.handleSubmit}/>
        <ul>
          {this.state.todos.map(todo => (
            <li>{todo}</li>
          ))}
        </ul>
      </div>
    );
  };
}

export default App;

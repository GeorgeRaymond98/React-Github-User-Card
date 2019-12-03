import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    // initializes state, and does any explicit bindings
    super();
    this.state = {
      User: {},
      follwers: []
    };
    console.log('Constructor is running!');
  }
  render() {
    return (
      <div>
        <p>working</p>
      </div>
    )
  }
}
export default App;

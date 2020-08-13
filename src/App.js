import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {
  render() {
    return(
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>I exiter learning React</p>
        <Person name="Victor" age="24"/>
        <Person name="My My" age="26">My Hobbies: Read Book</Person>
        <Person name="Cuc Cuc" age="27"/>
      </div>
    )
  }
}

export default App;

import React from 'react';
import './App.css';
import Person from './Person/Person';
class App extends React.Component {
  state = {
    person:
    [ {name: 'Victor', age: 24},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ],
    otherState: null
  }
  switchNameHandle = () => {
    //console.log('Switch Name Click')
    // Solution
    //const person = this.state.person.slice();
    //person[0].name = 'Victor Do'; 
    // person[0].age = '29'
    this.setState({
    // Solution
    //  person: person
    // prolem
    person:
    [ {name: 'Victor Do', age: 29},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ]
    })
  }
  render() {
    return(
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>I exiter learning React</p>
        <button onClick={this.switchNameHandle}>Switch Name</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age={this.state.person[1].age}>
          My Hobbies: Read Book
        </Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}/>
      </div>
    )
  }
}

export default App;

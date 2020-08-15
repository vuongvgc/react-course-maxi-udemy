import React from 'react';
//import {useState} from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';
class App extends React.Component {
  state = {
    person:
    [ {name: 'Victor', age: 24},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ],
    otherState: null,
    User: 'Victor'
  };
  switchNameHandle = (name) => {
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
    [ {name: name, age: 29},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ],
    otherState: this.state.otherState
    })
  }
  changeNameHandle = (event) => {
    this.setState({
      // Solution
      //  person: person
      // prolem
      person:
      [ {name: 'Victor', age: 29},
        {name: event.target.value, age: 26},
        {name: 'Cuc Cuc', age: 27},
      ],
      otherState: this.state.otherState
      })
  }
  changeName = (event) => {
    let name = this.state.User.slice();
    name = event.target.value;
    this.setState({
      User: name
    })
  }
  render() {
    return(
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>I exiter learning React</p>
        <button onClick={this.switchNameHandle.bind(this,'Vuong Do')}>Switch Name</button>
        <Person
        name={this.state.person[0].name} 
        age={this.state.person[0].age}/>
        <Person 
        name={this.state.person[1].name} 
        age={this.state.person[1].age}
        click={() => this.switchNameHandle('Vuong Do')}
        changeName={this.changeNameHandle}>
          My Hobbies: Read Book
        </Person>
        <Person 
        name={this.state.person[2].name} 
        age={this.state.person[2].age}/>
        <div>
          <ol>
            <li>Create TWO new components: UserInput and UserOutput</li>
            <li>UserInput should hold an input element, UserOutput two paragraphs</li>
            <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
            <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
            <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
            <li>Add a method to manipulate the state (=> an event-handler method)</li>
            <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
            <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
            <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
            <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
          </ol>
        </div>
        <div>
          <UserInput value={this.state.User} changleName={this.changeName} />
          <UserOutput UserName ={this.state.User} />
        </div>
      </div>
    )
  }
  }
export default App;

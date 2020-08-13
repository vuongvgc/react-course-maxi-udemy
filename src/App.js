import React from 'react';
import {useState} from 'react';
import './App.css';
import Person from './Person/Person';
function App () {
  const [statePerson, setStatePerson] = useState({
    person:
    [ {name: 'Victor', age: 24},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ],
    otherState: null
  })
  console.log(statePerson);
  const switchNameHandle = (name) => {
    //console.log('Switch Name Click')
    // Solution
    //const person = this.state.person.slice();
    //person[0].name = 'Victor Do'; 
    // person[0].age = '29'
    setStatePerson ({
    // Solution
    //  person: person
    // prolem
    person:
    [ {name: name, age: 29},
      {name: 'My My', age: 26},
      {name: 'Cuc Cuc', age: 27},
    ],
    otherState: statePerson.otherState
    })
  }
  return(
      <div className="App">
        <h1>Hi I'm React</h1>
        <p>I exiter learning React</p>
        <button onClick={switchNameHandle.bind(this,'Vuong Do')}>Switch Name</button>
        <Person
        name={statePerson.person[0].name} 
        age={statePerson.person[0].age}/>
        <Person 
        name={statePerson.person[1].name} 
        age={statePerson.person[1].age}
        click={switchNameHandle}>
          My Hobbies: Read Book
        </Person>
        <Person 
        name={statePerson.person[2].name} 
        age={statePerson.person[2].age}/>
      </div>
    )
  }
export default App;

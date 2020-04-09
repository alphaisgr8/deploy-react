import React, { Component } from 'react';
import People from './People/People'
import './App.css';

class App extends Component {
  state = {
    people: [
        {id:'qwq', name:'Aplha',age:13},
        {id:'wee', name:'Beta',age:34},
        {id:'weds', name:'Gamma',age:46}
      ],
      showPeople: false

  };


  getDetails = (event, id) =>{
    const foundguy = this.state.people.findIndex(homosapiens => {
      return  homosapiens.id=== id;
    });

    const person={...this.state.people[foundguy]};
    person.name=event.target.value;
    
    const persons=[...this.state.people]
    persons[foundguy]=person;
    
    this.setState({people: persons})
  }


  

  togglePeople = ()=>{
    this.setState({showPeople:!this.state.showPeople});
  }



  deleteGuys=(index)=>{
    let newPeople=[...this.state.people];
    newPeople.splice(index,1);
    this.setState({people: newPeople})
  }
  render() {
    let goo=null;
    if(this.state.showPeople)
    {
      goo = (<div>
                {this.state.people.map((guys,index) =>{
              return (<People 
                          key={guys.id} 
                          name={guys.name} 
                          age={guys.age} 
                          changed={(event) => this.getDetails(event,guys.id)} />
                          // click={() => this.deleteGuys(index)}
                          )
                }
          )
        }
      </div>)
    }
      return (  
        <div className='App'>
          <h1>List of People</h1>
          <button onClick={this.togglePeople}>Change</button>
          {goo}
        </div>
      )
    }
}
export default App;

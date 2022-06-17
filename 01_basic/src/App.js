import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  // 1
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // 3
  componentDidMount() { //딱 한번만 실행, mounting
    fetch('https://jsonplaceholder.typicode.com/users') //get API
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return {monsters: users}; //put data to monsters
        },
      )
    ) //json으로 변환된 것은 users로 들어감
  }
  
  // 2
  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={(event) => {
          console.log(event.target.value)
          
          const searchField = event.target.value.toLocaleLowerCase();

          this.setState(() => {
            return {searchField};
          })
        }}/> {/* event handler onChange | event : get event */}
     
        {filteredMonsters.map(
          (monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            );
          }
        )}
      </div>
    );
  }
}

export default App;
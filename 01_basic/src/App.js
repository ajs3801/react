import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() { //딱 한번만 실행, mounting
    fetch('https://jsonplaceholder.typicode.com/users') //get API
    .then((response) => response.json())
    .then((users) => 
      this.setState(
        () => {
          return {monsters: users}; //put data to monsters
        },
        () => {
          console.log(this.state);
        }
      )
    ) //json으로 변환된 것은 users로 들어감
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(
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
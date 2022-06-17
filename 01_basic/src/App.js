import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Linda',
          id: 'xmekkSKEI3'
        },
        {
          name: 'Frank',
          id: 'askkdmwe20DX'
        },
        {
          name: 'Jacky',
          id: '240fKJDJFkow'
        },
        {
          name: 'Strike',
          id: '29kfJSJE0122'
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(
          (monster) => {
            return (<h1 key={monster.id}>{monster.name}</h1>);
          }
        )}
      </div>
    );
  }
}

export default App;
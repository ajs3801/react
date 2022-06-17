import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor() {
    super()

    this.state = {
      name : {firstname : 'An' , secondname : 'js'},
      company : 'groom',
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I'm {this.state.name.firstname} {this.state.name.secondname}, I work in {this.state.company}
          </p>

          <button onClick={() => {
            this.setState({
              name : {firstname : 'Bn' , secondname : 'Ks',
            }}); // shallow merge | re-render it
          }}>
            change name
          </button>

          <button onClick={() => {
            this.setState(
              () => {
                return {
                  name : {firstname : 'Bn' , secondname : 'Ks'},
                };
              },
              
              //call back function
              () => {
                console.log(this.state);
              }
            );
          }}>
            change name 2        
          </button>

        </header>
      </div>
    );
  }
}

export default App;

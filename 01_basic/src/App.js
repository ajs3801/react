import { Component } from 'react';

import CardList from './components/card-list/card-list.component'
import './App.css';

class App extends Component{
  // [First Execution] : 초기값 할당
  constructor() {
    super();
    
    // setState를 호출하는 것이 아닌 this.state으로 초기값을 할당해야함
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  // [Third Execution] : 외부 API를 받아옴
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
  
  //init only once
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return {searchField}; // searchField : searchField
      }
    );
  };

  // DOM을 update할 때마다 render함수를 call
  render() {
    // use this variable
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    // const { onSearchChange } = this.onSearchChange;로는 불가능?

    const filteredMonsters = monsters.filter((monster) => {
      // monster의 이름이 searchField를 포함하고 있으면 filteredMonsters에 넣음
      return monster.name.toLocaleLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange}/> {/* event handler onChange | event : get event */}
     
        {/* {filteredMonsters.map(
          (monster) => {
            return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
            );
          }
        )} */}
        <CardList />
      </div>
    );
  }
}

export default App;
import { useState , useEffect } from 'react'

//import components
import SearchBox from './components/search-box/search-box.components';
import CardList from './components/card-list/card-list.component'

import './App.css';

// 전체 함수가 모두 render됨
const App = () => {
  console.log('render');

  //searchField is string
  const [searchField, setSearchField] = useState(''); //assign two values to array [value, setValue]
  const [monsters,setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonseters] = useState(monsters);
  const [stringField, setStringField] = useState('');

  //mount
  useEffect(() => {
    //effect fired only ONCE!
    fetch('https://jsonplaceholder.typicode.com/users') //get API
    .then((response) => response.json())
    .then((users) => setMonsters(users)); //json으로 변환된 것은 users로 들어감
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonseters(newFilteredMonsters);

    console.log('effect is firing');

  }, [monsters, searchField]) //call this when monsters or searchField is changed
  // console.log( {searchField} );

  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase(); //get search text input
    
      setSearchField(searchFieldString); //update할 searchFieldString이 이전 searchFieldString과 같으면 re-render가 일어나지 않음
  };

  const onStringChange = (event) => {
    setStringField(event.target.value);
  };

  return (
    <div className="App">
      <h1 className='app-title'>Monsters Rolodex</h1>

      {/* give props (can pass anything)*/}
      {/* className, onChangeHandler, placeholder, monsters가 모두 props에 해당함 */}

      <SearchBox 
        className = 'monsters-search-box'
        onChangeHandler = {onSearchChange} 
        placeholder = 'search monsters'
      />
        
      <SearchBox 
        onChangeHandler = {onStringChange} 
        placeholder = 'set string'
      />

      <CardList monsters = {filteredMonsters}/>
    </div>
  );
}

// class App extends Component{
//   // [First Execution] : 초기값 할당
//   constructor() {
//     super();
    
//     // setState를 호출하는 것이 아닌 this.state으로 초기값을 할당해야함
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   //[important!!] : react renders on mounts and re-renders whenever props change and set state gets called!
//   // [Third Execution] : 외부 API를 받아옴
//   componentDidMount() { //딱 한번만 실행, mounting
//     fetch('https://jsonplaceholder.typicode.com/users') //get API
//     .then((response) => response.json())
//     .then((users) => 
//       this.setState( //whenever setState is called, re render
//         () => {
//           return {monsters: users}; //put data to monsters
//         },
//       )
//     ) //json으로 변환된 것은 users로 들어감
//   }
  
//   //init only once (not an anonymous function)
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase(); //get search text input

//     this.setState(() => {
//         return {searchField}; // searchField : searchField
//       }
//     );
//   };

//   // DOM을 update할 때마다 render함수를 call
//   render() {
//     // use this variable
//     const { monsters, searchField } = this.state; //this.state에 있는 monsters와 searchField를 받아옴
//     const { onSearchChange } = this; //현재 클래스의 onSearchChange를 받아옴
//     // const { onSearchChange } = this.onSearchChange;로는 불가능?

//     //monsters에 있는 monster 중에 searchField를 포함하는 monster만을 걸러 filteredMonsters에 추가
//     const filteredMonsters = monsters.filter((monster) => {
//       // monster의 이름이 searchField를 포함하고 있으면 filteredMonsters에 넣음
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     })
    
//     //마지막으로 html tag 반환
//     return (
//     );
//   }
// }

export default App;
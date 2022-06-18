import { Component } from 'react';

class CardList extends Component {
  //rebder call twice in first-execution
  render() {
    // console.log(this.props); //access props
    console.log(this.props.monsters);

    const { monsters } = this.props;

    return (
      // This is all encapsulated in one parental component or parental HTML tag
      // All components must be just onc component
      <div>
        {monsters.map( (monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>

      //this might occur ERROR
      // <div>

      // </div>
    );
  }
}

export default CardList;
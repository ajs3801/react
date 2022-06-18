import { Component } from 'react';
import './card-list.styles.css'
import Monster from '../monster-box/monster.component';

class CardList extends Component {
  //rebder call twice in first-execution
  render() {
    // console.log(this.props); //access props
    console.log(this.props.monsters);

    const { monsters } = this.props;

    return (
      // This is all encapsulated in one parental component or parental HTML tag
      // All components must be just onc component
      <div className='card-list'>
        {monsters.map((monster) => {

          return (
            <Monster monster= { monster }/>
          )
        })}
      </div>
    );
  }
}

export default CardList;
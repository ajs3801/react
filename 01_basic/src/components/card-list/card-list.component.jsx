import './card-list.styles.css'
import Monster from '../monster-box/monster.component';

const CardList = ({monsters}) => {
  //rebder call twice in first-execution
  // This is all encapsulated in one parental component or parental HTML tag
  // All components must be just onc component
  
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        console.log('call card-list');

        return (<Monster monster= { monster }/>);
      })}
    </div>
  );
};

export default CardList;
import { Component } from 'react'

class CardList extends Component {

  render() {
    return (
      // This is all encapsulated in one parental component or parental HTML tag
      // All components must be just onc component
      <div>
        <h1>Hello I'm the CardList Component</h1>
        <div>
          <p>text</p>
        </div>

        <div></div>
      </div>

      //this might occur ERROR
      // <div>

      // </div>
    );
  }
}

export default CardList;
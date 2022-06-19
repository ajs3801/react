import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component {
  render() {
    return (
      <input 
          className= {`search-box ${this.props.className}`}
          type='search'
          placeholder= {this.props.placeholder}
          onChange = {this.props.onChangeHandler}
      /> //event handler onChange | event : get event 
    );
  }
}

export default SearchBox;
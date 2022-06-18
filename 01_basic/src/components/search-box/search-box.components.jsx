import { Component } from 'react';

class SearchBox extends Component {
  render() {
    return (
      <input 
          className= {this.props.className}
          type='search' 
          placeholder= {this.props.placeholder}
          onChange = {this.props.onChangeHandler}
      /> //event handler onChange | event : get event 
    );
  }
}

export default SearchBox;
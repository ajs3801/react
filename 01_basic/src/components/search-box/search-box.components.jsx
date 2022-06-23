import './search-box.styles.css';

const SearchBox = ({className, placeholder, onChangeHandler}) => {
  
  return (
    <input 
      className= {`search-box ${className}`}
      type='search'
      placeholder= {placeholder}
      onChange = {onChangeHandler}
    /> //event handler onChange | event : get event 
  );
}

export default SearchBox;
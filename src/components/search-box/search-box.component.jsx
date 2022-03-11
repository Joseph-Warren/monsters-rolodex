import './search-box.styles.css';

const SearchBox = ({placeholder, onChangeHandler}) => (
    <input
      type='search'
      className='search-box'
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );

export default SearchBox;

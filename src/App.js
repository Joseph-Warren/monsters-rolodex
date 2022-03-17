import { useState, useEffect } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  const [searchField, setSeachField] = useState('');
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((users) => setMonsters(users));
  },[]);

  useEffect (() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSeachField(searchFieldString);
  }

  const onChangeTitle = (event) => {
    const titleString = event.target.value;
    setTitle(titleString);
  }

  return(
    <div className="App">
      <h1 className='app-title'>{title }</h1>
      <SearchBox
        className='monster-search=box'
        placeholder='search monster'
        onChangeHandler={ onSearchChange }
      />
      <br />
      <SearchBox
        placeholder='Title Name'
        onChangeHandler={ onChangeTitle }
      />
      <CardList monsters={ filteredMonsters } />
    </div>
    );
}
 export default App;

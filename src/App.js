
import style from '../src/Appar.module.css'
import { useState } from 'react'
import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'


function App () {
  const [characters, setCharacters] = useState([])
  
  function searchCharacters(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }
  return (
    <div className={style.div}>
    <header className={style.header}>
      <img className={style.img} src='https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280' alt='morit foto'/>
      
    </header>
      <div className={style.search}>
        <SearchBar
          onSearch={searchCharacters}
        />
      </div>
      
      <div>
        <Cards
          characters={characters}
        />
      </div>
     
    </div>
  )
}

export default App

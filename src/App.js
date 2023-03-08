
import style from '../src/Appar.module.css'

import Cards from './components/cards/Cards.jsx'
import SearchBar from './components/searchBar/SearchBar.jsx'
import characters from './data.js'

function App () {
  return (
    <div className={style.div}>
    <header className={style.header}>npm
      <img className={style.img} src='https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280' alt='morit foto'/>
      
    </header>
      <div className={style.search}>
        <SearchBar
          onSearch={(characterID) => window.alert(characterID)}
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

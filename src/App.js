import style from '../src/Appar.module.css'
import { useState,useEffect } from 'react'
import Cards from './components/cards/Cards.jsx'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Nav from './components/nav/Nav.jsx'
import About from './components/views/About'
import Detail from './components/views/Detail'
import Login from './components/views/Login'
import Favorites from './components/favorites/favorites'


function App() {

  const [characters, setCharacters] = useState([])
  const { pathname } = useLocation();
  const [access,setAccess] = useState(false)
  const navigate = useNavigate();

  const username = "gonza@gmail.com";
  const password = 'clave123'


  const login =(userData) => {
    if(userData.username === username && userData.password ===password){
      setAccess(true)
      navigate('/home')
    }
  }
    useEffect(() => {
      !access && navigate('/');
    }, [access, navigate]);

  function closeCharacter(id) {
    setCharacters((oldChars) => oldChars.filter(c => c.id !== id))
  }
  function searchCharacters(character) {
    if (!characters.some((chr) => { return chr.id === +character })) {
      //+string= trasforma a number. Number (lo que quieras pasar a number)
      fetch(`https://rickandmortyapi.com/api/character/${character}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } else {
            window.alert('No hay personajes con ese ID');
          }
        });
    } else {
      alert('No se permiten ID repetidos')
    }
  }
  return (

    <div className={style.div}>
      {pathname !== '/' && <Nav onSearch={searchCharacters} />}
      <header className={style.header}>

        <img className={style.img} src='https://cdn.shopify.com/s/files/1/0346/8063/5529/collections/rick-morty-collection-banner_1400x.jpg?v=1590095280' alt='morit foto' />

      </header>
      <Routes>

        <Route path='/' element={<Login login={login} />} />
        <Route path='/Favorites' element={<Favorites />} />
        <Route path='/home' element={
          <Cards
            characters={characters} onClose={closeCharacter} />
        }
        />

        <Route path='/about' element={<About />} />

        <Route path='/detail/:detailId' element={<Detail />} />

      </Routes>
    </div>

  )
}

export default App
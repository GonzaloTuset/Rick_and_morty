import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './Favorite.module.css'
import { removeCharacters } from '../../redux/actions';
import { fiterCards, orderCards } from '../../redux/actions';

function Favorites() {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  function delFav(charId) {
    dispatch(removeCharacters(charId));
  }

function orderByCharacters(event) {
    dispatch(orderCards(event.target.value));
  }

  function filterCharacters(event) {
    dispatch(fiterCards(event.target.value));
  }
  return (
    <div>
        <h2>My Favorites</h2>
      <div >
      <div>
        <select onChange={orderByCharacters} name='Order'>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
        </select>
        <select onChange={filterCharacters} name='Filter'>
          <option value='All'>All</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
        </select>
      </div>
      </div>
      <div className={style.ananashei}>
        {myFavorites.map(char => (
          <div className={style.divmajor}>
            <div className={style.divardo} key={char.id}>
            <h2>{char.id}</h2>
              <div >
                <img className={style.img} src={char.image} alt={char.name} />
              </div>
              <div >
                
                <h2>{`Name: ${char.name}`}</h2>
                <h2>{`Species: ${char.species}`}</h2>
                <h2>{`Gender: ${char.gender}`}</h2>
              </div>
                <button  onClick={() => delFav(char.id)}>
                  Remove Favorites
                </button>
              <div >
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Favorites
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {  removeCharacters } from '../../redux/reducer';

function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector(state => state.myFavorites);
  function delFav(charId) {
    dispatch(removeCharacters(charId));
  }

  return (
    <div>
      <div>
        <h2>My Favorites</h2>
      </div>
      <div>
        {myFavorites.map(char => (
          <div>
            <div key={char.id}>
              <div >
                <img src={char.image} alt={char.name} />
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
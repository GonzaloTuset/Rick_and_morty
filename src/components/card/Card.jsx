import style from './Card.module.css'
import { NavLink } from "react-router-dom"
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacters, removeCharacters } from '../../redux/actions'


export default function Card({ name, species, gender, image, onClose, id}) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleDelete = () => {
      onClose(id);
   }

   function addFav() {
      dispatch(addCharacters({
         name: name,
         species: species,
         gender: gender,
         image: image,
         id: id
      }));
   }

   function delFav() {
      dispatch(removeCharacters(id));
   }

   useEffect(() => {
      const favExists = myFavorites.some(char => char.id === id);
      setIsFav(favExists);
   }, [myFavorites, id]);

   return (
      <div className={style.divardo}>
         <div>
            <button className={style.boton} onClick={handleDelete}>X</button>
         </div>
         
         <NavLink className={style.link} to={`/detail/${id}`}>
            <img className={style.img} src={image} alt="" /> 
        
            <div className={style.name}>
               <h2 >{id}{name}</h2>
            </div>
            <div className={style.textos}>
               <div className={style.h2dos}>
                  <h2>{species}</h2>
                  <h2>{gender}</h2>
               </div>
            </div>
         </NavLink>

         {isFav ? (
            <button onClick={delFav}>
               ❤️
            </button>
         ) : (
            <button  onClick={addFav}>
               🤍
            </button>
         )}
      </div>
   );
}

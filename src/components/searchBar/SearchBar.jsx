import { useState } from 'react';
import style from './search.module.css'

export default function SearchBar(props) {
   const [id,setID]=useState([]);
   const handleChange = (event) =>{
      setID(event.target.value)
   }
   return (
      <div className={style.search}>
         <input className={style.input} onChange={handleChange} type='search' />
      <button className={style.boton} onClick={()=>props.onSearch(id)}>Agregar</button> 
      </div>
   );
}

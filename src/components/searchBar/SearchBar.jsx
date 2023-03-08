import { useState } from 'react';
import style from './search.module.css'

export default function SearchBar(pj) {
   const [id,setID]=useState([]);
   const handleChange = (event) =>{
      setID(event.target.value)
   }
   return (
      <div >
         <input className={style.input} onChange={handleChange} type='search' />
      <button className={style.boton} onClick={()=>pj.onSearch(id)}>Agregar</button> 
      </div>
   );
}

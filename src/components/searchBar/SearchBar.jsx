import style from './search.module.css'

export default function SearchBar(onSearch) {
   return (
      <div >
         <input className={style.input} type='search' />
      <button className={style.boton} onClick={(id)=>onSearch(id)}>Agregar</button> 
      </div>
   );
}

import style from './Card.module.css'
import { NavLink } from "react-router-dom"
export default function Card({ name, species, gender, image, onClose ,id}) {
  const handleDelete = () => {
   onClose(id);
  }
   return (
      <div className={style.divardo}>
         <div>
         <button className={style.boton} onClick={handleDelete}>X</button>
         </div>
         
         <NavLink className={style.link}to={`/detail/${id}`}>
         <img className={style.img} src={image} alt="" /> 
        
         <div className={style.name}>
         <h2 >{name}</h2>
         </div>
         <div className={style.textos}>
            <div className={style.h2dos}>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         </div>
         </div>
         
     </NavLink>
      </div>
      
   );
}

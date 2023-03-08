import style from './Card.module.css'
export default function Card({ name, species, gender, image, }) {
   const onClose =(name)=>{
     alert(name)
   }
   return (
      <div className={style.divardo}>
         <div>
         <button className={style.boton} onClick={onClose}>X</button>
         </div>
         
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
         
      </div>
      
   );
}

import Card from '../card/Card';
import style from './Cards.module.css'


export default function Cards(props) {
   const { characters, onClose } = props;
   return (
   <div className={style.ananashei}>
      {characters.map((character) => (
          <Card
          id={character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
          onClose={onClose}
          />
          ) 
          )}
   </div>
   )
}

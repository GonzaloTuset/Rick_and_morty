
import { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Detail=()=>{
  const { detailId } = useParams();
  const [character,setCharacter]=useState({})
  useEffect(()=>{
    const URL_BASE="https://be-a-rym.up.railway.app/api";
    const KEY ='d4a1a0c84ad9.688827160333c047f7eb'
    axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
    setCharacter(response.data)
    )
  },[]);
  return <div>
    {character.name ?(
      <>
    <h2>{character.name}</h2>
    <h2>{character.status}</h2>
    <h2>{character.species}</h2>
    <h2>{character.gender}</h2>
    <h2>{character.origin?.name}</h2>
    <img src={character.image} alt='img'></img>
    </>
):(<h3>Cargando.....</h3> )}
  </div>
}
export default Detail
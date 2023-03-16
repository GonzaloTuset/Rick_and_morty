import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"
import Random from "../random/Random"
export default function Nav(props){
  return(
    <div>
    <Link to='/home'> <h1>Homi</h1> </Link>
    <Link to='/about'> <h1>Sobre nosotros</h1> </Link>
    <Link  to='/Favorites'> <li>Favorites</li></Link>
  <SearchBar onSearch = {props.onSearch}/>
    <Random onSearch={props.onSearch}/>
  </div>
  )
}

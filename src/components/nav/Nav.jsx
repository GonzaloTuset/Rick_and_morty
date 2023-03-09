import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"
export default function Nav(props){
  return(
    <div>
    <Link to='/home'> <h1>Homi</h1> </Link>
  <SearchBar onSearch = {props.onSearch}/>
  </div>
  )
}

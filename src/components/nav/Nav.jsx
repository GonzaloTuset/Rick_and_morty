import SearchBar from "../searchBar/SearchBar"
import { Link } from "react-router-dom"
export default function Nav(props){
  return(
    
  <SearchBar onSearch = {props.onSearch}/>
  )
}

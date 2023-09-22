import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import './SearchBar.css'
const Searchbar = () =>{
    return(
        <div className={"SearchBar"}>
            <input id={"InputField"} type={"text"} placeholder={"Search"}/>
            <FontAwesomeIcon id={"icon"} icon={faMagnifyingGlass} />
        </div>
    )
}
export default Searchbar
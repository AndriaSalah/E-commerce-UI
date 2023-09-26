import './NavButton.css'
import {Link} from "react-router-dom";
const NavButton = (props)=>{

    return(

        <Link to={props.src} className={"NavButton"} id={"NavButton"}>{props.children}</Link>
    );
}

export default NavButton
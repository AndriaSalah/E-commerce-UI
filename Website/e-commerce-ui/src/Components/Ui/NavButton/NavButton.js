import './NavButton.css'
import {Link} from "react-router-dom";
const NavButton = (props)=>{

    return(

        <Link to={props.src} state={{category :props.category}} onClick={props.onClick} className={"NavButton " + props.className} >{props.children}</Link>
    );
}

export default NavButton
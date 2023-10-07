import './NavButton.css'
import {NavLink} from "react-router-dom";
const NavButton = (props)=>{

    return(

        <NavLink  to={props.src} state={{category :props.category}}  className={"NavButton "} >{props.children}</NavLink>
    );
}

export default NavButton
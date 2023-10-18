import './NavButton.css'
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {MenuShownContext} from "../../Navbar/Navbar";

const NavButton = (props)=>{
    const {MenuShown,setMenuShown} = useContext(MenuShownContext)
    return(

        <NavLink onClick={MenuShown && (()=>setMenuShown(!MenuShown)) } to={props.src} state={{category :props.category}}  className={"NavButton "} >{props.children}</NavLink>
    );
}

export default NavButton
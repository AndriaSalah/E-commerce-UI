import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";
import {useState} from "react";
import logo from "../../Assets/Logo.svg";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [MenuShown, setMenuShow] = useState(false)
    const ShowMenu= ()=>{
        MenuShown ? setMenuShow(false): setMenuShow(true)
    }
    return (
        <nav>
            <NavLink to={"/"} ><img id={"logo"} src={logo}  alt={"Logo"}/></NavLink>
            <div className={"menu"} style={ MenuShown? {display:"flex" , opacity:1,visibility:"visible" , top:"100%"}:{}}>
                <NavLinks></NavLinks>
                <EndSection></EndSection>
            </div>
            <div onClick={ShowMenu} className={"burger"}>
                <span></span><span></span><span></span>
            </div>
        </nav>
    );

}

export default Navbar
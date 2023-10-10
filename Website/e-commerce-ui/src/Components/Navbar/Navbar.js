import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";
import {useEffect, useRef, useState} from "react";
import logo from "../../Assets/Logo.svg";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    const [MenuShown, setMenuShow] = useState(false)
    const MenuRef = useRef(null)
    const NavRef = useRef(null)
    const ShowMenu= ()=>{
        MenuShown ? setMenuShow(false): setMenuShow(true)
    }
    useEffect(() => {
        function handleClickOutside(event) {
            if (MenuShown) {
                if (MenuRef.current && !MenuRef.current.contains(event.target) && NavRef.current && !NavRef.current.contains(event.target)) {
                    setMenuShow(false);
                }
            }
        }

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [MenuShown]);

    return (
        <nav ref={NavRef}>
            <NavLink id={"logo"} to={"/"} ><img id={"logo-img"} src={logo}  alt={"Logo"}/><h1>Globex</h1></NavLink>
            <div className={"menu"} style={ MenuShown? {display:"flex" , opacity:1,visibility:"visible" , top:"100%"}:{}} ref={MenuRef}>
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
import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";
import {createContext, useEffect, useRef, useState} from "react";
import logo from "../../Assets/Logo.svg";
import {NavLink, useLocation} from "react-router-dom";

export const MenuShownContext = createContext({})

const Navbar = () => {
    const [MenuShown, setMenuShown] = useState(false)
    const MenuRef = useRef(null)
    const NavRef = useRef(null)

    const isRoot = useLocation().pathname === '/';

    useEffect(() => {
        function handleClickOutside(event) {
            if (MenuShown && MenuRef.current && !MenuRef.current.contains(event.target) && NavRef.current && !NavRef.current.contains(event.target))
                setMenuShown(false);
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [MenuShown]);


    return (
        <nav ref={NavRef}>
            <NavLink
                onClick={() => !isRoot && setMenuShown(false)}
                id={"logo"} to={"/"}>
                <img id={"logo-img"} src={logo} alt={"Logo"}/>
                <h1>Globex</h1>
            </NavLink>
            <div className={"menu"}
                 style={MenuShown ? {display: "flex", opacity: 1, visibility: "visible", top: "100%"} : {}}
                 ref={MenuRef}>
                <MenuShownContext.Provider value={{MenuShown, setMenuShown}}>
                    <NavLinks></NavLinks>
                </MenuShownContext.Provider>
                <EndSection></EndSection>
            </div>
            <div onClick={() => setMenuShown(!MenuShown)} className={"burger"}>
                <span></span><span></span><span></span>
            </div>
        </nav>
    );

}

export default Navbar
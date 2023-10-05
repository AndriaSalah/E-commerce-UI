import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";



const Navbar = ({Theme ,SwitchColor})=>{
    return(
        <nav>
            <NavLinks></NavLinks>
            <EndSection Theme={Theme} SwitchColor={SwitchColor} ></EndSection>
        </nav>
    );

}

export default Navbar
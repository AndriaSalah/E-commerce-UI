import logo from '../../Assets/Logo.svg'
import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";


const Navbar = ()=>{

    return(
        <nav>
            <img id={"logo"} src={logo}  alt={"Logo"}/>
            <NavLinks></NavLinks>
            <EndSection></EndSection>
        </nav>
    );

}

export default Navbar
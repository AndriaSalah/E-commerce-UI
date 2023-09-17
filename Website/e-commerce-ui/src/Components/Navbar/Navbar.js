import logo from '../../Assets/Logo.png'
import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Search_Account/EndSection";


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
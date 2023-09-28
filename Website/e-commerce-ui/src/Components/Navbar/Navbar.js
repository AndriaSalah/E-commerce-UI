import logo from '../../Assets/Logo.svg'
import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";
import {Link} from "react-router-dom";


const Navbar = ()=>{

    return(
        <nav>
            <Link to={"/"}><img id={"logo"} src={logo}  alt={"Logo"}/></Link>
            <NavLinks></NavLinks>
            <EndSection></EndSection>
        </nav>
    );

}

export default Navbar
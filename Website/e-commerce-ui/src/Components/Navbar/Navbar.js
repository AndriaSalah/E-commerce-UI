import NavLinks from "./NavLinks/NavLinks";
import "./Navbar.css"
import EndSection from "./Account/EndSection";



const Navbar = ()=>{
    return(
        <nav>
            <NavLinks></NavLinks>
            <EndSection></EndSection>
        </nav>
    );

}

export default Navbar
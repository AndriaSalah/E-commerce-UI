import logo from '../../Assets/Logo.png'
import MidSection from "./MidSection/MidSection";
import AccountSection from "./AccountSection/AccountSection";
import "./Navbar.css"
import {Link} from "react-router-dom";
const Navbar = ()=>{

    return(
        <nav>
            <Link to="/">
                <img id={"logo"} src={logo}  alt={"Logo"}/>
            </Link>
            <MidSection></MidSection>
            <input type={"search"}/>
            <AccountSection></AccountSection>
        </nav>
    );

}

export default Navbar
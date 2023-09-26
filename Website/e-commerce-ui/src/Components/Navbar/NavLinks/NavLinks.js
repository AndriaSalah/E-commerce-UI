import NavButton from "../../Ui/NavButton/NavButton";
import './NavLinks.css'

const NavLinks = () =>{

    return(
        <div className={"NavButtons"}>
            <NavButton src="/Products">Men</NavButton>
            <NavButton src="/Products">Women</NavButton>
            <NavButton src="/Products">Kids</NavButton>
            <NavButton src="/Products">Shop</NavButton>
            <NavButton src="/Products">Contact us</NavButton>
        </div>
    )
}
export default NavLinks
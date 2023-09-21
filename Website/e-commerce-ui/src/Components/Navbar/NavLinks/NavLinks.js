import NavButton from "../../Ui/NavButton/NavButton";
import './NavLinks.css'

const NavLinks = () =>{

    return(
        <div className={"NavButtons"}>
            <NavButton src="./Components/Men">Men</NavButton>
            <NavButton src="./Components/Men">Women</NavButton>
            <NavButton src="./Components/Men">Kids</NavButton>
            <NavButton src="./Components/Men">Shop</NavButton>
            <NavButton src="./Components/Men">Contact us</NavButton>
        </div>
    )
}
export default NavLinks
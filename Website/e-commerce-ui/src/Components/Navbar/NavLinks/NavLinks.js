import NavButton from "../../Ui/NavButton/NavButton";
import './NavLinks.css'

const NavLinks = () =>{

    return(
        <div className={"NavLinksWrapper"}>
            <div className={"NavButtons"}>
                <NavButton  category={"Men"} src="/Men">Men</NavButton>
                <NavButton  category={"Women"} src="/Women">Women</NavButton>
                <NavButton  category={"Kids"} src="/Kids">Kids</NavButton>
                <NavButton  category={""} src="/Shop">Shop</NavButton>
            </div>
        </div>
    )
}
export default NavLinks
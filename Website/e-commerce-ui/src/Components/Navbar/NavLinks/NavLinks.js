import NavButton from "../../Ui/NavButton/NavButton";
import './NavLinks.css'
import {useState} from "react";
import logo from "../../../Assets/Logo.svg";


const NavLinks = () =>{
    const [activeLink ,SetActiveLink] = useState("")
    function setActive(linkName){
        SetActiveLink(linkName)
    }
    return(
        <div className={"allLinks"}>
            <NavButton onClick={()=>setActive("")} src={"/"}><img id={"logo"} src={logo}  alt={"Logo"}/></NavButton>
            <div className={"NavButtons"}>
                <NavButton onClick={()=>setActive("Men")} className={activeLink === 'Men' ? 'active' : ""} category={"Men"} src="/Products">Men</NavButton>
                <NavButton onClick={()=>setActive("women")} className={activeLink === 'women' ? 'active' : ""} category={"Women"} src="/Products">Women</NavButton>
                <NavButton onClick={()=>setActive("Kids")} className={activeLink === 'Kids' ? 'active' : ""} category={"Kids"} src="/Products">Kids</NavButton>
                <NavButton onClick={()=>setActive("Products")} className={activeLink === 'Products' ? 'active' : ""} src="/Products">Shop</NavButton>
                <NavButton onClick={()=>setActive("ContactUs")} className={activeLink === 'ContactUs' ? 'active' : ""} >Contact us</NavButton>
            </div>
        </div>
    )
}
export default NavLinks
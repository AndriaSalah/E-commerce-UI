import profile from "../../../../Assets/Icons/Navbar/icon.png"
import "./AccountSection.css"
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
import {useContext} from "react";
import {MdDarkMode, MdLightMode} from "react-icons/md";
import {ThemeContext} from "../../../../App";

const AccountSection = () => {
    const {SwitchColor,Theme} = useContext(ThemeContext)
    return (
        <div className={"AccountSection"}>
            <button id={"colorsButton"} onClick={SwitchColor}>
                {Theme === 'dark' ? <MdLightMode/> : <MdDarkMode/>}
            </button>
            <button id={"favourites"}>
                <AiOutlineHeart/>
            </button>
            <button id={"cart"}>
                <AiOutlineShoppingCart/>
            </button>
            <div className={"profile"}>
                <img src={profile} alt={profile}/>
                <p>Name</p>
            </div>
        </div>
    )

}
export default AccountSection
import profile from "../../../../Assets/Icons/Navbar/icon.png"
import "./AccountSection.css"
import {AiOutlineHeart, AiOutlineShoppingCart} from "react-icons/ai";
const AccountSection = () => {

    return(
        <div className={"AccountSection"}>
            <button id={"favourites"}>
                <AiOutlineHeart />
            </button>
            <button id={"cart"}>
                <AiOutlineShoppingCart/>
            </button>
            <div className={"profile"}>
                <img src={profile} alt={profile} />
                <p>Name</p>
            </div>
        </div>
    )

}
export default AccountSection
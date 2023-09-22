import FavIcon from "../../../../Assets/Icons/Navbar/Favourites.png"
import Cart from "../../../../Assets/Icons/Navbar/Cart.png"
import profile from "../../../../Assets/Icons/Navbar/icon.png"
import "./AccountSection.css"
const AccountSection = () => {

    return(
        <div className={"AccountSection"}>
            <button id={"favourites"}>
                <img src={FavIcon} alt={"Favourites"}/>
            </button>
            <button id={"cart"}>
                <img src={Cart} alt={"Cart"}/>
            </button>
            <div className={"profile"}>
                <img src={profile} alt={profile} />
                <p>Name</p>
            </div>
        </div>
    )

}
export default AccountSection
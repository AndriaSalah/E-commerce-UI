import FavIcon from "../../../Assets/Icons/Favourites.png"
import Cart from "../../../Assets/Icons/Cart.png"
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
                <img/>
                <p>Name</p>
            </div>
        </div>
    )

}
export default AccountSection
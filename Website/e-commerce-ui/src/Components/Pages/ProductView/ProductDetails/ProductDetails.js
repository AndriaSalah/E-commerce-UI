import './ProductDetails.css'
import {renderStars} from "../../../ProductsData";
import {BsFillSuitHeartFill} from "react-icons/bs";

const Sizes = ["XS", "S", "M", "L", "XL"]


const ProductDetails = ({Data}) => {
    return (
        <div className={"ProductDetails"}>
            <h1>{Data.ItemName}</h1>
            <h2>{Data.BrandName}</h2>
            <h4> Sold by : {Data.SellerName}</h4>
            <div id={"Rating"}>
                <p>{Data.Rating}{renderStars(Data.Rating)} </p>
                <p>{Data.ReviewCount} Reviews</p>
            </div>
            <div id={"Price"}>
                {
                    Data.Discount ?
                        [
                            <h3 id={"Offer"} className={"priceData"}>{`Rs. ${Data.OfferPrice}`}</h3>,
                            <h4 id={"Actual"} className={"priceData"}>{`Rs. ${Data.ActualPrice}`}</h4>,
                            <p id={"Discount"} className={"priceData"}>{`(${Data.Discount}% off)`}</p>
                        ] :
                        <h3 id={"offer"} className={"priceData"}>{`Rs. ${Data.ActualPrice}`}</h3>
                }
            </div>
            <h4>Select Size</h4>
            <div className={"Sizes"}>
                {Sizes.map(size => (
                    <div className={"Size" + (!Data.AvailableSizes.includes(size) ? " NoStock" : "")}>
                        {size}
                        {!Data.AvailableSizes.includes(size) && <span className={"line"}></span>}
                    </div>
                ))}
            </div>
            <h4>Select Color</h4>
            <div className={"Colors"}>
                {Data.colors.map(itemColor => (
                    <div className={"color"} style={{backgroundColor: itemColor}}></div>
                ))}
            </div>
            <h4>Best Offers</h4>
            <div className={"BestOffers"}>
                <p>Special offer get 25% off T&C</p>
                <p>Bank offer get 30% off on Axis Bank Credit card T&C</p>
                <p>Wallet offer get 40% cashback via Paytm wallet on first transaction T&C</p>
                <p>Special offer get 25% off T&C</p>
            </div>
            <div className={"buttons"}>
                <button>Add to cart</button>
                <BsFillSuitHeartFill id={"fav"}/>
            </div>


        </div>
    )
}
export default ProductDetails
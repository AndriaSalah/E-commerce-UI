import './ProductDetails.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar,faHeart} from "@fortawesome/free-solid-svg-icons";
const Sizes=["XS","S","M","L","XL"]

const ProductDetails =({Data}) =>{
console.log(Data.Comments)
    return(
        <div className={"ProductDetails"}>
            <h1>{Data.ItemName}</h1>
            <h2>{Data.BrandName}</h2>
            <h4> Sold by : {Data.SellerName}</h4>
            <div id={"Rating"}>
                <p>{Data.Rating} <FontAwesomeIcon icon={faStar}/></p>
                <p>{Data.Reviews} Reviews</p>
            </div>
            <div id={"Price"}>
                <p id={"Offer"}>Rs. {Data.OfferPrice}</p>
                <p id={"Actual"}>Rs. {Data.ActualPrice}</p>
                <p id={"Discount"}>({Data.Discount} %off)</p>
            </div>
            <h4>Select Size</h4>
            <div className={"Sizes"}>
                {Sizes.map(size=>(
                    <div className={"Size" +(!Data.AvailableSizes.includes(size)? " NoStock" : "")}>
                        {size}
                        {!Data.AvailableSizes.includes(size) && <span className={"line"}></span>}
                    </div>
                ))}
            </div>
            <h4>Select Color</h4>
            <div className={"Colors"}>
                {Data.colors.map(itemColor=>(
                    <div className={"color"} style={{backgroundColor:itemColor}}></div>
                ))}
            </div>
            <h4>Best Offers</h4>
            <div className={"BestOffers"}>
                <p>Special offer get 25% off T&C</p>
                <p>Bank offer get 30% off on Axis Bank Credit card T&C</p>
                <p>Wallet offer get 40% cashback  via Paytm wallet on first transaction T&C</p>
                <p>Special offer get 25% off T&C</p>
            </div>
            <div className={"buttons"}>
                <button>Add to cart</button>
                <FontAwesomeIcon icon={faHeart} id={"fav"}/>
            </div>




        </div>
    )
}
export default ProductDetails
import './ProductCards.css'
import {AiFillStar} from "react-icons/ai";

const ProductCards = ({ImgSrc, ItemName, BrandName, score, OfferPrice, ActualPrice}) => {

    return (
        <div className={'ProductCard'}>
            <img src={ImgSrc} alt={"item"} loading={"lazy"}/>
            <div className={"detailsContainer"}>
                <h3 id={"itemName"}>{ItemName}</h3>
                <div id={"Section1"}>
                    <h4>{BrandName}</h4>
                    <p>{score}</p>
                    <AiFillStar id={"icon"}/>
                </div>
                <div id={'Section2'}>
                    <h3 id={"offer"} className={"priceData"}>{`Rs. ${OfferPrice}`}</h3>
                    <h4 id={"actual"} className={"priceData"}>{`Rs. ${ActualPrice}`}</h4>
                    <p id={"discount"} className={"priceData"}>{`(30% off)`}</p>
                </div>
            </div>
        </div>
    )
}
export default ProductCards
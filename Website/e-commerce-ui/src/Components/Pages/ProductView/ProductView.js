import {useLocation} from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";
import './ProductView.css'
import ProductInfo from "./ProductInfo/ProductInfo";

const ProductView = () => {
    const {state} = useLocation()
    return (
        <div>
            <div className={"ProductView"}>
                <ProductImages images={state.Images}> </ProductImages>
                <ProductDetails Data={{...state}}></ProductDetails>
            </div>
            <ProductInfo></ProductInfo>
        </div>
    )
}

export default ProductView
import {useLocation} from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";
import './ProductView.css'
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import CustomersAlsoLike from "./CustomersAlsoLike/CustomersAlsoLike";

const ProductView = () => {
    const {state} = useLocation()
    return (
        <div>
            <div className={"ProductView"}>
                <ProductImages images={state.Images}/>
                <ProductDetails Data={{...state}}/>
            </div>
            <ProductInfo Data={{...state}}/>
            <SimilarProducts/>
            <CustomersAlsoLike/>
        </div>
    )
}

export default ProductView
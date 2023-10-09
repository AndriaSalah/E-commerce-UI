import {useLocation} from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";
import './ProductView.css'
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import CustomersAlsoLike from "./CustomersAlsoLike/CustomersAlsoLike";
import {useEffect} from "react";

const ProductView = () => {
    // let imgKey = 0
    // const {Images} = useLocation().state
    function ScrollToTop() {
        const {state} = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [state]);

        return null;
    }

    const {state} = useLocation()
    return (
        <div>
            <ScrollToTop/>
            <div className={"ProductView"}>
                <ProductImages images={state.Images}/>
                <ProductDetails Data={{...state}}/>
            </div>
            <ProductInfo Data={{...state}}/>
            <SimilarProducts />
            <CustomersAlsoLike />
        </div>
    )
}

export default ProductView
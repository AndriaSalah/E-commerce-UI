import {useLocation} from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";
import './ProductView.css'
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import CustomersAlsoLike from "./CustomersAlsoLike/CustomersAlsoLike";
import {useEffect, useState} from "react";

const ProductView = () => {
    const {Images} = useLocation().state
    const [selectedImg, setSelectedImg] = useState(Images[0])
    function ScrollToTop() {
        const {state} = useLocation();
        useEffect(() => {
            window.scrollTo(0, 0);
            setSelectedImg(Images[0])
        }, [state]);

        return null;
    }
    const {state} = useLocation()
    return (
        <div>
            <ScrollToTop/>
            <div className={"ProductView"}>
                <ProductImages images={state.Images} selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>
                <ProductDetails Data={{...state}}/>
            </div>
            <ProductInfo Data={{...state}}/>
            <SimilarProducts/>
            <CustomersAlsoLike/>
        </div>
    )
}

export default ProductView
import {useLocation} from "react-router-dom";
import ProductImages from "./ProductImages/ProductImages";
import ProductDetails from "./ProductDetails/ProductDetails";
import './ProductView.css'
import ProductInfo from "./ProductInfo/ProductInfo";
import SimilarProducts from "./SimilarProducts/SimilarProducts";
import CustomersAlsoLike from "./CustomersAlsoLike/CustomersAlsoLike";
import {useEffect} from "react";
import {motion} from "framer-motion";

const ProductView = () => {




    function ScrollToTop() {
        const {state} = useLocation()
        useEffect(() => {
            window.scrollTo(0, 0);
        }, [state]);

        return null;
    }
    const {state} = useLocation()
    const key = state ? state.id : null; // Use a unique identifier from state
    return (
        <motion.div
            initial={{x:"-100%" , opacity:0}}
            animate={{x:0 , opacity:1 }}
            exit={{x:"100%" , opacity:0}}
            transition={{duration:0.5 ,ease:"easeInOut"}}
            key={key}
        >

            <ScrollToTop/>
            <div className={"ProductView"}>
                <ProductImages images={state.Images}/>
                <ProductDetails Data={{...state}}/>
            </div>
            <ProductInfo Data={{...state}}/>
            <SimilarProducts />
            <CustomersAlsoLike />
        </motion.div>
    )
}

export default ProductView
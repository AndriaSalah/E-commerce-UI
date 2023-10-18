import './Products.css'
import ProductsDisplay from "./ProductDisplay/ProductsDisplay";
import ProductFilters from "./ProductFilters/ProductFilters";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {motion} from "framer-motion";

const Products = () => {
    const [barShown, SetBarShown] = useState(window.innerWidth > 768)
    const [FilteredProducts, SetFilteredProducts] = useState([])

    const {category} = useLocation().state
    useEffect(() => {
        window.innerWidth > 768 && SetBarShown(true)
    }, []);

    function showFiltersBar() {
        !barShown ? SetBarShown(true) : SetBarShown(false)
    }

    return (

            <motion.div
                initial={{x:"-100%" , opacity:0}}
                animate={{x:0 , opacity:1 }}
                exit={{x:"100%" , opacity:0}}
                transition={{duration:0.5 ,ease:"easeInOut"}}
                className={"Products"}>
                <ProductFilters
                    Shown={barShown}
                    ShowFiltersBar={showFiltersBar}
                    SetFilteredProducts={SetFilteredProducts}
                    SelectedCategories={category}
                />
                <ProductsDisplay
                    Shown={barShown}
                    ShowFiltersBar={showFiltersBar}
                    Products={FilteredProducts}
                />
            </motion.div>


    );
}

export default Products
import './Products.css'
import ProductsDisplay from "./ProductDisplay/ProductsDisplay";
import ProductFilters from "./ProductFilters/ProductFilters";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

const Products = () => {
    const [barShown, SetBarShown] = useState(window.innerWidth > 768)
    const [FilteredProducts, SetFilteredProducts] = useState([])
    const {category} = useLocation().state
    useEffect(() => {
        window.innerWidth > 768 && SetBarShown(true)
    }, []);
    console.log(category)
    function showFiltersBar() {
        !barShown ? SetBarShown(true) : SetBarShown(false)
    }

    return (

            <div className={"Products"}>
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
            </div>


    );
}

export default Products
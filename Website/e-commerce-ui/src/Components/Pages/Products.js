import './Products.css'

import ProductsDisplay from "../Products/ProductDisplay/ProductsDisplay";
import ProductFilters from "../Products/ProductFilters/ProductFilters";
import {useState} from "react";

const Products = () => {
    const [barShown, SetBarShown] = useState(true)

    const [FilteredProducts ,SetFilteredProducts] =useState([])
    function showFiltersBar() {
    !barShown ? SetBarShown(true) : SetBarShown(false)
    }

    return (
        <div className={"Products"}>
            <ProductFilters
                Shown={barShown}
                ShowFiltersBar={showFiltersBar}
                SetFilteredProducts={SetFilteredProducts}
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
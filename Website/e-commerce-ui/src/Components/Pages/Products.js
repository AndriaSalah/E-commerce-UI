import './Products.css'
import ProductsDisplay from "../Products/ProductDisplay/ProductsDisplay";
import ProductFilters from "../Products/ProductFilters/ProductFilters";
import {useState} from "react";

const Products = () => {
    const [barShown, SetBarShown] = useState(true)

    function showFiltersBar() {
    !barShown ? SetBarShown(true) : SetBarShown(false)
    }

    return (
        <div className={"Products"}>
            <ProductFilters Shown={barShown} ShowFiltersBar={showFiltersBar}/>
            <ProductsDisplay Shown={barShown} ShowFiltersBar={showFiltersBar}></ProductsDisplay>
        </div>
    );
}

export default Products
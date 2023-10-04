import './Products.css'
import ProductsDisplay from "./ProductDisplay/ProductsDisplay";
import ProductFilters from "./ProductFilters/ProductFilters";
import {useState} from "react";
import {useLocation} from "react-router-dom";

const Products = () => {
    const [barShown, SetBarShown] = useState(true)
    const [FilteredProducts, SetFilteredProducts] = useState([])
    const {category} = useLocation().state

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
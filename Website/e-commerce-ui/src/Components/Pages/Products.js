import './Products.css'
import ProductsDisplay from "../Men/ProductDisplay/ProductsDisplay";
import ProductFilters from "../Men/ProductFilters/ProductFilters";
const Products = () =>{

return (
    <div className={"Products"}>
        <ProductFilters/>
        <ProductsDisplay></ProductsDisplay>
    </div>
);
}

export default Products
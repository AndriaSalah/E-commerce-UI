import {useState} from "react";
import Details from "./Info/Details";
import Ratings from "./Info/Ratings";
import Specification from "./Info/Specification";


const ProductInfo = () => {
    const[Active,setActive] = useState("Ratings")

    function activate(page){
        setActive(page)
    }
    return (
        <div>
            <Details className={Active==="Details" ? "activePage":""} Activate={activate}></Details>
            <Specification className={Active==="Specification" ? "activePage":""} Activate={activate}></Specification>
            <Ratings className={Active==="Ratings" ? "activePage":""} Activate={activate}></Ratings>
        </div>
    )
}
export default ProductInfo
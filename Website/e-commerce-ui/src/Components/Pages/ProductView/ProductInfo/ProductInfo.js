import {useState} from "react";
import Details from "./Info/Details";
import Ratings from "./Info/Ratings";
import './ProductInfo.css'

const ProductInfo = ({Data}) => {
    const [Active, setActive] = useState("Details")

    function activate(page) {
        setActive(page)
    }

    return (
        <div className={"DetailsSection"}>
            <div className={"Navigation"}>
                <button onClick={() => activate("Details")} className={Active==="Details"? "activeButton":""}>Details</button>
                <button onClick={() => activate("Ratings")} className={Active==="Ratings"? "activeButton":""}>Ratings & Reviews</button>
            </div>
            <span></span>
            <div className={"Description"}>
                <Details
                    className={Active === "Details" ? "activePage" : ""}
                    Description={Data.Description}
                    size={Data.AvailableSizes[0]}
                    Care={Data.Care}
                    Material={Data.Material}
                />

                <Ratings
                    className={Active === "Ratings" ? "activePage" : ""}
                    Comments={Data.Reviews}
                    Rating={Data.Rating}
                />
            </div>
        </div>
    )
}
export default ProductInfo
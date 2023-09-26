import {useState} from "react";
import './ProductFilters.css'

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";

const ProductFilters = ()=>{
    const [SelectedTags,SetSelectedTags] = useState([])
    let Brands=["Tokyo Talkies","Roadster","Here&Now","High Star","Miss Chase","Voxati"]
    let Prices=["Rs. 350 to Rs. 500","Rs. 350 to Rs. 500","Rs. 500 to Rs. 700","Rs. 350 to Rs. 500",]
    let Colors=["Blue","Blue","Blue","Blue","Blue"]
    let Discounts=["10% and above","20% and above","30% and above","40% and above","50% and above","60% and above"]
    function setFilter (filter){
        if(!SelectedTags.includes(filter)) SetSelectedTags([...SelectedTags,filter])
        else SetSelectedTags (SelectedTags.filter(tag => tag !== filter))
    }


    return(
        <div className={"ProductFilters"}>
            <h1>Filters</h1>
            <div className={"selectedTags"}>{SelectedTags.map(tag=>
                <div className={"Tag"}  >
                    {tag}
                </div>
            )}</div>
            <span></span>
            <h2>Brand</h2>
            {
                Brands.map((Brand)=> (
                    <div id={"tag"}>
                        <input type={"checkbox"} value={Brand} name={Brand} onClick={()=>setFilter(Brand)}/>
                        <label htmlFor={Brand}>{Brand}</label>
                    </div>
                    )
                )
            }
            <span></span>
            <h2>Price</h2>
            {
                Prices.map(Price =>
                    <div id={"tag"}>
                        <input type={"checkbox"} value={Price} name={Price} onClick={()=>setFilter(Price)}/>
                        <label htmlFor={Price}>{Price}</label>
                    </div>
                )
            }
            <span></span>
            <h2>Color</h2>
            {
                Colors.map(Color=>
                    <div id={"tag"}>
                        <input type={"checkbox"} value={Color} name={Color} onClick={()=>setFilter(Color)}/>
                        <label htmlFor={Color}>{Color}</label>
                    </div>
                )
            }
            <span></span>
            <h2>Discount Range</h2>
            {
                Discounts.map(Discount=>
                    <div id={"tag"}>
                        <input type={"checkbox"} value={Discount} name={Discount} onClick={()=>setFilter(Discount)}/>
                        <label htmlFor={Discount}>{Discount}</label>
                    </div>
                )
            }
        </div>
    )
}


export default ProductFilters
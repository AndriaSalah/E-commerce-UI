import {useState} from "react";
import './ProductFilters.css'

import Section from "./Section/Section";
import SelectedTags from "./SelectedTags/SelectedTags";

const ProductFilters = (props) => {
    const [Tags, SetTags] = useState([])
    let Brands = ["Tokyo Talkies", "Roadster", "Here&Now", "High Star", "Miss Chase", "Voxati"]
    let Prices = ["Rs. 350 to Rs. 500", "Rs. 350 to Rs. 500", "Rs. 500 to Rs. 700", "Rs. 350 to Rs. 500",]
    let Colors = ["Blue", "Blue", "Blue", "Blue", "Blue"]
    let Discounts = ["10% and above", "20% and above", "30% and above", "40% and above", "50% and above", "60% and above"]

    function setFilter(filter) {
        if (!Tags.includes(filter)) SetTags([...Tags, filter])
        else SetTags(Tags.filter(tag => tag !== filter))
    }
    function cleatFilters(){
        SetTags([])

    }

    return (
        <div className={"ProductFilters " + (!props.Shown ? "Hide" : "")}>
            <div className={"Container"}>
                <SelectedTags tags={Tags} ShowFilterBar={props.ShowFiltersBar} ClearFilter={cleatFilters}/>
                <Section title={"Brand"} content={Brands} setFilter={(tag)=>setFilter(tag)} selectedTags={Tags}  />
                <Section title={"Price"} content={Prices} setFilter={(tag)=>setFilter(tag)} selectedTags={Tags} />
                <Section title={"Color"} content={Colors} setFilter={(tag)=>setFilter(tag)} selectedTags={Tags} />
                <Section title={"Discount Range"} content={Discounts} setFilter={(tag)=>setFilter(tag)} selectedTags={Tags} />
            </div>
        </div>
    )
}


export default ProductFilters
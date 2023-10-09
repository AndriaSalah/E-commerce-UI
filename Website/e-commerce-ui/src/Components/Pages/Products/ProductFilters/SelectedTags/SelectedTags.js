import './SelectedTags.css'
import {IoMdClose} from "react-icons/io";

const SelectedTags = ({tags, ShowFilterBar, ClearFilter, addTags}) => {
    return (

            <div className={"selectedTags " + (tags.length !== 0 ? "Sticky" : "")}>
                <div className={"Close__Button"}>
                    <button onClick={ShowFilterBar} className={"close"}><IoMdClose/></button>
                </div>
                <h1>Filters</h1>
                <div className={"Tags"}>{tags.map(tag =>
                    <div className={"Tag"}>
                        <button onClick={() => addTags(tag)}><IoMdClose/></button>
                        {tag}
                    </div>
                )}</div>
                <div className={"Close__Button"}>
                    <button className={tags.length === 0 ? "remove" : ""} onClick={ClearFilter}>Clear all</button>
                </div>
                <span></span>
            </div>


    )
}

export default SelectedTags
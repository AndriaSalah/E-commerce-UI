import './SelectedTags.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faXmark} from "@fortawesome/free-solid-svg-icons";
const SelectedTags = ({tags, ShowFilterBar , ClearFilter,addTags}) =>{
    return(
        <div className={tags.length !== 0 ? "Sticky":""}>
            <div className={"Right__Button"}>
                <button onClick={ShowFilterBar} className={"close"} ><FontAwesomeIcon icon={faXmark}/></button>
            </div>
            <h1>Filters</h1>
            <div className={"selectedTags"}>{tags.map(tag =>
                <div className={"Tag"}>
                    <button onClick={()=>addTags(tag)}><FontAwesomeIcon icon={faXmark}/></button>
                    {tag}
                </div>
            )}</div>
            <div className={"Right__Button"}>
                <button className={tags.length === 0 ? "Hide":""} onClick={ClearFilter}>Clear all</button>
            </div>
            <span></span>
        </div>

    )
}

export default SelectedTags
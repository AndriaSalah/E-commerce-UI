import './Categroies.css'
import {categoryData} from "../../ProductsData";
import {NavLink} from "react-router-dom";

const Categories = () => {

    return (
        <div className={"CategoriesContainer"}>
            <h2>Shop by category</h2>
            <div className="Categories">
                {categoryData.map((category) => (
                    <div key={category.id} className={category.className}>
                        <NavLink to={"/Shop"} state={category.categoryTitle}>
                            <img src={category.imgSrc} alt={"img1"}  loading={"lazy"}/>
                            <p>{category.categoryTitle}</p>
                        </NavLink>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories
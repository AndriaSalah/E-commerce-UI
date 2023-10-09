import './Categroies.css'
import {categoryData} from "../../ProductsData";

const Categories = () => {

    return (
        <div className={"CategoriesContainer"}>
            <h2>Shop by category</h2>
            <div className="Categories">
                {categoryData.map((category) => (
                    <div className={category.className}>
                        <a href={category.page}>
                            <img src={category.imgSrc} alt={"img1"}  loading={"lazy"}/>
                            <p>{category.categoryTitle}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories
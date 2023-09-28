import './Categroies.css'
import img1 from '../../../Assets/Categories/img1.png'
import img2 from '../../../Assets/Categories/img2.png'
import img3 from '../../../Assets/Categories/img3.png'
import img4 from '../../../Assets/Categories/img4.png'
import img5 from '../../../Assets/Categories/img5.png'
import img6 from '../../../Assets/Categories/img6.png'

const Categories = () => {
    const categoryData = [
        {
            className: "Category1",
            page: "../Pages/Products.js",
            imgSrc: img1,
            categoryTitle:"Summer Clothes"
        },
        {
            className: "Category2",
            page: "../Pages/Products.js",
            imgSrc: img2,
            categoryTitle:"Coats"
        },
        {
            className: "Category3",
            page: "../Pages/Products.js",
            imgSrc: img3,
            categoryTitle:"Sweaters"
        },
        {
            className: "Category4",
            page: "../Pages/Products.js",
            imgSrc: img4,
            categoryTitle:"Jackets"
        },
        {
            className: "Category5",
            page: "../Pages/Products.js",
            imgSrc: img5,
            categoryTitle:"Pants"
        },
        {
            className: "Category6",
            page: "../Pages/Products.js",
            imgSrc: img6,
            categoryTitle:"Hoodies"
        },
    ]
    return (
        <div className={"CategoriesContainer"}>
            <h2>Shop by category</h2>
            <div className="Categories">
                {categoryData.map((category) => (
                    <div className={category.className}>
                        <a href={category.page}>
                            <img src={category.imgSrc} alt={"img1"}/>
                            <p>{category.categoryTitle}</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Categories
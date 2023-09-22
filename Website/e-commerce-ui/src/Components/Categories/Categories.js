import './Categroies.css'
import img1 from '../../Assets/Categories/img1.png'
import img2 from '../../Assets/Categories/img2.png'
import img3 from '../../Assets/Categories/img3.png'
import img4 from '../../Assets/Categories/img4.png'
import img5 from '../../Assets/Categories/img5.png'
import img6 from '../../Assets/Categories/img6.png'

const Categories = () => {
    const categoryData = [
        {
            className: "div1",
            page: "../Pages/Men.js",
            imgSrc: img1,
            categoryTitle:"Summer Clothes"
        },
        {
            className: "div2",
            page: "../Pages/Men.js",
            imgSrc: img2,
            categoryTitle:"Coats"
        },
        {
            className: "div3",
            page: "../Pages/Men.js",
            imgSrc: img3,
            categoryTitle:"Sweaters"
        },
        {
            className: "div4",
            page: "../Pages/Men.js",
            imgSrc: img4,
            categoryTitle:"Jackets"
        },
        {
            className: "div5",
            page: "../Pages/Men.js",
            imgSrc: img5,
            categoryTitle:"Pants"
        },
        {
            className: "div6",
            page: "../Pages/Men.js",
            imgSrc: img6,
            categoryTitle:"Hoodies"
        },
    ]
    return (
        <div className={"Categories"}>
            <h2>Shop by category</h2>
            <div className="parent">
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
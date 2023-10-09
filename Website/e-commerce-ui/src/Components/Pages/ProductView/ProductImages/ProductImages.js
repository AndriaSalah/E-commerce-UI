import './ProductImages.css'
import {useEffect, useState} from "react";

const ProductImages = ({images}) => {

    const [selectedImg, setSelectedImg] = useState(images[0])

    function changeImg(image) {
        setSelectedImg(image)
    }

    useEffect(() => {
        setSelectedImg(images[0])
    }, [images]);
    // noinspection JSValidateTypes
    return (
        <div className="parent">
            <div className="div1">
                <img onClick={()=> changeImg(images[0])} src={images[0]} alt={"product 1"}/>
            </div>
            <div className="div2">
                <img onClick={()=> changeImg(images[1])} src={images[1]} alt={"product 1"}/>
            </div>
            <div className="div3">
                <img onClick={()=> changeImg(images[2])} src={images[2]} alt={"product 1"}/>
            </div>
            <div className="div4">
                <img onClick={()=> changeImg(images[3])} src={images[3]} alt={"product 1"}/>
            </div>
            <div className="div5">
                <img onClick={()=> changeImg(images[4])} src={images[4]} alt={"product 1"}/>
            </div>
            <div className="div6">
                <img src={selectedImg} alt={"product 1"}/>
            </div>
        </div>
    )
}
export default ProductImages
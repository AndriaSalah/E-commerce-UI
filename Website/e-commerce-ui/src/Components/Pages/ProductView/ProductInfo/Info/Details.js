import './info.css'
const Details = ({className,Description,size,Material,Care})=>{
    return(
        <div className={"Details " + className}>
            <h3>Product Details</h3>
            <p>{Description}</p>
            <h3>Size & Fit</h3>
            <p>The model is wearing size {size}</p>
            <h3>Material & Care</h3>
            <p>{Material}</p>
            <p>{Care}</p>

        </div>
    )
}
export default Details
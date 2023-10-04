import './info.css'
import {renderStars} from "../../../../ProductsData";
const Ratings = ({className,Comments ,Rating})=>{
    console.log(Comments)
    return(
        <div className={"Ratings " + className} >
            <h4>Ratings</h4>
            <h2>{Rating}{renderStars(Rating)}</h2>
            <p>40 Verified Buyers</p>
            {Comments.map(review=>(

                <div className={"Review"}>
                    <p>{renderStars(review.Stars,"#F2C94C")} {review.Stars}</p>
                    <p>{review.Review}</p>
                    <div className={"ReviewImages"}>
                        {review.ReviewImages.map(img =>(
                            <img src={img} alt={"img"}/>
                        ))}
                    </div>
                    <div className={"Reviewer"}>
                        <p>{review.Reviewer} | {review.Date}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Ratings
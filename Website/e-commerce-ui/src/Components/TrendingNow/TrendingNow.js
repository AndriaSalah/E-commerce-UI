import {Swiper, SwiperSlide} from "swiper/react";
import image1 from '../../Assets/TrendingNow/img1.png'
import image2 from '../../Assets/TrendingNow/img2.png'
import image3 from '../../Assets/TrendingNow/img3.png'
import image4 from '../../Assets/TrendingNow/img4.png'
import image5 from '../../Assets/TrendingNow/img5.png'
import {faStar} from "@fortawesome/free-solid-svg-icons";
import 'swiper/css';
import './TrendingNow.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
const TrendingItemsData = [
    {
        ItemName:"Women's Denim Jacket",
        BrandName: "Brand Name",
        score: 4.1,
        ActualPrice:"Rs. 1000",
        OfferPrice:"Rs. 700",
        SalePercentage: "(-30% off)",
        ImgSrc : image5
    },
    {
        ItemName:"Women's Denim Jacket",
        BrandName: "Brand Name",
        score: 4.3,
        ActualPrice:"Rs. 1000",
        OfferPrice:"Rs. 700",
        SalePercentage: "(-30% off)",
        ImgSrc : image2
    },
    {
        ItemName:"Women's Denim Jacket",
        BrandName: "Brand Name",
        score: 4.2,
        ActualPrice:"Rs. 1000",
        OfferPrice:"Rs. 700",
        SalePercentage: "(-30% off)",
        ImgSrc : image3
    },
    {
        ItemName:"Women's Denim Jacket",
        BrandName: "Brand Name",
        score: 4.1,
        ActualPrice:"Rs. 1000",
        OfferPrice:"Rs. 700",
        SalePercentage: "(-30% off)",
        ImgSrc : image4
    },
    {
        ItemName:"Women's Denim Jacket",
        BrandName: "Brand Name",
        score: 4.4,
        ActualPrice:"Rs. 1000",
        OfferPrice:"Rs. 700",
        SalePercentage: "(-30% off)",
        ImgSrc : image1
    }
]
const TrendingNow = ()=>{

    return(
        <div className={'TrendingItems'}>
            <h2>Trending Now</h2>
            <Swiper

                    spaceBetween={50}
                    slidesPerView={4}
                    grabCursor={true}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
            >
                {
                    TrendingItemsData.map(item=>(
                    [<SwiperSlide key={Math.random()}>
                        <div className={'TrendingItem'}>
                            <img src={item.ImgSrc} alt={"item"}/>
                            <h3>{item.ItemName}</h3>
                            <div id={"Section1"}>
                                <h4>{item.BrandName}</h4>
                                <p>{item.score }
                                    <FontAwesomeIcon id={"icon"} icon={faStar} />
                                </p>
                            </div>
                            <div id={'Section2'}>
                                <h3>{item.OfferPrice}</h3>
                                <h4>{item.ActualPrice}</h4>
                                <p>{item.SalePercentage}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ]))}
            </Swiper>
        </div>
    )
}

export default TrendingNow
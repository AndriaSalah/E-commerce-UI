import {Swiper, SwiperSlide} from "swiper/react";
import image1 from '../../../Assets/TrendingNow/img1.png'
import image2 from '../../../Assets/TrendingNow/img2.png'
import image3 from '../../../Assets/TrendingNow/img3.png'
import image4 from '../../../Assets/TrendingNow/img4.png'
import image5 from '../../../Assets/TrendingNow/img5.png'
import 'swiper/css';
import './TrendingNow.css'
import ProductCards from "../../Ui/ProductCards/ProductCards";
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

                    spaceBetween={-50}
                    slidesPerView={4}
                    grabCursor={true}
            >
                {
                    TrendingItemsData.map(item=>(
                    [<SwiperSlide key={Math.random()}>
                        <ProductCards
                        ImgSrc={item.ImgSrc}
                        ItemName={item.ItemName}
                        BrandName={item.BrandName}
                        score={item.score}
                        OfferPrice={item.OfferPrice}
                        ActualPrice={item.ActualPrice}
                        SalePercentage={item.SalePercentage}
                        />
                    </SwiperSlide>
                    ]))}
            </Swiper>
        </div>
    )
}

export default TrendingNow
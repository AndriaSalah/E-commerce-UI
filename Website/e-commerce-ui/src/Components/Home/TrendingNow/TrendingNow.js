import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import './TrendingNow.css'
import ProductCards from "../../Ui/ProductCards/ProductCards";
import {getTrendingOffers} from "../../ProductsData";

const TrendingNow = ()=>{
const trendingNow = getTrendingOffers()
    console.log(trendingNow)
    return(
        <div className={'TrendingItems'}>
            <h2>Trending Now</h2>
            <Swiper

                    spaceBetween={-50}
                    slidesPerView={4}
                    grabCursor={true}
            >
                {
                    trendingNow.map(item=>(
                    [<SwiperSlide key={Math.random()}>
                        <ProductCards
                        ImgSrc={item.Thumbnail}
                        ItemName={item.ItemName}
                        BrandName={item.BrandName}
                        score={item.Rating}
                        OfferPrice={item.OfferPrice}
                        ActualPrice={item.ActualPrice}
                        SalePercentage={item.Discount}
                        />
                    </SwiperSlide>
                    ]))}
            </Swiper>
        </div>
    )
}

export default TrendingNow
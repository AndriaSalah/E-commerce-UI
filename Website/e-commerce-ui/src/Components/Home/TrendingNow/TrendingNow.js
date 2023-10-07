import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import './TrendingNow.css'
import 'swiper/css/pagination';
import ProductCards from "../../Ui/ProductCards/ProductCards";
import {getTrendingOffers} from "../../ProductsData";

const TrendingNow = ()=>{
const trendingNow = getTrendingOffers()
    console.log(trendingNow)
    return(
        <div className={'TrendingItems'}>
            <h2>Trending Now</h2>
            <Swiper
                pagination={{clickable: true, type: "bullets"}}
                slidesPerView={5}
                spaceBetween={20}
                breakpoints={{
                    320:{
                        slidesPerView: 2,
                        spaceBetween: 100,
                    },
                    674: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: -50,
                    },
                    900: {
                        slidesPerView: 2,
                        spaceBetween: -200,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 5,
                    },
                    1200:{
                        slidesPerView: 4,
                        spaceBetween: 5,
                    },
                    1400:{
                        slidesPerView: 5,
                        spaceBetween: 5,
                    }
                }}

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
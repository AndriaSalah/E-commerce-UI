import {Swiper, SwiperSlide} from "swiper/react";
import ProductCards from "../../../Ui/ProductCards/ProductCards";
import {getRecommendedProducts} from "../../../ProductsData";
import './CustomersAlsoLike.css'
const CustomersAlsoLike = ()=>{
    const Recommendations = getRecommendedProducts()
    return(
        <div className={'CustomersAlsoLike'}>
            <h2>Customers also like</h2>
            <Swiper
                spaceBetween={-50}
                slidesPerView={4}
                grabCursor={true}
            >
                {
                    Recommendations.map(item=>(
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
export default CustomersAlsoLike
import {Swiper, SwiperSlide} from "swiper/react";
import ProductCards from "../../../Ui/ProductCards/ProductCards";
import {getSimilarProducts} from "../../../ProductsData";
import './SimilarProducts.css'
const SimilarProducts = ()=>{
    const similarProducts = getSimilarProducts()
    return(
        <div className={'SimilarProducts'}>
            <h2>Similar Product</h2>
            <Swiper
                spaceBetween={-50}
                slidesPerView={4}
                grabCursor={true}
            >
                {
                    similarProducts.map(item=>(
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
export default SimilarProducts
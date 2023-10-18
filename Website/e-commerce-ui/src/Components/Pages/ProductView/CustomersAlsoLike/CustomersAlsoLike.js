import {Swiper, SwiperSlide} from "swiper/react";
import ProductCards from "../../../Ui/ProductCards/ProductCards";
import {getRecommendedProducts} from "../../../ProductsData";
import './CustomersAlsoLike.css'
import 'swiper/css/pagination';
import {Pagination} from "swiper/modules";
import {useNavigate} from "react-router-dom";

const CustomersAlsoLike = () => {
    const Recommendations = getRecommendedProducts()
    const Navigate = useNavigate();
    const handleLinkClick = (item) => {
        Navigate('/ProductView', {state:{...item}} );
    };
    return (
        <div className={'CustomersAlsoLike'}>
            <h2>Customers also like</h2>
            <Swiper

                breakpoints={{
                    240: {
                        slidesPerView: 2,
                        spaceBetween: 150,
                    },
                    300: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    360: {
                        slidesPerView: 1,
                        spaceBetween: 50,
                    },
                    674: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    1400: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    }
                }}
                modules={[Pagination]}
                pagination={{clickable: true, type: "bullets"}}
                spaceBetween={-50}
                slidesPerView={4}

            >
                {
                    Recommendations.map(item => (
                        [<SwiperSlide key={item.id}>
                            <div id={"productLink"} onClick={() => handleLinkClick(item)}>
                                <ProductCards
                                    ImgSrc={item.Thumbnail}
                                    ItemName={item.ItemName}
                                    BrandName={item.BrandName}
                                    score={item.Rating}
                                    OfferPrice={item.OfferPrice}
                                    ActualPrice={item.ActualPrice}
                                    discount={item.Discount}

                                />
                            </div>
                            <div className="swiper-lazy-preloader"></div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}
export default CustomersAlsoLike
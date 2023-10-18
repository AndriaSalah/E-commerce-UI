import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../Home"
import {Pagination, Autoplay} from "swiper/modules";
import Button from "../../Ui/Button/Button";
import {offersData} from "../../ProductsData";

const OffersCarousel = () => {

    return (
        <div className={"OffersCarousel"}>
                <Swiper style={{
                    "--swiper-pagination-color": '#000000',
                }}
                    modules={[Pagination, Autoplay,]}
                    autoplay={{
                        delay: 4500,
                        disableOnInteraction: false,
                    }}
                    grabCursor={true}
                    pagination={{clickable: true, type: "bullets"}}
            >
                {offersData.map((item) => ([
                    <SwiperSlide key={item.id}>
                        <div className={"Offer"}>
                            <div  id={"OfferImage"}><img src={item.OfferImg} alt={"asd"}/></div>
                            <div id={"offerDetails"}>
                                <img src={item.detailsBg} alt={"asd"}></img>
                                <div id={"DetailsWrapper"}>
                                    <h2>{item.details}</h2>
                                    <Button lightMode={false} className={"OffersExplore"} href={home}>Explore</Button>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-lazy-preloader"></div>
                    </SwiperSlide>
                ]))}

            </Swiper>
        </div>
    );
}

export default OffersCarousel

import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../../Pages/Home"
import offer1 from '../../../Assets/mainCarousel1.png'
import offer2 from '../../../Assets/mainCarousel2.png'
import {Pagination, Autoplay} from "swiper/modules";
import Button from "../../Ui/ExploreButton/Button";

const OffersCarousel = () => {
    const offersData = [
        {
            OfferImg: offer1,
            details: "Big Fashion Festival 50% - 80% off",
            detailsBg: offer2
        },
        {
            OfferImg: offer1,
            details: "Big Fashion Festival 50% - 80% off",
            detailsBg: offer2
        },
        {
            OfferImg: offer1,
            details: "Big Fashion Festival 50% - 80% off",
            detailsBg: offer2
        },
        {
            OfferImg: offer1,
            details: "Big Fashion Festival 50% - 80% off",
            detailsBg: offer2
        },

    ]
    return (
        <div className={"OffersCarousel"}>
            <Swiper style={{
                "--swiper-pagination-color": "#002482",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",


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
                    <SwiperSlide key={Math.random()}>
                        <div className={"Offer"}>
                            <div id={"OfferImage"}><img src={item.OfferImg} alt={"asd"}/></div>
                            <div id={"offerDetails"}>
                                <img src={item.detailsBg} alt={"asd"}></img>
                                <div id={"DetailsWrapper"}>
                                    <h2>{item.details}</h2>
                                    <Button lightMode={false} className={"OffersExplore"} href={home}>Explore</Button>
                                </div>
                            </div>
                        </div>
                        {/*<img className={"OfferImg"} src={item.OfferImg} alt={'carousel'}/>*/}

                    </SwiperSlide>
                ]))}

            </Swiper>
        </div>
    );
}

export default OffersCarousel

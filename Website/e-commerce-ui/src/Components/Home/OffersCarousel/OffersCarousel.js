import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../../Pages/Home"
import offer1 from '../../../Assets/MainCarousel.png'
import {Pagination, Autoplay} from "swiper/modules";
import Button from "../../Ui/ExploreButton/Button";

const OffersCarousel = () => {
    const offersData = [
        {
            OfferImg: offer1
        },
        {
            OfferImg: offer1
        },
        {
            OfferImg: offer1
        },
        {
            OfferImg: offer1
        },

    ]
    return (
        <div className={"OffersCarousel"}>
            <Swiper style={{
                "--swiper-pagination-color": "#002482",
                "--swiper-pagination-bullet-size": "10px",
                "--swiper-pagination-bullet-horizontal-gap": "4px",
                margin: "2rem"

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
                        <img className={"OfferImg"} src={item.OfferImg} alt={'carousel'}/>
                        <Button lightMode={false} className={"OffersExplore"} href={home}>Explore</Button>
                    </SwiperSlide>
                ]))}

            </Swiper>
        </div>
    );
}

export default OffersCarousel

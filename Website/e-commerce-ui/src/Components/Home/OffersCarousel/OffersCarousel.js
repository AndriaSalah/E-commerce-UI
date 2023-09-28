import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../../Pages/Home"
import offer1 from '../../../Assets/MainCarousel.png'
import {Pagination, Autoplay} from "swiper/modules";
import Button from "../../Ui/ExploreButton/Button";

const OffersCarousel = () => {
    const offersData =[
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
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
            {offersData.map((item)=>([
                <SwiperSlide key={Math.random()}>
                    <img className={"OfferImg"} src={item.OfferImg} alt={'carousel'}/>
                    <Button lightMode={false} className={"OffersExplore"} href={home}>Explore</Button>
                </SwiperSlide>
            ]))}

        </Swiper>
    );
}

export default OffersCarousel

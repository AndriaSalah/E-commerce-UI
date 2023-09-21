import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../Pages/Home"
import example from '../../Assets/MainCarousel.png'
import {Pagination, Autoplay} from "swiper/modules";
import ExploreButton from "../Ui/ExploreButton/ExploreButton";

const OffersCarousel = () => {
    return (
        <Swiper style={{
            "--swiper-pagination-color": "#002482",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "4px",
            "--swiper-pagination-bottom": "0",
            margin: "2rem"

        }}
                modules={[Pagination, Autoplay,]}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: true,
                }}
                grabCursor={true}
                pagination={{clickable: true, type: "bullets"}}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>

                <img className={"OfferImg"} src={example} alt={'carousel'}/>
                <ExploreButton className={"dark OffersExplore"} href={home}>Explore</ExploreButton>

            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: '100%'}} src={example} alt={'carousel'}/>
                <ExploreButton className={"dark OffersExplore"} href={home}>Explore</ExploreButton>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: '100%'}} src={example} alt={'carousel'}/>
                <ExploreButton className={"dark OffersExplore"} href={home}>Explore</ExploreButton>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width: '100%'}} src={example} alt={'carousel'}/>
                <ExploreButton className={"dark OffersExplore"} href={home}>Explore</ExploreButton>
            </SwiperSlide>

        </Swiper>
    );
}

export default OffersCarousel

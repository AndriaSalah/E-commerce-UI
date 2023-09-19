import {Swiper,SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import './OffersCarousel.css'
import home from "../Pages/Home"
import example from '../../Assets/MainCarousel.png'
import {Pagination} from "swiper/modules";
const OffersCarousel = ()=>{
    return (
        <Swiper style={{
            "--swiper-pagination-color": "#002482",
            "--swiper-pagination-bullet-size": "10px",
            "--swiper-pagination-bullet-horizontal-gap": "4px"
        //margin 2rem
        }}
            modules={[Pagination]}
            grabCursor={true}
            pagination={{ clickable: true , type:"bullets" }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>

                    <img className={"OfferImg"}  src={example} alt={'carousel'}/>
                    <a className={"OffersExplore"} href={home}>Explore</a>

            </SwiperSlide>
            <SwiperSlide>
                <img style={{width:'100%'}} src={example} alt={'carousel'}/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width:'100%'}} src={example} alt={'carousel'}/>
            </SwiperSlide>
            <SwiperSlide>
                <img style={{width:'100%'}} src={example} alt={'carousel'}/>
            </SwiperSlide>

        </Swiper>
    );
}

export default OffersCarousel

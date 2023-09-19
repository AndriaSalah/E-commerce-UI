import {Swiper, SwiperSlide} from "swiper/react";
import image1 from '../../Assets/DealsOfTheDay/dotd1.png'
import image2 from '../../Assets/DealsOfTheDay/dotd2.png'
import image3 from '../../Assets/DealsOfTheDay/dotd3.png'
import brandImg from '../../Assets/Icons/brand1.png'
import 'swiper/css';
import './DealsOfTheDay.css'
import {Scrollbar} from "swiper/modules";
const DealsOfTheDayData = [
    {
        Title:"Best of styles",
        BrandImgSrc:brandImg,
        PriceTag:"Under Rs. 799",
        ImgSrc : image1
    },
    {
        Title:"Best of styles",
        BrandImgSrc:brandImg,
        PriceTag:"Under Rs. 799",
        ImgSrc : image2
    },
    {
        Title:"Best of styles",
        BrandImgSrc:brandImg,
        PriceTag:"Under Rs. 799",
        ImgSrc : image3
    },
    {
        Title:"Best of styles",
        BrandImgSrc:brandImg,
        PriceTag:"Under Rs. 799",
        ImgSrc : image1
    }
]
const TrendingNow = ()=>{
    return(
        <div className={'DealsOfTheDay'}>
            <h2>Deals of theDay</h2>
            <Swiper
                modules={[Scrollbar]}
                spaceBetween={-50}
                slidesPerView={3}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    DealsOfTheDayData.map(item=>(
                        [<SwiperSlide key={Math.random()}>
                            <div className={'DealOfTheDay'}>
                                <img src={item.ImgSrc} alt={"item"}/>
                                <img src={item.BrandImgSrc} alt={"item"}/>
                                <h2>{item.Title}</h2>
                                <h4>{item.PriceTag}</h4>
                            </div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}

export default TrendingNow
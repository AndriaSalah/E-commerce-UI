import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import profileImg from '../../../Assets/profile.png'
import 'swiper/css/navigation';
import './CommentsHome.css'
import {renderStars} from "../../ProductsData";
const CommentsHome = () => {
    const commentData = [
        {
            profileImg:profileImg,
            stars: 3,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Dui vel morbi cursus sed sodales molestie proin dictum gravida.
            Porttitor maecenas tincidunt ipsum semper malesuada.
            In sapien feugiat laoreet convallis eu sed. 
            Sapien et montes, duis tempor euismod augue cras eu eget. 
            Risus suspendisse mauris ullamcorper `
        },
        {
            profileImg:profileImg,
            stars: 4,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Dui vel morbi cursus sed sodales molestie proin dictum gravida.
            Porttitor maecenas tincidunt ipsum semper malesuada.
            In sapien feugiat laoreet convallis eu sed. 
            Sapien et montes, duis tempor euismod augue cras eu eget. 
            Risus suspendisse mauris ullamcorper `
        },
        {
            profileImg:profileImg,
            stars: 3,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Dui vel morbi cursus sed sodales molestie proin dictum gravida.
            Porttitor maecenas tincidunt ipsum semper malesuada.
            In sapien feugiat laoreet convallis eu sed. 
            Sapien et montes, duis tempor euismod augue cras eu eget. 
            Risus suspendisse mauris ullamcorper `
        },
        {
            profileImg:profileImg,
            stars: 4,
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Dui vel morbi cursus sed sodales molestie proin dictum gravida.
            Porttitor maecenas tincidunt ipsum semper malesuada.
            In sapien feugiat laoreet convallis eu sed. 
            Sapien et montes, duis tempor euismod augue cras eu eget. 
            Risus suspendisse mauris ullamcorper `
        },

    ]

    return (
        <div className={'Comments'}>
            <h2>What Our Customers Say</h2>
            <Swiper
                breakpoints={{
                        340:{
                            slidesPerView:1,
                            spaceBetween:60
                        },
                        540:{
                            slidesPerView:1,
                            spaceBetween:10
                        },
                        768:{
                            slidesPerView:2,
                            spaceBetween:50
                        }
                    }
                }
                modules={[Navigation]}
                initialSlide={1}
                navigation={true}
                slidesPerView={2}
                centeredSlides={true}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    commentData.map(comment => (
                        [<SwiperSlide key={Math.random()}>
                            <div className={'Comment'}>
                                <img src={comment.profileImg} alt={"item"} loading={"lazy"}/>
                                <div id={"Section1"}>
                                    <p>{comment.stars}
                                        {renderStars(comment.stars)}
                                    </p>
                                </div>
                                <p id={"text"}>{comment.text}</p>
                            </div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}
export default CommentsHome
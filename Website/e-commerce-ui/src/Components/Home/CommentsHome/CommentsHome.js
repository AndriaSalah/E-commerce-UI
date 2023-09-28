import {Swiper, SwiperSlide} from "swiper/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Navigation} from "swiper/modules";
import profileImg from '../../../Assets/profile.png'
import 'swiper/css/navigation';
import './CommentsHome.css'
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
    const viewStars =(stars)=>{
        let starsArr = []
        console.log(stars)
        for (let i = 0; i <stars ; i++) {
            starsArr.push(" ")
        }
        console.log(starsArr)
        return starsArr
    }
    return (
        <div className={'Comments'}>
            <h2>What Our Customers Say</h2>
            <Swiper
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
                                <img src={comment.profileImg} alt={"item"}/>
                                <div id={"Section1"}>
                                    <p>{comment.stars}
                                        {viewStars(comment.stars).map((item)=>(
                                            <FontAwesomeIcon id={"icon"} icon={faStar}/>
                                        ))}
                                    </p>
                                </div>
                                <h4>{comment.text}</h4>
                            </div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
        </div>
    )
}
export default CommentsHome
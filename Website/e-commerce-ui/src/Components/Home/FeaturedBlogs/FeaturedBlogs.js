import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow} from "swiper/modules";
import cover1 from "../../../Assets/FeaturedBlogs/img1.png";
import cover2 from "../../../Assets/FeaturedBlogs/img2.png";
import './FeaturedBlogs.css'
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Button from "../../Ui/ExploreButton/Button";

const FeaturedBlogs = ()=>{
    const BlogsData = [
        {
            BlogTitle:"Discover new way to decorate your home .",
            Text:"Lorem ipsum dolor sit amet,aliquaconsectetur adipiscing elit ut ...",
            cover : cover1
        },
        {
            BlogTitle:"Discover new way to decorate your home .",
            Text:"Lorem ipsum dolor sit amet,aliquaconsectetur adipiscing elit ut ...",
            cover : cover2
        },
        {
            BlogTitle:"Discover new way to decorate your home .",
            Text:"Lorem ipsum dolor sit amet,aliquaconsectetur adipiscing elit ut ...",
            cover : cover1
        },
        {
            BlogTitle:"Discover new way to decorate your home .",
            Text:"Lorem ipsum dolor sit amet,aliquaconsectetur adipiscing elit ut ...",
            cover : cover2
        },
        {
            BlogTitle:"Discover new way to decorate your home .",
            Text:"Lorem ipsum dolor sit amet,aliquaconsectetur adipiscing elit ut ...",
            cover : cover1
        }
    ]
    return(
        <div className={'Blogs'}>
            <h2 className={"title"}>Featured Blogs</h2>
            <Swiper
                modules={[EffectCoverflow]}
                effect={'coverflow'}
                spaceBetween={-60}
                slidesPerView={2}
                initialSlide={1}
                centeredSlides={true}
                grabCursor={true}
                coverflowEffect={{
                    rotate: 0,
                    stretch: -250,
                    depth: 0,
                    modifier: 1,
                    slideShadows: false,
                }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {
                    BlogsData.map(Blog=>(
                        [<SwiperSlide key={Math.random()}>
                            <div className={'Blog'}>
                                <div id={"BlogDetails"}>
                                    <h3 id={"type"}>Blog</h3>
                                    <h2>{Blog.BlogTitle}</h2>
                                    <h3 id={"text"}>{Blog.Text}</h3>
                                    <span/>
                                    <div id={"footer"}>
                                        <h3>By Souha . h</h3>
                                        <a href='../../Pages/Products/Products.js'><FontAwesomeIcon id={'icon'} icon={faArrowRight} ></FontAwesomeIcon></a>
                                    </div>
                                </div>
                                <img id={"CoverImg"} src={Blog.cover} alt={"offer"} loading={"lazy"}/>
                            </div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
            <div id={"buttonSpace"}>
                {/*<a href='../../Pages/Products/Products.js' id={"viewAll"}>View all</a>*/}
                <Button lightMode={true} >View all</Button>
            </div>
        </div>
    )
}
export default FeaturedBlogs
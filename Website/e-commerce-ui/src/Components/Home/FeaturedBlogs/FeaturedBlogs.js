import {Swiper, SwiperSlide} from "swiper/react";
import {EffectCoverflow,Pagination} from "swiper/modules";
import './FeaturedBlogs.css'
import "swiper/css/pagination";
import 'swiper/css/effect-coverflow';
import Button from "../../Ui/Button/Button";
import {ThemeContext} from "../../../App";
import {useContext} from "react";
import {BlogsData} from "../../ProductsData";
import {BsArrowRight} from "react-icons/bs";
import {NavLink} from "react-router-dom";

const FeaturedBlogs = ()=>{
    const {Theme}=useContext(ThemeContext)
    return(
        <div className={'Blogs'}>
            <h2 className={"title"}>Featured Blogs</h2>
            <Swiper
                breakpoints={
                {
                    340:{
                       slidesPerView:1,
                        spaceBetween:0,

                    },
                    786:{
                        slidesPerView:2
                    }
                }
                }
                modules={[EffectCoverflow,Pagination]}
                effect={'coverflow'}
                spaceBetween={0}
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
                pagination={{
                    type : "bullets"
                }
                }
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
                                        <NavLink  to={'/'} onClick={(e)=> e.preventDefault()}><BsArrowRight/></NavLink>
                                    </div>
                                </div>
                                <img id={"CoverImg"} src={Blog.cover} alt={"offer"} loading={"lazy"}/>
                            </div>
                            <div className="swiper-lazy-preloader"></div>
                        </SwiperSlide>
                        ]))}
            </Swiper>
            <div id={"buttonSpace"}>
                <Button lightMode={Theme==="dark" && true} >View all</Button>
            </div>
        </div>
    )
}
export default FeaturedBlogs
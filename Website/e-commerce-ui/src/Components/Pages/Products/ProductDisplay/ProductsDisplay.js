import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, Navigation} from "swiper/modules";
import ProductCards from "../../../Ui/ProductCards/ProductCards";
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './ProductsDisplay.css'
import 'swiper/css/navigation';
import {Link} from "react-router-dom";
import {BsChevronDown, BsSliders} from "react-icons/bs";

const ProductsDisplay = ({Shown, ShowFiltersBar, Products}) => {
    return (

            <div className={"ProductDisplay " + (!Shown ? "Expand" : "")}>
                <div id={"options"}>
                    <button onClick={ShowFiltersBar}>Filters <BsSliders/></button>
                    <button>Sort By <BsChevronDown/></button>
                </div>
                {Products.length > 0 ?
                <div id={"View"}>
                    <Swiper

                        breakpoints={{
                            240: {
                                slidesPerView: 1,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            300: {
                                slidesPerView: 1,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            360: {
                                slidesPerView: 2,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:10,

                            },
                            426: {
                                slidesPerView: 2,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            580: {
                                slidesPerView: 3,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            768:{
                                slidesPerView: 3,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            1024:{
                                slidesPerView: 4,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:20
                            },
                            1200:{
                                slidesPerView: 4,
                                grid:{rows: 2, fill: "row"},
                                spaceBetween:40
                            }

                        }}

                        modules={[Grid, Pagination, Navigation]}
                        navigation={true}
                        pagination={{clickable: true, type: "bullets", dynamicBullets: true, dynamicMainBullets: 1}}
                        slidespercolumn={2}
                        className={'men'}

                    >
                        {
                            Products.map(item => (

                                [<SwiperSlide  key={Math.random()}>
                                    <Link to={'/ProductView'} state={{...item}}>
                                        <ProductCards
                                            ImgSrc={item.Thumbnail}
                                            ItemName={item.ItemName}
                                            BrandName={item.BrandName}
                                            score={item.Rating}
                                            OfferPrice={item.OfferPrice}
                                            ActualPrice={item.ActualPrice}
                                        />
                                    </Link>
                                    <div className="swiper-lazy-preloader"></div>
                                </SwiperSlide>]
                            ))}
                    </Swiper>
                </div>:
                    <div className={"Loader"}>
                        <div className="sk-chase">
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                            <div className="sk-chase-dot"></div>
                        </div>
                    </div>}
            </div>

    )
}
export default ProductsDisplay
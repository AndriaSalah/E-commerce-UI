import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination, Navigation} from "swiper/modules";
import ProductCards from "../../../Ui/ProductCards/ProductCards";
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './ProductsDisplay.css'
import 'swiper/css/navigation';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders, faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const ProductsDisplay = ({Shown, ShowFiltersBar, Products}) => {
    return (
        Products.length > 0 ?
            <div className={"ProductDisplay " + (!Shown ? "Expand" : "")}>
                <div id={"options"}>
                    <button onClick={ShowFiltersBar}>Filters <FontAwesomeIcon id={"icon"} icon={faSliders}/></button>
                    <button>Sort By <FontAwesomeIcon id={"icon"} icon={faChevronDown}/></button>
                </div>
                <div id={"View"}>
                    <Swiper
                        modules={[Grid, Pagination, Navigation]}
                        spaceBetween={20}
                        slidesPerView={Shown ? 4 : 5}
                        navigation={true}
                        pagination={{clickable: true, type: "bullets", dynamicBullets: true, dynamicMainBullets: 1}}
                        grid={{rows: 2, fill: "row"}}
                        className={'men'}

                    >
                        {
                            Products.map(item => (

                                [<SwiperSlide key={Math.random()}>
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
                                </SwiperSlide>]
                            ))}
                    </Swiper>
                </div>
            </div> :
            <div className={"Loader"}>
                <div className="sk-chase">
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                    <div className="sk-chase-dot"></div>
                </div>
            </div>
    )
}
export default ProductsDisplay
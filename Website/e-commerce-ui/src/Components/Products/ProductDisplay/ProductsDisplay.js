import {Swiper, SwiperSlide} from "swiper/react";
import {Grid, Pagination , Navigation} from "swiper/modules";
import ProductCards from "../../Ui/ProductCards/ProductCards";
import productImages from "../../productImages";
import 'swiper/css/pagination';
import 'swiper/css/grid';
import './ProductsDisplay.css'
import 'swiper/css/navigation';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSliders,faChevronDown} from "@fortawesome/free-solid-svg-icons";
const ProductsDisplay = (props)=>{
    const Products=Object.values(productImages).map((img)=>(

        {
            ImgSrc:img,
            ItemName:"Women's Denim Jacket",
            BrandName:"Brand Name",
            score:4 ,
            OfferPrice:"Rs. 700",
            ActualPrice:"Rs. 1000",
            SalePercentage:"(30% off)"
        }

    ))
    return(
        <div className={"ProductDisplay " + (!props.Shown ? "Expand" : "")}>
            <div id={"options"}>
                <button onClick={props.ShowFiltersBar}>Filters <FontAwesomeIcon id={"icon"} icon={faSliders} /></button>
                <button>Sort By  <FontAwesomeIcon id={"icon"} icon={faChevronDown} /></button>
            </div>
            <div id={"View"}>
                <Swiper
                    modules={[Grid ,Pagination ,Navigation]}
                    spaceBetween={20}
                    slidesPerView={props.Shown? 3.6:4.6}
                    navigation={true}
                    pagination={{clickable: true, type: "bullets"}}
                    grid={{rows:2 , fill:"row"}}
                    className={'men'}
                >
                    {
                        Products.map(item=>(

                            [<SwiperSlide key={Math.random()}>
                                <ProductCards
                                    ImgSrc={item.ImgSrc}
                                    ItemName={item.ItemName}
                                    BrandName={item.BrandName}
                                    score={item.score}
                                    OfferPrice={item.OfferPrice}
                                    ActualPrice={item.ActualPrice}
                                    SalePercentage={item.SalePercentage}
                                />
                            </SwiperSlide>]
                        ))}
                </Swiper>
            </div>
        </div>
    )
}
export default ProductsDisplay
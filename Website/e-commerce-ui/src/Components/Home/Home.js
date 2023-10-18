
import OffersCarousel from "./OffersCarousel/OffersCarousel";
import TrendingNow from "./TrendingNow/TrendingNow";
import DealsOfTheDay from "./DealsOfTheDay/DealsOfTheDay";
import TrendingOffers from "./TrendingOffers/TrendingOffers";
import IntersectionAd from "./IntersectionAd/IntersectionAd";
import Categories from "./Categories/Categories";
import CommentsHome from "./CommentsHome/CommentsHome";
import FeaturedBlogs from "./FeaturedBlogs/FeaturedBlogs";
import Benefits from "./Benifits/Benefits";
import AboutUs from "./AboutUs/AboutUs";
import {motion} from "framer-motion";


const Home = () =>{
    return (
        <motion.div
            initial={{x:"-100%" , opacity:0}}
            animate={{x:0 , opacity:1 }}
            exit={{x:"100%" , opacity:0}}
            transition={{duration:0.5 ,ease:"easeInOut"}}
            className={"Home"}>
            <OffersCarousel/>
            <TrendingNow/>
            <DealsOfTheDay/>
            <TrendingOffers/>
            <IntersectionAd/>
            <Categories/>
            <CommentsHome/>
            <FeaturedBlogs/>
            <Benefits/>
            <AboutUs/>

        </motion.div>
    );
}

export default Home
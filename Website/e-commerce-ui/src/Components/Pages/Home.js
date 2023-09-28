
import OffersCarousel from "../Home/OffersCarousel/OffersCarousel";
import TrendingNow from "../Home/TrendingNow/TrendingNow";
import DealsOfTheDay from "../Home/DealsOfTheDay/DealsOfTheDay";
import TrendingOffers from "../Home/TrendingOffers/TrendingOffers";
import IntersectionAd from "../Home/IntersectionAd/IntersectionAd";
import Categories from "../Home/Categories/Categories";
import CommentsHome from "../Home/CommentsHome/CommentsHome";
import FeaturedBlogs from "../Home/FeaturedBlogs/FeaturedBlogs";
import Benefits from "../Home/Benifits/Benefits";
import AboutUs from "../Home/AboutUs/AboutUs";

const Home = () =>{
    return (
        <div>
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
        </div>
    );
}

export default Home

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

const Home = () =>{
    return (
        <div className={"Home"}>
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
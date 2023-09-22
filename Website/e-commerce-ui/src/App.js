
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import OffersCarousel from "./Components/OffersCarousel/OffersCarousel";
import TrendingNow from "./Components/TrendingNow/TrendingNow";
import DealsOfTheDay from "./Components/DealsOfTheDay/DealsOfTheDay";
import 'swiper/css';
import TrendingOffers from "./Components/TrendingOffers/TrendingOffers";
import IntersectionAd from "./Components/IntersectionAd/IntersectionAd";
import Categories from "./Components/Categories/Categories";
import CommentsHome from "./Components/CommentsHome/CommentsHome";
import FeaturedBlogs from "./Components/FeaturedBlogs/FeaturedBlogs";
import Benefits from "./Components/Benifits/Benefits";


function App() {
  return (
      <div>
          <Navbar></Navbar>
          <OffersCarousel></OffersCarousel>
          <TrendingNow></TrendingNow>
          <DealsOfTheDay></DealsOfTheDay>
          <TrendingOffers></TrendingOffers>
          <IntersectionAd></IntersectionAd>
          <Categories></Categories>
          <CommentsHome></CommentsHome>
          <FeaturedBlogs></FeaturedBlogs>
          <Benefits></Benefits>
      </div>
  );
}

export default App;

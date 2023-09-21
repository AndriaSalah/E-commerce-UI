
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import OffersCarousel from "./Components/OffersCarousel/OffersCarousel";
import TrendingNow from "./Components/TrendingNow/TrendingNow";
import DealsOfTheDay from "./Components/DealsOfTheDay/DealsOfTheDay";
import 'swiper/css';
import TrendingOffers from "./Components/TrendingOffers/TrendingOffers";
import IntersectionAd from "./Components/IntersectionAd/IntersectionAd";


function App() {
  return (
      <div>
          <Navbar></Navbar>
          <OffersCarousel></OffersCarousel>
          <TrendingNow></TrendingNow>
          <DealsOfTheDay></DealsOfTheDay>
          <TrendingOffers></TrendingOffers>
          <IntersectionAd></IntersectionAd>
      </div>
  );
}

export default App;

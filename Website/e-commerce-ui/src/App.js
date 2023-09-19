
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import OffersCarousel from "./Components/OffersCarousel/OffersCarousel";
import TrendingNow from "./Components/TrendingNow/TrendingNow";
import DealsOfTheDay from "./Components/DealsOfTheDay/DealsOfTheDay";


function App() {
  return (
      <div>
          <Navbar></Navbar>
          <OffersCarousel></OffersCarousel>
          <TrendingNow></TrendingNow>
          <DealsOfTheDay></DealsOfTheDay>
      </div>
  );
}

export default App;

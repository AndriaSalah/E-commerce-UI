
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import 'swiper/css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/Products"} element={<Products/>}/>
            </Routes>
            <Footer/>
        </Router>
  );
}

export default App;

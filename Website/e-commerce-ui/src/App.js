import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import 'swiper/css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import ProductView from "./Components/Pages/ProductView/ProductView";
import {useLayoutEffect} from "react";

function App() {
    const Wrapper = ({children}) => {
        const location = useLocation()
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0)
        }, [location.pathname])
        return children
    }
    return (

        <Router>
            <Navbar/>
            <Wrapper>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/Products"} element={<Products/>}/>
                    <Route path={"/ProductView"} element={<ProductView/>}/>
                </Routes>
            </Wrapper>
            <Footer/>
        </Router>
    );
}

export default App;

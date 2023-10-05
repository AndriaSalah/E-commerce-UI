import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import 'swiper/css';
import {BrowserRouter as Router, Routes, Route, useLocation} from "react-router-dom";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products/Products";
import Footer from "./Components/Footer/Footer";
import ProductView from "./Components/Pages/ProductView/ProductView";
import { useLayoutEffect, useState } from "react";

function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function App() {
    const [Theme, setTheme] = useState("dark");
    const whiteTheme = {
        '--backGroundColor': '#FFFFFF',
        '--shadowColor': 'rgba(169, 169, 169, 0.6)',
        '--accentColor': '#FFFFFF',
        '--accentColor1': '#F0F0F0',
        '--accentColor2': '#9b9b9b',
        '--accentColor3': '#0A8200',
        '--accentColor4': '#444444',
        '--textColor': 'black',
        '--LogoFilter': 'invert(8%) sepia(94%) saturate(5041%) hue-rotate(226deg) brightness(90%) contrast(103%)',
        '--footerColor': '#00071B'
    };

    function SwitchColor() {
        Theme === "dark" ? setTheme("white") : setTheme("dark");
    }

    return (
        <div className={"MainContainer"} style={Theme === "white" ? { ...whiteTheme } : {}}>
            <Router>
                <ScrollToTop /> 
                <Navbar Theme={Theme} SwitchColor={SwitchColor} />
                <Routes>
                    <Route path={"/"} element={<Home />} />
                    <Route path={"/Products"} element={<Products />} />
                    <Route path={"/ProductView"} element={<ProductView />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

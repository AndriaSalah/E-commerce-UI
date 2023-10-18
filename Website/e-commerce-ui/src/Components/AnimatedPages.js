import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Pages/Products/Products";
import ProductView from "./Pages/ProductView/ProductView";
import {AnimatePresence} from "framer-motion";

function AnimatedPages(props) {
    const location = useLocation()
    return (
        <AnimatePresence mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                <Route  path={"/"} element={<Home/>}/>
                <Route path={"/Shop"} element={<Products/>}/>
                <Route path={"/Kids"} element={<Products/>}/>
                <Route path={"/Men"} element={<Products/>}/>
                <Route path={"/Women"} element={<Products/>}/>
                <Route path={"/ContactUs"} element={<Products/>}/>
                <Route path={"/ProductView"} element={<ProductView/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default AnimatedPages;
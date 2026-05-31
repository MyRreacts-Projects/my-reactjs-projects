//routes.jsx
import React from "react";
import {Routes,Route} from 'react-router-dom';
import Home from "../../pages/home/home";
import Prouducts from "../../pages/AllProducts/prouducts";
import CardItems from "../../pages/CardItems/card-items";
import SignUp from "../../pages/SignUp/sign-up";
const AppRoutes = ()=>{
    return(
        <Routes>
            <Route element={<Home/>} path="/"/>
            <Route element={<Prouducts/>} path="/products"/>
            <Route element={<CardItems/>} path="/card-items"/>
            <Route element={<SignUp/>} path="/sign-up"/>
        </Routes>
    )
}
export default AppRoutes;
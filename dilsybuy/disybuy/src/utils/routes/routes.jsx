//routes.jsx
// import React from "react";
// import {Routes,Route} from 'react-router-dom';
// import Home from "../../pages/home/home";
// import Prouducts from "../../pages/AllProducts/prouducts";
// import CardItems from "../../pages/CardItems/card-items";
// import SignUp from "../../pages/SignUp/sign-up";
// import Testimonial from "../../pages/testimonial/testimonial";
// const AppRoutes = ()=>{
//     return(
//         <Routes>
//             <Route element={<Home/>} path="/"/>
//             <Route element={<Prouducts/>} path="/products"/>
//             <Route element={<CardItems/>} path="/card-items"/>
//             <Route element={<SignUp/>} path="/sign-up"/>
//             <Route element={<Testimonial/>} path="/testimonial"/>
//         </Routes>
//     )
// }
// export default AppRoutes;


import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../../layout/layout";
import Products from "../../pages/AllProducts/prouducts";
import Testimonial from "../../pages/testimonial/testimonial";
import CardItems from '../../pages/CardItems/card-items';
import Header from '../../components/header/header';
import SignUp from '../../pages/SignUp/sign-up';
const AppRoutes = () => {
  return (
    <Routes>

      {/* ALL PAGES WITH NAV + FOOTER */}
      <Route path="/" element={<Layout />}>

        {/* HOME PAGE (LOADS ALL SECTIONS) */}
        <Route
          index
          element={
            <>
              <Header />
              <Products />
              <Testimonial />
              <CardItems />
              <SignUp />
            </>
          }
        />

        {/* INDIVIDUAL PAGES */}
        <Route path="products" element={<Products />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="card-items" element={<CardItems />} />
        <Route path="signup" element={<SignUp />} />

      </Route>

    </Routes>
  );
};

export default AppRoutes;
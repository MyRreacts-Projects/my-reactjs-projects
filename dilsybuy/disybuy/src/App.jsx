//App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/routes/routes";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Products from "./pages/AllProducts/prouducts";
import Testimonial from "./pages/testimonial/testimonial";
import Footer from "./components/footer/footer";
const App =()=>{
  return(
   <BrowserRouter>
   <Navbar/>
<AppRoutes/>
<Products/>
<Testimonial/>
<Footer/>

   </BrowserRouter>
  )
}
export default App;
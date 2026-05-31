//App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/routes/routes";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Products from "./pages/AllProducts/prouducts";
import Testimonial from "./pages/testimonial/testimonial";
const App =()=>{
  return(
   <BrowserRouter>
   <Navbar/>
<AppRoutes/>
<Products/>
<Testimonial/>

   </BrowserRouter>
  )
}
export default App;
//App.jsx
import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./utils/routes/routes";
import Navbar from "./components/navbar/navbar";
import Header from "./components/header/header";
import Products from "./pages/AllProducts/prouducts";
const App =()=>{
  return(
   <BrowserRouter>
   <Navbar/>
<AppRoutes/>
<Products/>

   </BrowserRouter>
  )
}
export default App;
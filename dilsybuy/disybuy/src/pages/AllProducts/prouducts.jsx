// import React from "react";
// import {
//   MDBCard,
//   MDBCardImage,
//   MDBCardBody,
//   MDBCardTitle,
//   MDBCardText,
//   MDBCardFooter,
//   MDBCardGroup,
//   MDBContainer,
// } from "mdb-react-ui-kit";
// import { MDBBtn } from 'mdb-react-ui-kit';
// import { MDBIcon } from 'mdb-react-ui-kit';

// export default function Products() {
//   return (
//     <MDBContainer className="my-5">

//       {/* PAGE TITLE */}
//       <h1 className="text-center mb-4">All Products</h1>

//       {/* CARDS */}
//       <MDBCardGroup className="gap-3">

//       <MDBCard className="product-card">

//       {/* IMAGE */}
//       <MDBCardImage
//         src="https://mdbootstrap.com/img/new/standard/city/041.webp"
//         alt="product"
//         position="top"
//       />

//       <MDBCardBody>

//         {/* TITLE */}
//         <MDBCardTitle className="fw-bold">
//           Classic Crew Neck T-Shirt
//         </MDBCardTitle>

//         {/* PRICE */}
//         <MDBCardText className="text-primary fw-bold">
//           $41
//         </MDBCardText>

//         {/* DESCRIPTION */}
//         <MDBCardText>
//           Elevate your wardrobe with premium quality comfort and modern style.
//         </MDBCardText>

//         {/* BUTTON ROW */}
//         <div className="button-row">

//           <MDBBtn size="sm" className="d-flex align-items-center gap-1">
//             <MDBIcon icon="eye" fas />
//             View
//           </MDBBtn>

//           <MDBBtn size="sm" color="success" className="d-flex align-items-center gap-1">
//             <MDBIcon icon="shopping-cart" fas />
//             Cart
//           </MDBBtn>

//         </div>

//       </MDBCardBody>
//     </MDBCard>

//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/042.webp"
//             alt="product"
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>City Product 2</MDBCardTitle>
//             <MDBCardText>
//               This is a sample product description for card two.
//             </MDBCardText>
//           </MDBCardBody>
//           <MDBCardFooter>
//             <small className="text-muted">Last updated 5 mins ago</small>
//           </MDBCardFooter>
//         </MDBCard>

//         <MDBCard>
//           <MDBCardImage
//             src="https://mdbootstrap.com/img/new/standard/city/043.webp"
//             alt="product"
//             position="top"
//           />
//           <MDBCardBody>
//             <MDBCardTitle>City Product 3</MDBCardTitle>
//             <MDBCardText>
//               This is a sample product description for card three.
//             </MDBCardText>
//           </MDBCardBody>
//           <MDBCardFooter>
//             <small className="text-muted">Last updated 10 mins ago</small>
//           </MDBCardFooter>
//         </MDBCard>

//       </MDBCardGroup>
//     </MDBContainer>
//   );
// }

import React from "react";
import shirt from '../AllProducts/images/shirt.jpg';
import './products.css';
import { MDBIcon } from 'mdb-react-ui-kit';


const Products = ()=>{
    return(
        <div className="home">
            <div className="homePage">
                <h1>All Products</h1>
                <div className="cardSection">
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item <MDBIcon icon="eye" fas /></button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                    {/* card 1 */}
                    <div className="card">
                        <img src={shirt} alt="" />
                        <h2>Classic Crew Neck T-Shirt</h2>
                        <h3>$41</h3>
                        <p>Elevate your wardrobe with these Elegant Couture Pants, designed to blend sophistication with contem...</p>
                        <div className="btnDiv">
                            <button>View Item</button>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                    {/* card 1 end */}
                </div>
            </div>

        </div>

    )
}
export default Products;
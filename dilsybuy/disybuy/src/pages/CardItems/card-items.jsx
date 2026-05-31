//card-items.jsx
import React from "react";
import './card-items.css';
import first from './images/first.png';
import second from './images/second.png';
import third from './images/third.png';
const CardItems = ()=>{
    return(
        <div id="main-sec">
        <h1 className="area-heading">Cart Items</h1>
        <div className="main-area">
            <div className="cart-div">
                <div className="cart-items">
                    <div>
                        <img src={first} alt=""/>
                        <h2>Cart title</h2>
                    </div>
                    <strong>$20</strong>
                </div>
                <div className="cart-items">
                    <div>
                        <img src={second} alt="" />
                        <h2>Cart title</h2>
                    </div>
                    <strong>$20</strong>
                </div>
                <div className="cart-items">
                    <div>
                        <img src={third} alt=""/>
                        <h2>Cart title</h2>
                    </div>
                    <strong>$20</strong>
                </div>
            </div>
            <div className="checkout-div">
                <ul>
                    <li>Total Items <span>10</span></li>
                    <li>Tax <span>$10</span></li>
                    <li>Shipping <span>$10</span></li>
                    <li>Items Amount <span>$10</span></li>
                    <li>Total Amount <span>$10</span></li>   
                </ul>
                <button>Check Out Items</button>
            </div>
        </div>
   </div>
    
    )
}
export default CardItems
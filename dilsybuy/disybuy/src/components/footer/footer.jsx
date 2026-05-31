import React from "react";
import './footer.css';
import { MDBIcon } from "mdb-react-ui-kit";

const Footer = () => {
    return (
        <footer className="footer">

            {/* TOP SECTION */}
            <div className="footerContainer">

                {/* BRAND */}
                <div className="footerBox">
                    <h2>Dilsybuy</h2>
                    <p>
                        Your one-stop fashion & lifestyle store.
                        Shop smarter, live better with premium products and fast delivery.
                    </p>
                </div>

                {/* QUICK LINKS */}
                <div className="footerBox">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>Home</li>
                        <li>Shop</li>
                        <li>New Arrivals</li>
                        <li>Best Sellers</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* SUPPORT */}
                <div className="footerBox">
                    <h3>Support</h3>
                    <ul>
                        <li>Help Center</li>
                        <li>Returns</li>
                        <li>Shipping Info</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* CONTACT */}
                <div className="footerBox">
                    <h3>Contact</h3>
                    <p>Email: support@dilsybuy.com</p>
                    <p>Phone: +92 300 1234567</p>
                    <p>Karachi, Pakistan</p>

                    <div className="socialIcons">
                        <MDBIcon fab icon="facebook-f" />
                        <MDBIcon fab icon="instagram" />
                        <MDBIcon fab icon="twitter" />
                        <MDBIcon fab icon="linkedin-in" />
                    </div>
                </div>

            </div>

            {/* NEWSLETTER */}
            <div className="newsletter">
                <h3>Subscribe to get 10% OFF</h3>
                <div className="newsForm">
                    <input type="email" placeholder="Enter your email" />
                    <button>Subscribe</button>
                </div>
            </div>

            {/* BOTTOM BAR */}
            <div className="footerBottom">
                <p>© 2026 Dilsybuy. All Rights Reserved.</p>
            </div>

        </footer>
    );
};

export default Footer;
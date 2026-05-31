import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import headerImage from '../header/images/headerImage.jpg';
import imgOne from '../header/images/imgOne.png';
import imgTwo from '../header/images/imgTwo.png';
import imgThree from '../header/images/imgThree.png';
import imgFour from '../header/images/imgFour.png';
import imgFive from '../header/images/imgFive.png';
import imgSix from '../header/images/imgSix.png';
import imgSeven from '../header/images/imgSeven.png';
import imgEight from '../header/images/imgEight.png';
export default function Header() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>
      
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${headerImage})`, height: '400px' }}
      >
        <div className='' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            
          </div>
        </div>
      </div>
      {/* catageory area */}
      <div className="catageory">
        <h1>Category Area</h1>
        <div className="catageoryImages">
            <img src={imgOne} alt="catageory images" />
            <img src={imgTwo} alt="catageory images" />
            <img src={imgThree} alt="catageory images" />
            <img src={imgFour} alt="catageory images" />
            <img src={imgFive} alt="catageory images" />
            <img src={imgSix} alt="catageory images" />
            <img src={imgSeven} alt="catageory images" />
            <img src={imgEight} alt="catageory images" />
        </div>

      </div>
    </header>
  );
}
//testimonial.jsx
import React from "react";
import abc from '../testimonial/images/abc.jpg';
import './testimonial.css';
const Testimonial = ()=>{
    return(
        <div className="testimonial">
            <h1>Testimonial</h1>
            <div className="tesimonialCard">
               <div className="img">
                <img src={abc} alt="image" />
               </div>
               <div className="rating">
                ⭐⭐⭐⭐⭐

               </div>
               <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore distinctio commodi eveniet rem, adipisci minus! Dicta repellat eligendi, ipsum nemo harum neque consequuntur eaque, repudiandae, maxime rerum laborum aliquam.
               </div>
            </div>

             <div className="tesimonialCard">
               <div className="img">
                <img src={abc} alt="image" />
               </div>
               <div className="rating">
                ⭐⭐⭐⭐⭐

               </div>
               <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore distinctio commodi eveniet rem, adipisci minus! Dicta repellat eligendi, ipsum nemo harum neque consequuntur eaque, repudiandae, maxime rerum laborum aliquam.
               </div>
            </div>

             <div className="tesimonialCard">
               <div className="img">
                <img src={abc} alt="image" />
               </div>
               <div className="rating">
                ⭐⭐⭐⭐⭐

               </div>
               <div className="p">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis dolore distinctio commodi eveniet rem, adipisci minus! Dicta repellat eligendi, ipsum nemo harum neque consequuntur eaque, repudiandae, maxime rerum laborum aliquam.
               </div>
            </div>

        </div>
    )
}
export default Testimonial;
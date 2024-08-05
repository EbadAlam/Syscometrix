import React, { useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Draggable } from 'gsap/all';
import profileImg from '../../Assets/Images/profile.webp';

const TestimonialSlider = ({ testimonials }) => {
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        draggable: true,
        centerMode: true,
        centerPadding: '20px', 
    };
    Draggable.create(".slick-slider", {
        type: "x",
        bounds: document.querySelector(".testimonial-slider"),
        inertia: true,
      });
    return (
        <div className="testimonial-slider" ref={sliderRef}>
            <div className="draggable-container" ref={containerRef}>
                <Slider {...settings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-slide">
                            <div className="testimonial-svg">
                            <svg width="80" height="59" viewBox="0 0 80 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M80 0C78.5672 6.10068 77.0547 12.683 75.4627 19.7469C73.8707 26.8109 72.4378 33.7143 71.1642 40.4571C69.8906 47.2 68.8557 53.381 68.0597 59H45.3731L43.7015 56.351C45.1343 50.732 46.9652 44.7116 49.194 38.2898C51.4229 31.7075 53.8905 25.1252 56.597 18.5429C59.3035 11.9605 61.9304 5.77959 64.4776 0H80ZM35.8209 0C34.3881 6.10068 32.8756 12.683 31.2836 19.7469C29.6915 26.8109 28.2587 33.7143 26.9851 40.4571C25.7114 47.2 24.6766 53.381 23.8806 59H1.43284L0 56.351C1.43284 50.732 3.26368 44.7116 5.49254 38.2898C7.72139 31.7075 10.1095 25.1252 12.6567 18.5429C15.3632 11.9605 17.9901 5.77959 20.5373 0H35.8209Z" fill="#E0EEEE"/>
                            </svg>
                            </div>
                            <div className="testimonial-content">
                                <p>{testimonial.quote}</p>
                            </div>
                            <div className="testimonial-content testimonial-content-b">
                                <div className="testimonial-piDiv">
                                <img className='testimonial-pi' src={profileImg} alt="" />
                                </div>
                                <h4>{testimonial.author}</h4>
                                <span>{testimonial.position}</span>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default TestimonialSlider;

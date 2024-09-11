import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react'

export default function SSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <div>
            <h2> Simple Slider </h2>
            <Slider {...settings}>
                <div>
                    <img src="https://example.com/image1.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="https://example.com/image2.jpg" alt="Image 2" />
                </div>
                <div>
                    <img src="https://example.com/image3.jpg" alt="Image 3" />
                </div>
                {/* Add more slides as needed */}
            </Slider>
        </div>
    );
}

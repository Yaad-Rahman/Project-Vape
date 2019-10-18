import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './imgslider.css';

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div id="slider">
      <Slider {...settings} >
        <div>
          <img src="/slider1.jpg" width="100%" height="400" />
        </div>
        <div>
        <img src="/slider2.jpg" width="100%" height="400" />
        </div>
        <div>
        <img src="/slider3.jpeg" width="100%" height="400" />
        </div>
        <div>
        <img src="/slider4.jpg" width="100%" height="400" />
        </div>
      </Slider>
      </div>
    );
  };
};

export default SimpleSlider;

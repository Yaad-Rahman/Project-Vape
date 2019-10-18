import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './liquids.css';
 
const drop = () => {
  return (
  <div id="details">
      Check Details
  </div>
  );
}

class Scroller2 extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      className:'scroll',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    };
    return (
        <div>
            <h2 id="slihead">Vape Pods</h2>
      <Slider {...settings} >
    <div id="imgg"> <img src="/pods1.png" />  <div id="details">Check Details</div>  </div>    
    <div id="imgg"> <img src="/pods1.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods2.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods2.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods1.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods2.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods1.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods2.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods2.png"  /> <div id="details">Check Details</div>  </div>
    <div id="imgg"> <img src="/pods1.png"  /> <div id="details">Check Details</div>  </div>
      </Slider>
      </div>
    );
  }
}

export default Scroller2;
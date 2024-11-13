import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoImageCarousel(props) {
  const settings = {
    dots: false,
    infinite: true,
    speed: parseInt(props?.speed), // Adjust the speed here (milliseconds)
    slidesToShow: parseInt(props?.slidesToShow),
    slidesToScroll: parseInt(props?.slidesToScroll),
    autoplay: true,
    autoplaySpeed: parseInt(props?.autoplaySpeed), // Adjust the autoplay speed here (milliseconds)
    pauseOnHover: false,
  };

  const images = props?.imageList;

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="w-full sm:h-1/2 lg:h-screen"
            src={image}
            alt={`Image ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
}

export default AutoImageCarousel;

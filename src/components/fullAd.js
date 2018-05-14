import React from "react";
import Slider from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-responsive-carousel";

//Ant_Design
import { Rate } from "antd";
import { Card } from "antd";

//COMPONENTS

const fullAd = () => {
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="fullAd_wrapper">
      <div className="fullAdCard_wrapper">
        <div className="fullAd_card">
          {/* <Slider {...settings}>
            <div>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: "./images/Sunny Cruiser Bicycle 001.jpg",
                    sizes:
                      "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px"
                  },
                  largeImage: {
                    src: "./images/Sunny Cruiser Bicycle 001.jpg",
                    width: 1426,
                    height: 2000
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: "over"
                }}
              />
            </div>
            <div>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: "./images/Sunny Cruiser Bicycle 001.jpg"
                  },
                  largeImage: {
                    src: "./images/Sunny Cruiser Bicycle 001.jpg",
                    width: 1200,
                    height: 1800
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: "over"
                }}
              />
            </div>
            <div>
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: "./images/Sunny Cruiser Bicycle 001.jpg"
                  },
                  largeImage: {
                    src: "./images/Sunny Cruiser Bicycle 001.jpg",
                    width: 1200,
                    height: 1800
                  },
                  isHintEnabled: true,
                  shouldHideHintAfterFirstActivation: false,
                  enlargedImagePosition: "over"
                }}
              />
            </div>
          </Slider> */}
          <Carousel showArrows={true} showThumbs={true}>
            <div>
              <img src="./images/Sunny Cruiser Bicycle 001.jpg" />
            </div>
            <div>
              <img src="./images/Sunny Cruiser Bicycle 001.jpg" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="fullAd_data">
        <h2>Sunny Cruiser Bicycle</h2>
        <p>Location: Sukedhara</p>
        <div>
          <Rate disabled defaultValue={4} />
        </div>
        <h1>NRs 1050</h1>
        <p>Phone: 9843000000</p>
      </div>

      <div className="fullAd_description">
        <h2>Description</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
};

export default fullAd;

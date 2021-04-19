import React from "react";
import "./Card.css";
// import "react-multi-carousel/lib/styles.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Card() {
  return (
    <div className="Card-container">
      <div className="container-upgraded">
        <Carousel>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20011MG-BRZ_RFR.jpg"
              alt="Lamp Front"
            />
          </div>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20290-SAT_front.jpg"
              alt="Lamp Front"
            />
          </div>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20030MG-BRZ_RFR_Off.jpg"
              alt="Lamp Front"
            />
          </div>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20030MG-BRZ_RFR_Off.jpg"
              alt="Lamp Front"
            />
          </div>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20030MG-BRZ_RFR_Off.jpg"
              alt="Lamp Front"
            />
          </div>
          <div>
            <img
              src="http://tiv.lighting/boweryimges/accesslighting/20030MG-BRZ_RFR_Off.jpg"
              alt="Lamp Front"
            />
          </div>
        </Carousel>
      </div>
      <div className="card_inner_top">
        <div>Starting at</div>
        <div>22,495</div>
      </div>
      <div className="card_inner_mid">
        <div>Model #</div>
        <div>Light48MCU45</div>
      </div>

      <div className="card_inner_bot">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;

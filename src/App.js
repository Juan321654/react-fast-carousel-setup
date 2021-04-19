import "./App.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function App() {
  return (
    <div className="container">
    <Carousel>
      <div>
        <img src="http://tiv.lighting/boweryimges/accesslighting/20011MG-BRZ_RFR.jpg" alt="Lamp Front"/>
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="http://tiv.lighting/boweryimges/accesslighting/20290-SAT_front.jpg" alt="Lamp Front"/>
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="http://tiv.lighting/boweryimges/accesslighting/20030MG-BRZ_RFR_Off.jpg" alt="Lamp Front"/>
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
    </div>
  );
}

export default App;

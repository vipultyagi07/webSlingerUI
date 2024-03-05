import React, { useState, useEffect } from "react";

export default function Slider() {
  const [currentIndex, SetCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      SetCurrentIndex((preIndex) => (preIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const style = {
    width: "100%",
  };
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className={`carousel-item ${currentIndex === 0 ? "active" : ""}`}>
          <img
            src="https://img.freepik.com/premium-vector/parking-garage-underground-indoor-car-park-urban-car-parking-service-flat-3d-isometric-vector-illustration-infographic_589019-3503.jpg?size=626&ext=jpg&uid=R140136351&ga=GA1.1.622051430.1709450330&semt=ais"
            className="d-block w-100 "
            alt="..."
            style={style}
          />
        </div>
        <div className={`carousel-item ${currentIndex === 1 ? "active" : ""}`}>
          <img
            src="https://img.freepik.com/free-vector/car-parking-top-view-composition-with-outdoor-scenery-with-green-trees-marked-asphalt-with-cars_1284-55560.jpg?size=626&ext=jpg&ga=GA1.2.622051430.1709450330&semt=ais"
            className="d-block w-100"
            alt="..."
          />
        </div>
        <div className={`carousel-item ${currentIndex === 2 ? "active" : ""}`}>
          <img
            src="https://img.freepik.com/free-vector/perpendicular-parking-lot-with-plug-electric-vehicles-ecological-charging-stalls-attendant-booth-isometric-composition_1284-26664.jpg?size=626&ext=jpg&uid=R140136351&ga=GA1.2.622051430.1709450330&semt=ais"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
}

import React, { Component } from "react";
import Slider from "react-slick";

export default class Banners extends Component {
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      speed: 3000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplayspeed:1000,
    };

    
    return (
      <div className="h-[50vh] bg-[#F8E0F1] text-center justify-center">
        <div className="flex justify-center pt-10">
          <Slider {...settings} className=" w-[90%] justify-center">
            
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/1.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/2.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/3.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/4.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/5.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/6.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/7.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/ROLLO FOTOGRAFICO INICIO/8.jpg"
                alt=""
                style={{ height: "300px", width: "700px", borderRadius:'35px' }}
              />
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}

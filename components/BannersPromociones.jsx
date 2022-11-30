import React, { Component } from "react";
import Slider from "react-slick";

export default class BannersPromociones extends Component {
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
      <div className="h-[100vh] bg-[#F8E0F1] text-center justify-center">
        <div className="flex justify-center pt-10">
          <Slider {...settings} className=" w-[90%] justify-center">
            
            <div className="relative left-[25%]">
              <img
                src="/promos/1.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[25%]">
              <img
                src="/promos/2.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[25%]">
              <img
                src="/promos/3.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[25%]">
              <img
                src="/promos/4.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[25%]">
              <img
                src="/promos/5.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[25%]">
              <img
                src="/promos/6.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[25%]">
              <img
                src="/promos/7.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[25%]">
              <img
                src="/promos/8.jpg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
           
          </Slider>
        </div>
      </div>
    );
  }
}

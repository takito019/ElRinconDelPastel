import React, { Component } from "react";
import Slider from "react-slick";

export default class BannersSabiasQue extends Component {
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
          <Slider {...settings} className=" w-[90%] justify-center  ">
            
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/1.jpeg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/2.jpeg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>{" "}
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/3.jpeg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/4.jpeg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/5.jpeg"
                alt=""
                style={{ height: "700px", width: "700px", borderRadius:'35px' }}
              />
            </div>
            <div className="relative left-[30%]">
              <img
                src="/Sabias que/6.jpeg"
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

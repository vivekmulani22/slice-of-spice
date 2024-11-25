import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../assets/assets";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Sawipar = () => {
  return (
    <div className="w-full flex items-center text-center justify-center">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="flex flex-col text-center items-center justify-center px-[11vw] py-8">
          <h1 className="text-xl font-bold">A TASTE YOU'LL REMEMBER</h1>
          <br />
          <img src={assets.Group2} alt="Decorative icon" className="w-[4vw]" />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          </p>
          <br />
          <img
            src={assets.Ellipse}
            alt="Profile"
            className="w-[4vw]"
          />
          <br />
          <h4>JAMES DE FRANCO</h4>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col text-center items-center justify-center px-[11vw] py-8">
          <h1 className="text-xl font-bold">A TASTE YOU'LL REMEMBER</h1>
          <br />
          <img src={assets.Group2} alt="Decorative icon" className="w-[4vw]" />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          </p>
          <br />
          <img
            src={assets.Ellipse}
            alt="Profile"
            className="w-[4vw]"
          />
          <br />
          <h4>JAMES DE FRANCO</h4>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col text-center items-center justify-center px-[11vw] py-8">
          <h1 className="text-xl font-bold">A TASTE YOU'LL REMEMBER</h1>
          <br />
          <img src={assets.Group2} alt="Decorative icon" className="w-[4vw]" />
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent
          </p>
          <br />
          <img
            src={assets.Ellipse}
            alt="Profile"
            className="w-[4vw]"
          />
          <br />
          <h4>JAMES DE FRANCO</h4>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sawipar;

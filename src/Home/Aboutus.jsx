import React from "react";
import { assets } from "../assets/assets";

const Aboutus = () => {
  return (
    <div className="w-full  py-3 px-11 mt-[6vw]  flex atims-center text-center  justify-center">
      <div className="flex flex-col py-10 px-6 text-center shadow-xl justify-center bg-white text-black">
        <h1 className=" text-3xl font-bold">About Us</h1>
        <br />
        <br />
        <img
          className="flex bg-center  bg-auto "
          src={assets.restaurants}
          alt=""
        />
        <br /> <br />
        <p className=" text-lg text-left  ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos. Praesent auctor purus luctus enim
          egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
          Suspendisse ac rhoncus nisl, eu tempor urna tempor. cubilia Curae;
          Nullam faucibus eros at enim mollis, a consectetur neque bibendum.
        </p>
        <br /> <br />
        <button className=" flex items-center  justify-center text-[#cc9933] font-bold">
          Read More{" "}
        </button>
      </div>
    </div>  
  );
};

export default Aboutus;

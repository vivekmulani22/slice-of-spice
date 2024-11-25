import React from "react";
import { assets } from "../assets/assets";

const BestFor = () => {
  return (
    <div className="flex flex-col p-4 items-center text-center grid-cols-3 justify-center w-full ">
      <br />
      <h2 className="font-bold text-3xl">BEST FOR</h2>
      <div className="grid-cols-3  items-center text-center justify-center flex  gap-10   ">
        <div className="text-center items-center w-[25vw] h-[40vw] ">
          <img
            className="w-[40vw] flex justify-center p-10"
            src={assets.Group11}
            alt=""
          />
          <h3 className="text-xl">BIRTHDAYS</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
        <div className="text-center items-center w-[25vw] h-[40vw] ">
          <img
            className="w-[40vw] flex justify-center p-10"
            src={assets.Group12}
            alt=""
          />
          <h3 className="text-xl">MEETINGS</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
        <div className="text-center items-center w-[25vw] h-[40vw] ">
          <img
            className="w-[40vw] flex justify-center p-10"
            src={assets.Group13}
            alt=""
          />
          <h3 className="text-xl">WEDDINGS</h3>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan
          </p>
        </div>
      </div>
    </div>
  );
};

export default BestFor;

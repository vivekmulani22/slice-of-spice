import React from "react";
import { assets } from "../assets/assets";
import Pizzalist from "./Pizzalist";
import Sandwichlist from "./Sandwichlist";
import { Link } from "react-router-dom";

const Menulist = () => {
  return (    
    <div className="w-full  py-3 px-11 mt-[35vw]  flex atims-center text-center  justify-center">
    <Link to="/Card1">
      <div className="flex w-full flex-col py-10 px-6 text-center shadow-xl justify-center bg-white text-black">
        <h1 className="text-3xl font-[900]">OUR MENU</h1>
        <br />
        <h5 className="font-bold">BURGERS</h5>
        <br />
        <div className="flex items-center justify-center gap-8 grid-rows-3 ">

        
          <div className="flex flex-col w-[27vw] shadow-2xl  py-5  items-center text-center justify-center rounded-2xl cursor-pointer hover:border border-[#cc9933] hover:text-[#cc9933]">
            <img className="" src={assets.Reactangle} alt="" />
            <br />
            <h2 className="text-2xl font-bold">Veggie burger</h2>
            <br />
            <p className="px-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </p>
            <br />
            <h1 className="text-[#cc9933]">$70.00</h1>
          </div>
         
          <div className="flex flex-col w-[27vw] shadow-2xl  py-5  items-center text-center justify-center rounded-2xl cursor-pointer hover:border border-[#cc9933] hover:text-[#cc9933]">
            <img className="" src={assets.Reactangle20} alt="" />
            <br />
            <h2 className="text-2xl font-bold">Wild Salmon Burger</h2>
            <br />
            <p className="px-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </p>
            <br />
            <h1 className="text-[#cc9933]">$70.00</h1>
          </div>

         
          <div className="flex flex-col w-[27vw] shadow-2xl  py-5  items-center text-center justify-center rounded-2xl cursor-pointer hover:border border-[#cc9933] hover:text-[#cc9933]">
            <img className="" src={assets.Reactangle21} alt="" />
            <br />
            <h2 className="text-2xl font-bold ">Bean Burger</h2>
            <br />
            <p className="px-10 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </p>
            <br />
            <h1 className="text-[#cc9933]">$70.00</h1>
          </div>
         
        </div>
        <br />
        <h2 className="text-[#cc9933] font-bold cursor-pointer">View More</h2>
        <br />
        <Pizzalist/>
        <Sandwichlist/>
      </div>
      </Link>
    </div>
  );
};

export default Menulist;

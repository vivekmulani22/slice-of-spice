import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="flex w-full relative ">
      <div className="flex items-center py-3 px-11 bg-[#0000008e] w-full justify-between ">
        <div className="flex items-center">
          <Link to='/'>
          <img className="h-[5vw] flex" src={assets.Group24} alt="" />
          </Link>
        </div>
        <div className="flex items-center text-white gap-5  text-sm mr-3 ">
          <p className="no-underline hover:text-[#cc9933]">
            <Link to="/">HOME</Link>
          </p>
          <p className="no-underline hover:text-[#cc9933]">
            <Link to="/Menu">MENU</Link>
          </p>
          <p className="no-underline hover:text-[#cc9933]">
            <Link to="/Gallery">GALLERY</Link>
          </p>
          <p className="no-underline hover:text-[#cc9933]">
            <Link to="/AboutUs">ABOUT US</Link>
          </p>
          <p className="no-underline hover:text-[#cc9933]">
            <Link to="/ContactUs">CONTACT US</Link>
          </p>
          <button className="w-[10vw] h-8  bg-[#CC9933]">
            <Link className="flex gap-2 justify-center" to="/ViewCard">
              View Card
              <img src={assets.Group241} className="h-4 align-middle" alt="" /> 2{" "}
            </Link>
          </button>
        </div>
      </div>
      {/* justify-between  */}
    </div>
  );
};

export default Navbar;

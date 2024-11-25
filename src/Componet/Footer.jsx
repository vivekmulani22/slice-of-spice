import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full bg-black flex text-white ">
      <div className=" px-10">
        <img src={assets.Group24} alt="" />
        <br />
        <div className="flex justify-between gap-10">
          <div className="flex flex-col justify-between">
            <h3>WHY SLICE OF SPICE?</h3>
            <br />
            <p className="">
              why slice of spice? Lorem ipsum dolor sit amet, <br /> consectetur
              adipiscing elit. Etiam eu turpis molestie, dictum <br /> est a,
              mattis tellus. Sed dignissim, metus nec <br /> fringilla accumsan,
              risus sem sollicitudin lacus, <br /> ut interdum tellus elit sed
              risus. Maecenas eget <br /> condimentum velit, sit amet feugiat
              lectus. <br /> Class aptent taciti sociosqu ad litora torquent
              <br /> per conubia nostra, per inceptos himenaeos.
            </p>
          </div>
          <br />
          <div className=" flex flex-col">
            <h2 className="text-[1.2vw] font-bold">QUICK LINKS</h2>
            <br />
            <div className="gap-5 flex text-sm flex-col">
              <p className="no-underline">
                &#x2192; <Link to="/">HOME</Link>
              </p>
              <p className="no-underline">
                &#x2192; <Link to="/Menu">MANU</Link>
              </p>
              <p className="no-underline">
                &#x2192; <Link to="/Gallery">GALLERY</Link>
              </p>
              <p className="no-underline">
                &#x2192; <Link to="/AboutUs">ABOUT US</Link>
              </p>
              <p className="no-underline">
                &#x2192; <Link to="/ContactUs">CONTACT US</Link>
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-[1.2vw] font-bold">OPENING HOURS</h2>
            <br />
            <h3>Monday - Saturday</h3>
            <p className="text-sm text-[#cc9933]">12:00PM - 10:30PM</p>
            <br />
            <h3>Sunday</h3>
            <p className="text-sm text-[#cc9933] ">12:00PM - 11:30PM</p>
          </div>
          <div className="">
            <h2 className="text-[1.2vw] font-bold">GET IN TOUCH</h2>
            <br />
            <p>
              Restaurant, to consequat ipsum nec <br />
              sagittis sem
            </p>
            <br />
            <div className="flex gap-5 h-4">
              <img src={assets.Vector1} alt="" />
              <p>
                Restaurant, Manhattan 1258, <br />
                New York, USA Lahore
              </p>
            </div>
            <br />
            <br />
            <div className="flex gap-5 h-4">
              <img src={assets.Group1} alt="" />
              <p>(+1) 234 567 8901</p>
            </div>
            <br />
            <div className="flex gap-5 h-4">
              <img src={assets.vector} alt="" />
              <p>hello@website.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

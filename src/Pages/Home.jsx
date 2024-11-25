import React from "react";
import Navbar from "../Home/Navbar";
import Aboutus from "../Home/Aboutus";
import Delivery from "../Home/Delivery";
import BestFor from "../Home/BestFor";
import Serv from "../Home/Serv";
import Sawipar from "../Home/sawipar";
import Footer from "../Componet/Footer";
import { assets } from "../assets/assets";
import Footerlink from "../Componet/Footerlink";

function Home() {
  return (
    <div
      className=" h-screen w-full  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/assets/backgrounde1.png")' }}
    >
      <Navbar />
      <div className="px-11 ">
        <p className=" mt-[3vw] text-5xl font-bold text-white">
          YES WE HAVE <br /> <span className="text-[#cc9933] ">BEST TASTE</span>
          FOR <br /> YOU!
        </p>
        <br />
        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Etiam
          eu turpis molestie, dictum est a, mattis tellus. Sed <br /> dignissim,
          metus nec fringilla accumsan, risus sem <br /> sollicitudin lacus, ut
          interdum tellus elit sed risus.
        </p>
        <br />
        <button className="w-[10vw] h-8 items-center bg-[#cc9933] ">
          See Our Menu
        </button>
        <br />
      </div>
      <div className="flex items-center justify-center">
        <Aboutus />
      </div>
      <div className="flex items-center py-5 ">
        <Delivery />
      </div>
      <div className="flex items-center">
        <BestFor />
      </div>
      <div className="flex items-center py-5">
        <Serv />
      </div>
      <div className="flex items-center">
        <Sawipar />
      </div>

      <div
        className="flex items-center text-center w-full justify-center bg-no-repeat bg-cover bg-center py-10 "
        style={{ backgroundImage: 'url("/src/assets/footerimg.png")' }}
      >
        <div className="">
          <br />
          <h1 className="text-[1.6vw] text-white">
            Sign up with your name and email to get fresh updates.
          </h1>
          <br />
          <div className="flex justify-center">
            <input
              type="email"
              name=""
              placeholder="Email Address"
              className="w-[30vw] h-10 px-4"
            />
            <button className="w-[10vw] h-10 items-center  bg-[#cc9933] ">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <footer className="flex px-[5vw] bg-black py-10">
        <Footer />
      </footer>
      <div>
        <Footerlink/>
      </div>
    </div>
  );
}

export default Home;

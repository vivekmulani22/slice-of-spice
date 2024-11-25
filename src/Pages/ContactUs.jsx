import React from "react";
import Navbar from "../Home/Navbar";
import { assets } from "../assets/assets";
import Footer from "../Componet/Footer";
import Footerlink from "../Componet/Footerlink";

const ContactUs = () => {
  return (
    <>
      <div
        className=" h-[35vw] w-full  bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: 'url("/src/assets/business-man.png")' }}
      >
        <div className="">
          <Navbar />
        </div>
        <div className="flex flex-col text-5xl text-white font-bold">
          <p className="flex items-centern ml-[13vw] mt-[11vw]">CONTACT US</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center p-11">
        <h1 className="font-bold text-2xl">GET IN TOUCH WITH US</h1>
        <br />
        <p className="text-center">
          Enim lobortis scelerisque fermentum dui faucibus. Tempor <br />{" "}
          commodo ullamcorper a lacus vestibulum sed arcu non. Magna ac <br />
          placerat vestibulum lectus mauris.
        </p>
      </div>

      <div className=" flex w-full p-5 items-center justify-center">
        <div className=" flex justify-center items-center text-center border-4 rounded-2xl  w-[40vw] h-[48vw] shadow-xl hover:border-[#cc9933] py-[5vw]">
          <div>
            <input
              className="p-6 w-[35vw] bg-[#F5F5F5]  h-6"
              type="text"
              placeholder="Enter Your Name"
            />
            <br />
            <br />
            <input
              className="p-6 w-[35vw] bg-[#F5F5F5]  h-6"
              type="email"
              placeholder="Enter Your Email"
            />
            <br />
            <br />
            <input
              className="p-6 w-[35vw] bg-[#F5F5F5]  h-6 "
              type="tel"
              placeholder="Enter Your Number"
            />
            <br />
            <br />
            <input
              className=" w-[35vw] items-center p-5 bg-[#F5F5F5]  h-[15vw] "
              type="text"
              placeholder="Enter Your Number"
            />
            <br />
            <br />
            <button className="w-[20vw] rounded-md h-10 text-white bg-[#cc9933]">
              Submit Application
            </button>
          </div>
        </div>
      </div>
      <br />
      {/* <a href="https://maps.app.goo.gl/n6mo62H8aVrHhd5q8">
        <div className=" bg-no-repeat bg-cover bg-center w-full py-9">
          <img src={assets.Reactangle64} alt="" />
        </div>
      </a> */}
      <iframe className='w-full py-6' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.518477036169!2d72.8639591743746!3d21.23009638047005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04fb1ab5223e1%3A0x2442e9badf12baca!2sDurvasa%20Infotech%20%3A%20Website%20Development%20%2C%20SEO%20%26%20Digital%20Marketing%20Company!5e1!3m2!1sen!2sin!4v1723809663413!5m2!1sen!2sin" width="1025" height="600" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <footer className="flex px-[5vw] bg-black py-10">
        <Footer />
      </footer>
      <div>
        <Footerlink />
      </div>
    </>
  );
};

export default ContactUs;

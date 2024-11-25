import React from "react";
import Navbar from "../Home/Navbar";
import Shoping from "../ViewCard/Shoping";
import Footer from "../Componet/Footer";
import Footerlink from "../Componet/Footerlink";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Chekout = () => {
  return (
    <div
      className=" h-screen w-full  bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/assets/chicken 1.png")' }}
    >
      <Navbar />
      <div className="w-full  py-3 px-11 mt-[34vw]  flex  text-center ">
        <div className="flex w-full flex-col py-10 gap-4 text-center px-11 shadow-xl  bg-white text-black">
          <h1 className="text-3xl font-[900]">CHECKOUT</h1>
          <br />
          <div className="flex justify-between gap-5">
            <p>
              already have an account?{" "}
              <Link className="text-blue-800" to='/Login'>Long In</Link> for faster
              checkout.
            </p>
            <Link className="text-blue-800" to="/Menu">
              Back To Menu
            </Link>
          </div>
          <br />
          <div className="flex justify-between">
            <div className="">
              <p className="flex ">Pickup From</p>
              <p className='flex'>500 Terry Francis Street San Francisco, CA 94158</p>
              <br />
              <div>
                <a className="text-blue-800 ml-[27vw]"  href="https://maps.app.goo.gl/n6mo62H8aVrHhd5q8">Show On Map</a>
              </div>
              <br />
              <div className="flex">
                <p>Pickup time</p>
                <p>ASAP (in 15 minutes)</p>
              </div>
              <br />
              <button className="bg-[#cc9933] w-[30vw] h-8 text-white ">Continue</button>
              <br />
              <br />
              <div className="flex gap-8">
                <div className="">
                  <p className="flex">First Name</p>
                  <input
                    className="flex border border-black"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <p className="flex">Last Name</p>
                  <input
                    className="flex border border-black"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <br />
              <div className="flex gap-8">
                <div className="">
                  <p className="flex">Phone</p>
                  <input
                    className="flex border border-black"
                    type="number"
                    name=""
                    id=""
                  />
                </div>
                <div>
                  <p className="flex">Email</p>
                  <input
                    className="flex border border-black"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
              </div>
              <br />
                <button className="bg-[#cc9933] w-[30vw] h-8 text-white ">Continue</button>
                <br />
                <p>Please review the details above and place the order.</p>
                <br />
                <Link>
                  <button className="bg-[#cc9933] w-[30vw] h-8 text-white">submit order</button>
                </Link>
            </div>

            <div className="flex flex-col w-[25vw] h-[20vw] py-2  border  border-black">
              <h2 className='flex font-bold text-xl px-5'>My Order(3)</h2>
              
              <div className="flex border-b-2 py-2 px-5 border-black justify-between">
                <p>1x Veggie Burger</p>
                <p className='text-[#cc9933] font-bold'>$70.00</p>
              </div>

              <div className="flex border-b-2 py-2 px-5 border-black justify-between">
                <p>3x Wild Salmon Burger</p>
                <p className='text-[#cc9933] font-bold'>$210.00</p>
              </div>

              <div className="flex border-b-2 py-2 px-5 border-black justify-between">
                <p>3x Bean Burger</p>
                <p className='text-[#cc9933] font-bold'>$70.00</p>
              </div>
              <div className="flex py-2 px-5  justify-between">
                <p>Subtotal</p>
                <p className='text-[#cc9933]  font-bold'>$350.00</p>
              </div>

              <div className="flex  font-bold text-xl px-5 justify-between ">
                <h2>Subtoal</h2>
                <p>$350.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="flex px-[5vw] bg-black py-10">
        <Footer />
      </footer>
      <div>
        <Footerlink />
      </div>
    </div>
  );
};

export default Chekout;

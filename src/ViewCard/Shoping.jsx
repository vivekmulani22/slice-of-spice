import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Shoping = () => {
  return (
    <div className="w-full  py-3 px-11 mt-[34vw]  flex atims-center text-center  justify-center">
      <div className="flex w-full flex-col py-10 gap-4 text-center items-center shadow-xl justify-center bg-white text-black">
        <h1 className="text-3xl font-[900]">SHOPING CART</h1>
        <br />

        <div className="border  border-black w-[50vw] h-[12vw] flex items-center">
            <img src={assets.Reactangle31} alt="" className='w-[22vw] overflow-hidden flex  ml-[-1.9vw]'  />
            <div className='items-center'>
                <div className='flex gap-10 '>
                <h2 className='font-bold text-lg'>Veggie burger</h2>
                <p className='text-sm font-light'>edit</p>
                <p className='text-sm font-light text-[#F40707]'>remove</p>
                </div>
                <br />
                <div className='flex gap-10'>
                    <span className='flex gap-5 text-[#cc9933]  border w-[8vw] justify-center border-black'> 
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </span>
                    <h2 className='ml-[10vw] font-bold '>$70.00</h2>
                </div>
            </div>
        </div>

        <div className="border  border-black w-[50vw] h-[12vw] flex items-center">
            <img src={assets.Reactangle35} alt="" className='w-[22vw] overflow-hidden flex  ml-[-1.9vw]'  />
            <div className='items-center'>
                <div className='flex gap-10 '>
                <h2 className='font-bold text-lg'>Wild salmon burger</h2>
                <p className='text-sm font-light'>edit</p>
                <p className='text-sm font-light text-[#F40707]'>remove</p>
                </div>
                <br />
                <div className='flex gap-10'>
                    <span className='flex gap-5 text-[#cc9933]  border w-[8vw] justify-center border-black'> 
                        <p>-</p>
                        <p>3</p>
                        <p>+</p>
                    </span>
                    <h2 className='ml-[10vw] font-bold '>$210.00</h2>
                </div>
            </div>
        </div>

        <div className="border  border-black w-[50vw] h-[12vw] flex items-center">
            <img src={assets.Reactangle36} alt="" className='w-[22vw] overflow-hidden flex  ml-[-1.9vw]'  />
            <div className='items-center'>
                <div className='flex gap-10 '>
                <h2 className='font-bold text-lg'>Bean burger</h2>
                <p className='text-sm font-light'>edit</p>
                <p className='text-sm font-light text-[#F40707]'>remove</p>
                </div>
                <br />
                <div className='flex gap-10'>
                    <span className='flex gap-5 text-[#cc9933]  border w-[8vw] justify-center border-black'> 
                        <p>-</p>
                        <p>1</p>
                        <p>+</p>
                    </span>
                    <h2 className='ml-[10vw] font-bold '>$70.00</h2>
                </div>
            </div>
        </div>
            <div className='border border-black w-[50vw] h-9 items-center flex px-[4vw] justify-between'>
                <h1>Sub Total</h1>
                <p className='font-bold'>$350.00</p>
            </div>
        <br />
        <div>
            <Link to="/Chekout"><button className='bg-[#cc9933] text-white w-[20vw] h-7'>Continue To Checkout</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Shoping;

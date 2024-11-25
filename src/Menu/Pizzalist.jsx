import React from 'react'
import { assets } from '../assets/assets'
const Pizzalist = () => {
  return (
    <div>
        <br />
        <h1 className="font-[500] text-3xl">PIZZAS</h1>
        <br />
        <div className="flex items-center justify-center gap-8 grid-rows-3 ">
          <div className="flex flex-col w-[27vw] shadow-2xl  py-5  items-center text-center justify-center rounded-2xl cursor-pointer hover:border border-[#cc9933] hover:text-[#cc9933]">
            <img className="" src={assets.Reactangle2} alt="" />
            <br />
            <h2 className="text-2xl font-bold">Neapolitan Pizza</h2>
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
            <img className="" src={assets.Reactangle202} alt="" />
            <br />
            <h2 className="text-2xl font-bold">Chicago Pizza</h2>
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
            <img className="" src={assets.Reactangle212} alt="" />
            <br />
            <h2 className="text-2xl font-bold ">Detroit Pizza</h2>
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
    </div>
  )
}

export default Pizzalist

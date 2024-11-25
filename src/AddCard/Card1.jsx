import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Card1 = () => {
  const [number, setNumber] = useState(1);

  const incrementNumber = () => {
    setNumber(prev => prev + 1);
  };

  const decrementNumber = () => {
    if (number > 1) {
      setNumber(prev => prev - 1);
    }
  };

  return (
    <div
      className="w-full flex h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: 'url("/src/assets/slice of spice.png")' }}
    >
      <div className="bg-[#00000088] h-screen flex justify-center items-center">
        <div className="flex flex-col text-center items-center justify-center w-[29vw] h-[35vw]">
          <div className="flex flex-col items-center justify-center rounded-t-xl bg-white">
            <img src={assets.Reactangle27} alt="Veggie burger" />
            <Link to="/Menu">
              <img
                className="w-[1vw] mt-[-13vw] ml-[25vw]"
                src={assets.close}
                alt="Close"
              />
            </Link>
            <br />
            <h2 className="font-bold text-2xl">Veggie burger</h2>
            <br />
            <p className="px-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
              tellus elit sed risus. Maecenas eget condimentum velit.
            </p>
            <div className="flex py-5 items-center gap-3">
              <div className="border-[#cc9933] border flex w-[9vw] h-7 items-center justify-center gap-4">
                <img 
                  className="w-4 h-4 cursor-pointer" 
                  src={assets.plus} 
                  alt="Increase quantity"
                  onClick={incrementNumber}
                />
                {number}
                <img 
                  className="w-4 h-4 cursor-pointer" 
                  src={assets.minus} 
                  alt="Decrease quantity"
                  onClick={decrementNumber}
                />
              </div>
              <button className="w-[18vw] h-7 text-white bg-[#cc9933] hover:bg-[#b88a2e]">
                Add To The Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;

import React from "react";
import { assets } from "../assets/assets";

const Login = () => {
  return (
    <div className="flex">
      <div className="flex h-screen  bg-no-repeat bg-cover bg-center ">
        <img src={assets.Reactangle69} alt="" />
      </div>
            
      <div className="flex flex-col items-center ml-[10vw]">
        <br /><br />
        <img className='w-[9vw] text-center ' src={assets.Group242} alt="" />
        <br />
        <p className='text-2xl'>Login</p>
        <br />
        <div className="flex flex-col gap-3">
          <input className='border border-black w-[30vw] h-[4vw] rounded-xl px-3' type="email" placeholder="Email" id="" />
          <input className='border border-black w-[30vw] h-[4vw] rounded-xl px-3' type="password" placeholder="Password" id="" />
        </div>
<br />
        <div>
            <button className='bg-[#cc9933] w-[30vw] h-[4vw] rounded-xl'>Login with Email</button>
        </div>
        <br />
        <div className=''>
          <img src={assets.Group83} alt="" />
        </div>
        <br />
        <div>
        <button className='bg-[#4285F4] w-[30vw] h-[4vw] rounded-xl flex items-center justify-center gap-5 text-white'> <img className='align-middle' src={assets.Group84} alt="" />continue with google</button>
        </div>
      </div>

    </div>
  );
};

export default Login;

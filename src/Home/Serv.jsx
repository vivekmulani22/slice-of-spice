import React from "react";

const Serv = () => {
  return (
    <div
      className="w-full h-[30vw] bg-center bg-cover bg-no-repeat flex itmes-center justify-center "
      style={{ background: 'url("/src/assets/Group 8.png")'}}
    >
      <div className="flex flex-col items-center text-center justify-center text-white">
        <h2 className="text-2xl font-bold">WE ARE ALWAYS HERE TO SERVE YOU.</h2><br /> <br />
        <div className="flex grid-cols-3  items-center gap-10">
          <div className="w-[20vw] h-[10vw] flex flex-col justify-center">
            <h1 className="text-[#cc9933] text-5xl font-bold ">980+</h1>
            <p className="text-2xl">Satisfied Customers</p>
          </div>
          <div className="w-[20vw] h-[10vw]  flex flex-col justify-center">
            <h1 className="text-[#cc9933] text-5xl font-bold">210+</h1>
            <p className="text-2xl">Deilcious Dishes</p>
          </div>
          <div className="w-[20vw] h-[10vw]  flex flex-col justify-center">
            <h1 className="text-[#cc9933] text-5xl font-bold">7K+</h1>
            <p className="text-2xl">Food Delivered</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serv;

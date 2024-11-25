import React from 'react'
import { assets } from '../assets/assets'

const Card2 = () => {
  return (
    <div className="w-full felx h-screen  bg-no-repeat bg-cover bg-cente "
    style={{ backgroundImage: 'url("/src/assets/slice of spice.png")' }}>
      
      <div className="bg-[#00000088] h-screen flex justify-center items-center">
        <div className="flex flex-col text-center items-center justify-center w-[29vw] h-[35vw]  ">
          <div className='flex flex-col  items-center justify-center rounded-t-xl bg-white'>
          <img src={assets.Reactangle27} alt="" />
          <br />
          <h2 className='font-bold text-2xl'>Veggie burger</h2>
          <br />
          <p className='px-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit.</p>
          <div className='flex py-5 gap-3'>
            <div className='border border-[#000] w-[7vw] gap-5 text-[#cc9933]'> -  1 + </div>
            <button className='w-[18vw] text-white bg-[#cc9933] '>Add To The Cart</button>
          </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Card2

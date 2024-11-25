import React from 'react'
import { assets } from '../assets/assets'

const Page3 = () => {
  return (
    <div>
      <div className="w-full items-center justify-center flex py-4  ">
        <div className="grid grid-cols-4 gap-6">
        <div className="flex flex-col shadow-xl w-[20vw] items-center justify-center h-[39vw] p-6 text-center">
            <img className='flex  w-[8vw]' src={assets.Gorup58} alt="" />
            <br />
            <h2 className='font-bold text-1xl'>Free Delivery</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            per inceptos himenaeos. Curabitur </p>
        </div>
        <div className="flex flex-col shadow-xl w-[20vw] items-center justify-center h-[39vw] p-6 text-center">
            <img className='flex  w-[8vw]' src={assets.Gorup59} alt="" />
            <br />
            <h2 className='font-bold text-1xl'>Save Your Time</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            per inceptos himenaeos. Curabitur </p>
        </div>
        <div className="flex flex-col shadow-xl w-[20vw] items-center justify-center h-[39vw] p-6 text-center">
            <img className='flex  w-[8vw]' src={assets.Vector2} alt="" />
            <br />
            <h2 className='font-bold text-1xl'>Regular Discounts</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            per inceptos himenaeos. Curabitur </p>
        </div>
        <div className="flex flex-col shadow-xl w-[20vw] items-center justify-center h-[39vw] p-6 text-center">
            <img className='flex  w-[8vw]' src={assets.Vector3} alt="" />
            <br />
            <h2 className='font-bold text-1xl'>Variety of Food</h2>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.
            per inceptos himenaeos. Curabitur </p>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default Page3

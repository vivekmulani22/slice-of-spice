import React from 'react'
import { assets } from '../assets/assets'

const Page4 = () => {
  return (
    <div className='w-full bg-[#FFEECB] flex flex-col text-center items-center py-[5vw] px-[5vw]'>
      <h2 className='font-bold text-2xl'>OUR TEAM</h2>
      <br />
      <p>Enim lobortis scelerisque fermentum dui faucibus. Tempor <br /> commodo ullamcorper a lacus vestibulum sed arcu non. Magna <br /> ac placerat vestibulum lectus mauris.</p>
      <br />
      <div className="flex items-center  gap-4 text-clip">
        <div className="w-[20vw] h-[30vw] bg-white flex flex-col items-center">
            <img className='p-[1vw]' src={assets.Reactangle56} alt="" />
            <h1 className='font-bold text-xl mt-2'>ROXI DALS</h1>
            <img className='w-[5vw] mt-7' src={assets.Gorup66} alt="" />
        </div>
        <div className="w-[20vw] h-[30vw] bg-white flex flex-col items-center">
        <img className='p-[1vw]' src={assets.Reactangle57} alt="" />
            <h1 className='font-bold text-xl mt-2'>EDGAR JHOLSON</h1>
            <img className='w-[5vw] mt-7' src={assets.Gorup66} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Page4

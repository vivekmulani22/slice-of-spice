import React from 'react'
import Navbar from '../Home/Navbar'
import { assets } from '../assets/assets'
import Footer from '../Componet/Footer'
import Footerlink  from '../Componet/Footerlink'

const Gallery = () => {
  return (
    <>
    <div className=" h-[25vw] w-full  bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: 'url("/src/assets/Pasta-tomat.png")' }}>
      <div className=''>
        < Navbar/>
      </div>
      <div className='flex flex-col text-5xl text-white font-bold'>
        <p className='flex items-centern ml-[13vw] mt-[8vw]'>GALLERY</p>
      </div>
    </div>
    <br />


      <div className='text-2xl w-full justify-center items-center py-[2vw] px-[10vw] flex  flex-col'>
        <h1>You'll never get tired of viewing</h1>
        <br />
        <div className=''>
          <div className="gap-8 grid grid-cols-3">
          <img src={assets.Reactangle38} alt="" />
          <img src={assets.Reactangle39} alt="" />
          <img src={assets.Reactangle40} alt="" />
          <img src={assets.Reactangle41} alt="" />
          <img src={assets.Reactangle42} alt="" />
          <img src={assets.Reactangle43} alt="" />
          <img src={assets.Reactangle44} alt="" />
          <img src={assets.Reactangle45} alt="" />
          <img src={assets.Reactangle46} alt="" />
          </div>
        </div>
      </div>
      <footer className="flex px-[5vw] bg-black py-10">
        <Footer/>
      </footer>
      <div>
        <Footerlink/>
      </div>
      </>
  )
}

export default Gallery

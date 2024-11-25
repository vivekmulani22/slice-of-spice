import React from 'react'
import Navbar from '../Home/Navbar'
import Page2 from '../AboutUs/page2'
import Page3 from '../AboutUs/Page3'
import Page4 from '../AboutUs/Page4'
import Footer from '../Componet/Footer'
import Footerlink   from '../Componet/Footerlink'

const AboutUs = () => {
  return (
    <>
    <div className=" h-[25vw] w-full  bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: 'url("/src/assets/serving-wedding.png")' }}>
      <div className=''>
        < Navbar/>
      </div>
      <div className='flex flex-col text-5xl text-white font-bold'>
        <p className='flex items-centern ml-[13vw] mt-[6vw]'>ABOUT US</p>
      </div>
    </div>

    <div className='py-[9vw]'>
      < Page2/>
    </div>

    <div>
      <Page3/>
    </div>
    <div className='py-[9vw]'>
      <Page4/>
    </div>
    <footer className="flex px-[5vw] bg-black py-10">
        <Footer />
      </footer>
      <div>
        <Footerlink/>
      </div>
      </>
  )
}

export default AboutUs

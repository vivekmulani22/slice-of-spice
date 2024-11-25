import React from 'react'
import Navbar from '../Home/Navbar'
import Shoping from '../ViewCard/Shoping'
import Footer from '../Componet/Footer'
import Footerlink from '../Componet/Footerlink'

const ViewCard = () => {
  return (
    <div  className=" h-screen w-full  bg-no-repeat bg-cover bg-center"
    style={{ backgroundImage: 'url("/src/assets/chicken 1.png")' }}>
      <Navbar/>
      <div className='flex items-center'>
      <Shoping/>
      </div>
      <footer className="flex px-[5vw] bg-black py-10">
        <Footer/>
      </footer>
      <div>
        <Footerlink/>
      </div>
    </div>
  )
}

export default ViewCard

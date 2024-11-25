import React from 'react'
import { assets } from '../assets/assets'

const page2 = () => {
  return (
    <div className=' flex bg-[#F7E9E4] w-full py-[4vw] px-[10vw] gap-10 justify-between  items-center '>
      <div className="">
        <h2 className='font-bold text-3xl'>Nothing to worry about <br /> with slice of spice</h2><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit  lacinia. Aliquam in  elementum tellus.
        </p>
      </div>
      <div className="">
        <img className='w-[100vw]' src={assets.Reactangle47} alt="" />
      </div>
    </div>
  )
}

export default page2

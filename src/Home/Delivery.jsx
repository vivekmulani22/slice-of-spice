import React from 'react'
import { assets } from '../assets/assets'

const Delivery = () => {
  return (
    <div className=' w-full  flex justify-center text-center py-10 items-center  bg-[#F7E9E4]  'style={{ backgroundImage: 'url("/src/assets/Group.png")' }}>
          <div className='w-full flex items-center justify-center flex-col px-[8vw]'>
            <h1 className='text-2xl font-bold'>DELIVERY</h1>
            <br />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat </p>
            <br />
            <button className='w-[10vw] h-9 rounded-sm bg-black text-white'>Order Now</button>
          </div>
    </div>
  )
}

export default Delivery

import React from 'react'

function About() {
  return (
    <div>
       <h1 className='flex justify-center pt-50 text-4xl font-bold'>About Ishani Enterprices</h1><br />
       <div className='flex gap-3 justify-center'>
           <button className='bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white'>Company Overview</button>
      <button className='bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white '>Vision & Mission </button>
      <button className='bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white'>Manufacturing Facility</button>
      <button className='bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white'>Team / Leadership</button>
       </div>
<br /> <br /> 
       <div className='m-8 font-medium'>
        <h1 className='text-3xl font-bold'>Company Overview</h1><br />
        <p className='text-gray-500 text-'>Founded in 2011,Ishani Enterprices has grown to become a trusted name in premium architectural solutions. Specializing in French doors and windows, what began as a modest operation has blossomed into a thriving business with a reputation for craftsmanship and reliability.</p>
        <p className='text-gray-500'>We’ve served hundreds of satisfied clients including architects, builders, and homeowners. Our journey has been marked by steady growth, innovation, and an unwavering commitment to excellence.</p>
        <p className='text-gray-500'>Today, we stand as a leading manufacturer with 50+ employees, state-of-the-art manufacturing facilities, and a distribution network that ensures timely delivery of our premium products.</p>
       </div>
      
      <div className='bg-'>

      </div>

    </div>
  )
}

export default About
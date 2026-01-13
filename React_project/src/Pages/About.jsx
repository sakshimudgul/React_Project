import React from "react";

function About() {
  return (
    <div>
      <h1 className="flex justify-center pt-50 text-4xl font-bold">
        About Ishani Enterprices
      </h1>
      <br />
      <div className="flex gap-3 justify-center">
        <button className="bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white">
          Company Overview
        </button>
        <button className="bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white ">
          Vision & Mission
        </button>
        <button className="bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white">
          Manufacturing Facility
        </button>
        <button className="bg-gray-200 p-3 rounded-md hover:bg-green-600 hover:text-white">
          Team / Leadership
        </button>
      </div>
      <br /> <br />
      <div className="  p-25 m-10 flex">
        <div className="m-8 font-mediumr">
          <h1 className="text-3xl font-bold">Company Overview</h1>
          <br />
          <p className="text-gray-500 text-lg">
            Founded in 2011,Ishani Enterprices has grown to become a trusted
            name in premium architectural solutions. Specializing in French
            doors and windows, what began as a modest operation has blossomed
            into a thriving business with a reputation for craftsmanship and
            reliability.
          </p>
          <p className="text-gray-500 text-lg">
            We’ve served hundreds of satisfied clients including architects,
            builders, and homeowners. Our journey has been marked by steady
            growth, innovation, and an unwavering commitment to excellence.
          </p>
          <p className="text-gray-500 text-lg">
            Today, we stand as a leading manufacturer with 50+ employees,
            state-of-the-art manufacturing facilities, and a distribution
            network that ensures timely delivery of our premium products.
          </p>
        </div>
        <div>
          <img
            className="rounded-xl m-10 shadow-xl  w-500 h-auto"
            alt="Ishani Enterprises Manufacturing Facility"
            src="https://ishanib.demovoting.com/uploads/company-images/Ishani_Enterprises.jpg"
          ></img>
        </div>
      </div>
      <section className="mx-10 my-15 py-5 bg-gray-100  rounded-2xl ">
        <h1 className="font-bold text-4xl pt-10 flex justify-center">
          Our Vision & Mission
        </h1>

        <div>
          <div className="bg-white shadow-xl m-8 p-20 rounded-xl">
            <div class="text-green-500 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div>
            <h1 className="font-bold text-2xl pb-2">Our Vision</h1>
            <p className="text-gray-500">
              To be the most trusted manufacturer of premium French doors and
              windows in india, recognized for our elegant design, superior
              craftsmanship, and commitment to sustainable manufacturing
              practicles.
            </p>
          </div>
          <div className="bg-white shadow-xl m-8 p-20 rounded-xl">
            <div class="text-green-500 mb-4"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg></div>
            <h1 className="font-bold text-2xl pb-2">Our Mission</h1>
            <p className="text-gray-500">
              To redefine architechural elegance through innovative French door
              and window solutions that combines timeless design with modern
              functionality.We commit to using premium matrials,precision
              engineering, and sustainable practices to deliver exceptional
              value to our customers.
            </p>
          </div>
        </div>
      </section>
      <div>
        <h1 className="flex justify-center font-bold text-3xl">
          Our Manufacturing Facility
        </h1>
        <h2 className="font-medium mt-10 mx-5  text-2xl">
          
          Precision Craftsmanship
        </h2>
        <p className="text-gray-500 m-5 text-lg ">
          Spread over 15,000 square feet, our facility combines traditional
          craftsmanship with CNC pricision machinery to create French doors and
          windows of exceptional quality
        </p>
        <p className="mx-5 text-gray-500 text-lg pb-2">
          
          5 dedicated production lines with capacity of 400+ units/month
        </p>
        <p className="mx-5 text-gray-500 text-lg pb-2">
          Advanced glass tempering and wood finishing stations
        </p>
        <p className="mx-5 text-gray-500 text-lg pb-2">
          Sustainable manufacturing with 85% matrial utilization efficiency
        </p>
      </div>
      <div className="bg-green-200 pb-2 m-5 p-5 rounded-xl">
        <h1 className="font-bold text-green-900 text-xl pb-2">Quality Assurance</h1>
        <p className='text-green-700 pb-2'>Every French door and win
          
          
          
          
          
          
          
          
          
          
          
          
          
          
                  
          
          
          
          
          
          
          
          dow undergoes 27 quality checkpoints from raw material inspection to final packaging . Our quality assurance process includes stress testing,wetherproofing verification, and finish durability assessments to ensure products that stand the test of time </p>
      </div>

      <div className="m-10">
        <h1 className="font-bold text-4xl flex justify-center p-5">Our Leadership Team</h1>
        <div className="shadow-grey-xl m-5 h-auto w-full">
          <h1 className="font-bold text-xl">Shri Pramod Ashok Murkewar</h1>
          <h3 className="font-medium text-green-500">Founder & Director</h3>
          <p>Visionary Entrepreneur | Builder | Industry Leader . Shri Pramod Ashok Murkewar is a seasoned entrepreneur and industry expert, known for his  strategic thinking and visionary leadership. He is the Founder and Director of Ishani Enterprises, a pioneer in French door manufacturing in Maharashtra. With a deep understanding of engineering and design, he laid the foundation for a company that today satnds as a symbole of quality,precision, and trust. </p>
        </div>
        <div className="shadow-grey-xl"></div>
      </div>

    
    </div>
  );
}

export default About;

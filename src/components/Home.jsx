import React from 'react'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className='mt-20 mb-0 ml-auto mr-auto text-center'>
      <p className='font-medium text-xl'>Hey, I'm</p>
      <p className='font-bold text-5xl '>Gajapriyan</p>
      <div className='mt-8 text-l border-b border-black w-1/6 ml-auto mr-auto text-lg'>
      <Typewriter
      options={{
      strings: ['Innovator', 'Tech Enthusiast', 'SWE'],
      autoStart: true,
      loop: true,
      }}
      />
      </div>
      <p className='w-1/2 mt-6 text-lg font-light ml-auto mr-auto'>I'm a Full Stack developer with experience in DevOps, Backend, Frontend and mobile development.</p>
      <a href="mailto:gajapriyan.v@gmail.com"><button className='text-white bg-black  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center mt-5'>Say Hi! 👋</button></a>


    </div>
    
  )
}

export default Home
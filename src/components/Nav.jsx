import React from 'react'


const Nav = ({resultRef,resultRef1}) => {
  
  const onSubmit = (e) => {
    e.preventDefault();
    resultRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const onSubmit1 = (e) => {
    e.preventDefault();
    resultRef1.current.scrollIntoView({ behavior: "smooth" });
  };
  





  return (
    <header className='w-[100%] md:w-[75%] mt-12 mb-0 ml-auto mr-auto'>
        <nav className='flex justify-center items-center md:justify-between'>
        <div className='font-semibold hidden md:block'>Gajapriyan</div>
        <div className='items-center'>
        <ul className='flex justify-center items-center px-5 py-3 rounded-full text-black font-semibold text-base bg-gray-100'>
            <button><ul>Home</ul></button>
            <button  onClick={onSubmit}><ul>Timeline</ul></button>
            <button  onClick={onSubmit1}><ul>Projects</ul></button>
            
        </ul>
        </div>
        
        <a className='no-underline text-black font-semibold hidden md:block' href="/assets/Gajapriyan Vigneswaran Resume - Google Docs.pdf">Resume</a>
    </nav>
    </header>

  )
}

export default Nav
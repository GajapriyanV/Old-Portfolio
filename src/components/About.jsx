import React from 'react'

const one = (
    <p>
      I am currently a <b>Computer Science Student</b> at
      Carleton Univerity, specializing in Business Management. I am the lead Software Developer
      for my startup <b>Inertia AI</b> and currently looking for job oppritunities heading into the next year
      
    </p>
  );

  const two = (
    <p>
      Outside of work, I'm interested in following the developments of
      Technology. I also watch alot of football. And make coding TikToks.
    </p>
  );

const tech_stack = [
    "Javascript",
    "Python",
    "React.js",
    "Java",
    "Node.js",
    "HTML & CSS",
    "Next.js",
    "TensorFlow",
    "MongoDB",
    "Express.js",
    "Firebase",
    "GraphQL"
  ];

  const tech_items = tech_stack.map(stack => <li>{stack}</li>);





const About = () => {
  return (
    
    <div>
        <div className='w-1/2 ml-auto mr-auto'>
        <h1 className='font-bold text-5xl mt-20 mb-0 ml-auto mr-auto text-center'>About Me</h1>
        </div>
    
        <div className=' mt-16 w-1/2 grid grid-cols-2 gap-0 ml-auto mr-auto'>
            <div>
                {one}
                <p className='mt-4'>Here are some technologies I have been working with:</p>
                <ul className='grid grid-cols-2 mt-4 list-disc mb-5'>
                    {tech_stack.map((tech_item) => {
                        return (
                            <li className='font-semibold'>{tech_item}</li>
                        )
                    })}
                </ul>
                
            </div>
            <div className='max-w-xs ml-auto mr-auto'>
                <img className= 'rounded-md ml-2 shadow-md hover:shadow-2xl hover:rotate-[2deg] ' src={'/assets/452120066.0.jpg'} alt="" />
            </div>
            
        </div>
    </div>
    
    
    
    
    
  )
}

export default About
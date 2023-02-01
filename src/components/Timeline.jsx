import React from 'react'
import TimelineItem from './TimelineItem'

const data =  [{
  year: 'Today',
  title: 'Computer Science Student',
  duration: 'Present',
  details: 
     'I am currently pursuing my ambition for programming by acquiring my Honours BSc Computer Science',
},
{
year: '2022',
title: 'Software Developer Intern | GaoTek',
duration: '3 Months',
details:
  " Assisted with troubleshooting and working on embedded systems using C, C++, Java, and Python in many capacities.",
},
{
year: '2022',
title: 'Full Stack Engineer | Digitera Interactive',
duration: '4 Months',
details:
  'Built various functional interfaces for the PromPlanner platform using PHP, HTML, CSS, Vue.js and MySQL, making administrative tasks efficient and simpler to use',
},
{
year: '2020',
title: "Freelance Web Developer",
duration: 'Present',
details:
  'I applied the knowledge that I obtained with HTML CSS, Javascript and React to build websites for my friends and organizations around the community.',
},
{
year: '2019',
title: 'First Line of Code',
duration: 'the beginning',
details:
  "I wrote my first line of real code that started this journey into digital craftsmanship that I never could've imagined.",
}]

const Timeline = React.forwardRef((props, ref) => (
  <div ref={ref}>
      <div className='w-2/3 ml-auto mr-auto items-center'>
        <h1 className='font-bold text-5xl mt-20 mb-0 ml-auto mr-auto text-center'>My Experiences</h1>
      </div>
      <div className=' ml-auto mr-auto w-1/2 flex flex-col md:flex-row justify-center my-20'>
        <div className='w-full md:7/12'>
        {data.map(item => (
               <TimelineItem 
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
        </div>
      </div>
     </div>
));

export default Timeline
import React from 'react'
import { Carousel } from 'react-bootstrap';
import PortfolioItem from './PortfolioItem';



const projects = [
  
  {
    title: 'Wordle Clone',
    stack: ['React','ContextAPI', 'TailwindCSS',],
    link: 'https://github.com/GajapriyanV/React-Wordle-Clone',
    description: 'Creating a fully functional wordle clone that uses RapidAPI and allows user to play an unlimited amount'

  },
  {
    title: 'Paint Clone',
    stack: ['React', 'Redux', 'TailWindCSS'],
    link: 'https://github.com/GajapriyanV/Microsoft-Paint-Clone',
    description: 'A reinvented MSPaint application that allows users to use various tools to captivate there audience on canvas'
  },
  {
    title: 'Rapid Wiki',
    stack: ['React', 'Redux', 'TailWindCSS'],
    link: 'https://github.com/GajapriyanV/react-projects/tree/main/react-wiki',
    description: 'A reinvented wikipedia application that allows users to access all types of information and sort by categories'
  },
  {
    title: 'Income Tracker',
    stack: ['React', 'Context API','CSS'],
    link: 'https://github.com/GajapriyanV/react-projects/tree/main/income-tracker',
    description: 'An application that aids my budgeting as it enables me to create budgets for the month and keep track of my expenses'
  },
  {
    title: 'Crypto Price Predictor',
    stack: ['Python', 'Pandas','Tensorflow'],
    link: 'https://github.com/GajapriyanV/COVID-19-Predictor',
    description: 'Utilizing long short-term neural networks to analyze past and present data to forecast a future price'
  },
  {
    title: 'Weather App',
    stack: ['React', 'RapidAPI', 'JavaScript'],
    link: 'https://github.com/GajapriyanV/react-projects/tree/main/weather-react',
    description: 'A elegant Weather App that provded real-time information from your location and any city/reigon of your choice'
  },
  {
    title: 'QuickType',
    stack: ['React', 'TailwindCSS',],
    link: 'https://github.com/GajapriyanV/Typing-Test-Application',
    description: 'An exceptional typing practise application that allows the user to shift in content difficulity while providing accurate typing speed'

  },
  {
    title: 'Sudoku Solver',
    stack: ['Python', 'Recursion'],
    link: 'https://github.com/GajapriyanV/Sudoku-Solver',
    description: 'An application that provided the solution to any solvable sudoku puzzle using an infamous backtracking recursive approach'
  },
  {
    title: 'Space Invaders',
    stack: ['Python', 'Pygame'],
    link: 'https://github.com/GajapriyanV/Space-Invaders',
    description: 'A remake of the atari classic, space invaders that increases in difficulities and provided customizability based on skill level'

  },
  
  
  
  
]





const Projects = React.forwardRef((props, ref) => (
  
  <div ref={ref}>
        <div className='ml-auto mr-auto'>
        <h1 className='font-bold text-5xl mt-20 mb-0 ml-auto mr-auto text-center'>Projects</h1>
        </div>
        <div className=' relative mb-20 mt-12'>
          <Carousel fade className='w-full ml-auto mr-auto md:w-1/2'>
                <Carousel.Item className=' h-[500px]'>
                    <img
                    class="d-block w-100"
                    className='h-[100%] rounded-[24px]'
                    src="/assets/technotes.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>TechNotes</h3>
                    <p>A full-stack app enable employees and admins to log in and manage all CRUD operations for incoming order tickets and manage customer information using MERN Stack.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' h-[500px]'>
                    <img
                    class="d-block w-100"
                    className='h-[100%] rounded-[24px] brightness-[.65]'
                    src="/assets/Spotify.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Spotify 2.0</h3>
                    <p>A fully functional and reinvented homepage of the Spotify web app.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=' h-[500px]'>
                    <img
                    class="d-block w-100"
                    className=' w-100 h-[100%] rounded-[24px] brightness-[0.68]'
                    src="/assets/gym.png"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>GoTrainer</h3>
                    <p>Allows users to choose exercise categories and specific muscle groups, and browses hundreds of exercises that come with built-in video instructions.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                   
                
            </Carousel> 
        </div>
        
        
        <div className="  w-full ml-auto mr-auto flex flex-col md:w-1/2 flex-row items-center justify-center">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(item => (
                <PortfolioItem
                  title={item.title}
                  stack={item.stack}
                  description={item.description}
                  link={item.link}
                />
              ))}
         </div>
      </div>
       
        

          
        

    </div>
));

export default Projects


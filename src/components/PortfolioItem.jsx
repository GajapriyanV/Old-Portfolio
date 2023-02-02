import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';







const PortfolioItem = ({title,stack,description,link}) => {

  const url = {link}
  
  
  console.log(url)
  return (
    
    <div class="flex justify-center items-center">
      <div class=" rounded-2xl overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className='flex items-center justify-center w-full font-medium'>
            <div>
              <p className='text-xl text-center'>{title}</p>
            </div>
          </div>
          <div className='flex items-center justify-center w-full gap-2 -mt-4'>
            <div>
            <a href={link}>
            <OpenInNewIcon style={{ color: "black" }}/>
            </a>
            </div> 
            <div>
              <a href={link}>
              <GitHubIcon style={{ color: "black" }}/>
              </a>
            </div>
          </div>
          
          <p class="text-gray-700 text-base mt-3 text-center">
            {description}
          </p>
        </div>
        <div class=" flex flex-wrap justify-center -mt-6 gap-2 px-6 py-4">
          {stack.map(item => (
                  <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2">
                     {item}
                  </span>
               ))}  
        </div>
      </div>
    </div>
    

  )
}

export default PortfolioItem
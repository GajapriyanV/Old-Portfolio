import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <div className='w-1/2 grid grid-cols-1 gap-0 ml-auto mr-auto'>
        <div className=' flex justify-center gap-3 items-center pt-[125px]'>
            <div>
                <button onClick={(event) => window.location.href = "https://github.com/GajapriyanV"}>
                <GitHubIcon/>
                </button>
            </div>
            <div>
                <button onClick={(event) => window.location.href = "https://www.instagram.com/gajapriyan.15/?hl=en"}>
                <TwitterIcon/>
                </button>
            </div>
            <div>
                <EmailIcon/>
            </div>
            <div>
                <button onClick={(event) => window.location.href = "https://www.linkedin.com/in/gajapriyan-vigneswaran-8b5072225/"} >
                <LinkedInIcon/>
                </button>
            </div>
            <div>
                <button onClick={(event) => window.location.href = "https://www.instagram.com/gajapriyan.15/?hl=en"}>
                <InstagramIcon/>
                </button>
            </div>
        </div>
        <div className='text-center mt-3'><p className='font-medium'> © {new Date().getFullYear()} Gajapriyan</p></div>
    </div>
    
  )
}

export default Footer
import React from 'react'
// import './Main.css'
import img from '../assets/image-folder/logo.svg'

const Navbar = ({isStrue, setisStrue}) => {
    const handleIsTrue = () => {
        setisStrue(!isStrue);
    }
  return (
    <> 
  
           <nav className="z-50 sticky top-0 flex items-center justify-between w-full py-2 bg-zinc-100 shadow-lg flex-nowrap text-black-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-white-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className="container flex flex-wrap items-center justify-between w-full px-3 mx-auto">
            <img src={img} alt="" className='w-20 h-20 ms-8'/>
            <button onClick={handleIsTrue} className="block px-2 bg-transparent border-0 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent3"
                aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
                <span className="[&>svg]:w-7">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                        <path fill-rule="evenodd"
                            d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                            clip-rule="evenodd" />
                    </svg>
                </span>
            </button>

            <div className="!visible mt-2 hidden ms-5 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
                id="navbarSupportedContent3" data-te-collapse-item>
                <ul className="flex flex-col pl-0 mr-auto list-style-none lg:flex-row" data-te-navbar-nav-ref>
                    
                </ul>
              
            </div>
        </div>
    </nav>
   
    </>
  )
}

export default Navbar
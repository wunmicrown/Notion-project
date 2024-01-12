import React, { useState } from 'react'
import img from '../assets/image-folder/notion-logo.png'
import { FaList, FaTimes } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Navbar = ({isStrue, setisStrue}) => {
    const [tab, settab] = useState(true)
    const handleIsTrue = () => {
        setisStrue(!isStrue);
        settab(!tab)
    }
  return (
    <> 
  
           <nav className="z-50 sticky top-0 flex items-center justify-between w-full py-2 bg-inherit shadow-lg flex-nowrap text-black-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-white-600 lg:flex-wrap lg:justify-start lg:py-4" data-te-navbar-ref>
        <div className=" flex flex-wrap transition-all duration-300 ease-in-out items-center justify-between w-full px-3 mx-auto">
            <img src={img} alt="" className=''/>
            <button onClick={handleIsTrue} className="block transition-all duration-300 ease-in-out px-2 bg-transparent border-0 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 lg:hidden"
                type="button" data-te-collapse-init data-te-target="#navbarSupportedContent3"
                aria-controls="navbarSupportedContent3" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="text ">
                    {tab ? <FaList className="text-2xl transition-all duration-300 ease-in-out" /> : <RxCross1 className="text-2xl transition-all duration-300 ease-in-out font-bold" />}
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
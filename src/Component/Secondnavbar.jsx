import React from 'react'

import { useState } from 'react'
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

const Secondnavbar = ({ isStrue }) => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const handleAccordionClick = (index) => {
        if (activeAccordion === index) {
            setActiveAccordion(null);
        } else {
            setActiveAccordion(index);
        }
    };
    const navList = [
        { path: "/logout", name: "Get Notion free", log: true },
      ]
    const Details = [
        { name: 'Product', courses: ['Wikis', 'Projects', 'Docs', 'Notion AI', 'Template gallery', 'Customer stories', 'Connections'] },
        { name: 'Solution', courses: ['BY TEAM SIZE', 'Enterprise', 'Small business', 'BY TEAM FUNCTION', 'Design', 'Engineering', 'Product', 'Managers', 'NOTION FOR', 'Startups', 'Remote work','Education','Nonprofits'] },
        { name: 'Resources', courses: ['Blog','Guides & tutorials','Webinars','Help center','API docs','Community','Hire a consultant'] },
        { name: 'Download', courses: ['OS & Android','Mac & Windows','Web Clipper'] },
        { name: 'Pricing', courses:[] },
        { name: 'Request a demo', courses:[] },
       
    ];

    return (



        <>
            {/* <Navbar /> */}
            {/* <div className="text pt-16"></div> */}
            {/* <div className="text"></div> */}
            <div className={`${isStrue ? "" : "scale-0"}`}>
            <div className={`text duration-500 z-50 ease-in-out  ${isStrue ? "w-full " : "w-0"}  border  bg-inherit h-screen fixed left-0`}>
            <div className="w-full ">
                <div className="space-y-4">
                    {Details.map((Details, index) => (
                        <div
                            key={index}
                            className={`border p-4 rounded-lg transition-all duration-300 ease-in-out ${activeAccordion === index ? " bg-inherit" : "bg-white"
                                }`}
                        >
                            <div
                                className="flex justify-between cursor-pointer transition-all duration-300 ease-in-out"
                                onClick={() => handleAccordionClick(index)}
                            >
                                <h2 className="text-lg font-semibold">{Details.name}</h2>

                                <span>
                                    {activeAccordion === index ? (
                                        <IoIosArrowDropup />
                                    ) : (
                                        <IoIosArrowDropdown />
                                    )}
                                    
                                </span>
                                
                            </div>
                            {activeAccordion === index && (
                                <div className="mt-2">
                                    <p className='font-medium text-lg text-center py-2 '>{Details.name}</p>
                                    <ul>
                                        {Details.courses.map((course, courseIndex) => (
                                            <>
                                                <li key={courseIndex} className='flex gap-1'>
                                                    <li className=' list-item'>{course}</li>
                                                </li>
                                            </>

                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                    {navList.map((value, index) => (
              
              <div className="text-2xl width  text-white cursor-pointer" key={index}>
                {/* <Link to={value.path} className="text"> */}
                {value.log ?
                  <span className="p-2 font-[400] text-xl text-white-600 bg-black rounded-lg hover:bg-gray-300">{value.name}</span> :
                  <span className=" font-semibold  ">{value.name}</span>
                }
                {/* </Link> */}
              </div>
            
          ))}
                </div>
            </div>
            </div>
            </div>

        </>
    )
}

export default Secondnavbar
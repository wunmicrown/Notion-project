import React from 'react'

const SecondNavbar = ({ isStrue }) => {
    const navList = [
        { path: "/", name: "Speakers" },
        { path: "/contact", name: "Contact" },
        { path: "/about", name: "Venue" },
        { path: "/logout", name: "Get  Tickets", log: true },
      ]
  return (
    <>
            <div>
      <div className={`${isStrue ? "" : "scale-0"}`}>
        <div className={`text duration-500 z-50 ease-in-out  ${isStrue ? "w-1/2  flex items-center justify-center" : "w-0"}  border bg-gray-100 h-screen fixed left-0`}>
          <nav className=" text -mt-24">
            <div className="text" >
              {navList.map((value, index) => (
              
                  <div className="px-4 py-2 h-16 text-2xl text-blue-500 cursor-pointer" key={index}>
                    {/* <Link to={value.path} className="text"> */}
                    {value.log ?
                      <span className="p-2 font-[400] text-xl text-blue-600 bg-yellow-500 rounded-lg hover:text-white">{value.name}</span> :
                      <span className="font-bold  ">{value.name}</span>
                    }
                    {/* </Link> */}
                  </div>
                
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
  )
}

export default SecondNavbar
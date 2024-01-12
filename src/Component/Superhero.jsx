import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export const Superhero = () => {
  return (
    <>
        <div className=' font-bold text-center'>
             <h1 className=' mt-16 text-5xl'>New year, new plans.</h1>
             <p className=' font-semibold text-2xl mt-3'>Your workspace to write, organize, and collaborate. With AI by your side.</p>
             <div className=' flex items-center justify-center gap-3 bg-black w-fit mx-auto text-white p-3 rounded-md mt-5'>Get Notion free <span className=''><FaArrowRight className="text- xl" /></span></div>
        </div>
    </>
  )
}

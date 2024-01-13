import React from 'react'
import Figmalogo from '../assets/image-folder/figma-logo.png'
import Pixar from '../assets/image-folder/pixar.png'
import Doordash from '../assets/image-folder/doordash.png'
import Nike from '../assets/image-folder/nike.png'
import Amazone from '../assets/image-folder/amazon.png'
import Pinterest from '../assets/image-folder/Pinterest.png'
import General_ from '../assets/image-folder/General_.png'
import Uber from '../assets/image-folder/uber.png'
import Plaid from '../assets/image-folder/plaid.png'
import Toyota from '../assets/image-folder/toyota.png'
import Snowflake from '../assets/image-folder/snowflake.png'
import Headspace from '../assets/image-folder/headspace.png'
const Imagesection = () => {
  return (
    <>
        <div className=' flex mx-auto justify-center gap-10 mt-16'>
            <img src={Figmalogo} alt="Figmaimg"  className=' w-[95px]'/>
            <img src={Pixar} alt="pixarimg"className=' w-[95px]' />
            <img src={Doordash} alt="doordashrimg"className=' w-[120px]' />
            <img src={Nike} alt="nikeimg"className=' w-[120px]' />
            <img src={Amazone} alt="amzonimg"className=' w-[120px]' />
            <img src={Pinterest} alt="Pinterestimg"className=' w-[120px]' />
        </div> 
        <div className=' flex mx-auto justify-center gap-10 mt-16'>
            <img src={General_} alt="Figmaimg"  className=' w-[95px]'/>
            <img src={Uber} alt="uberimg"  className=' w-[95px]'/>
            <img src={Plaid} alt="plaidimg"  className=' w-[95px]'/>
            <img src={Toyota} alt="toyotaimg"  className=' w-[95px]'/>
            <img src={Snowflake} alt="snowflakeimg"  className=' w-[150px]'/>
            <img src={Headspace} alt="headspaceimg"  className=' w-[150px]'/>
            
        </div> 
        <div className=' flex mx-auto justify-center gap-10 mt-16'>
            <img src={General_} alt="Figmaimg"  className=' w-[95px]'/>
            
            
        </div> 
    </>
  )
}

export default Imagesection
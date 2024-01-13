import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/Secondnavbar'
import { Superhero } from './Component/Superhero'
import Superheroimg from './Component/Superheroimg'
import Cardsection from './Component/Cardsection'
import Carousel from './Component/Carousel'
import Imagesection from './Component/Imagesection'

const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
      <Navbar setisStrue={setisStrue} isStrue={isStrue} />
      <SecondNavbar isStrue={isStrue}/>
      <Superhero/>
      <Superheroimg/>
      <Cardsection/>
      <Carousel/>
      <Imagesection/>
    </>
  )
}

export default App
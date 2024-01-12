import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/Secondnavbar'
import { Superhero } from './Component/Superhero'
import Superheroimg from './Component/Superheroimg'
import Cardsection from './Component/Cardsection'
import Carousel from './Component/Carousel'

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
    </>
  )
}

export default App
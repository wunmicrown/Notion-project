import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/Secondnavbar'
import { Superhero } from './Component/Superhero'

const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
      <Navbar setisStrue={setisStrue} isStrue={isStrue} />
      <SecondNavbar isStrue={isStrue}/>
      <Superhero/>
    </>
  )
}

export default App
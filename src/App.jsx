import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/Secondnavbar'

const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
      <Navbar setisStrue={setisStrue} isStrue={isStrue} />
      <SecondNavbar isStrue={isStrue}/>
    </>
  )
}

export default App
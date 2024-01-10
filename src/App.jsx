import React, { useState } from 'react'
import Navbar from './Component/Navbar'
import SecondNavbar from './Component/Secondnavbar'
import { Newyearsection } from './Component/Newyearsection'

const App = () => {
  const [isStrue, setisStrue] = useState(false)
  return (
    <>
      <Navbar setisStrue={setisStrue} isStrue={isStrue} />
      <SecondNavbar isStrue={isStrue}/>
      <Newyearsection/>
    </>
  )
}

export default App
import React from 'react'
import Sidebar from './Sidebar'
import  MainContainer from "./MainContainer"

const Body = () => {
  return (
    <div className='min-h-full flex'>
      <Sidebar/>
      <MainContainer/>
    </div>
  )
}

export default Body

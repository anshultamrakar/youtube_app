import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
 
  if(isMenuOpen) return null 
  return (
    <div className='m-4 shadow-lg p-4 w-72'>
      <ul className='py-2'>
        <li>Home</li>
        <li>Shorts</li>
        <li>Subscription</li>
      </ul>
      <ul>
        <p className=''>You</p>
        <li>History</li>
        <li>Playlists</li>
        <li>Watch Later</li>
        <li>Liked videos</li>
      </ul>
    </div>
  )
}

export default Sidebar
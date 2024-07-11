import React from 'react'

const Sidebar = () => {
  return (
    <div className='m-4'>
      <ul>
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
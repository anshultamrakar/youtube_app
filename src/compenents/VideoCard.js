import React from 'react'

const VideoCard = ({info}) => {
  const {snippet , statistics } = info
  return (
    <div className='w-80 shadow-lg rounded-lg p-2'>
       <img alt = "thumbnail" src = {snippet.thumbnails.medium.url}/>
       <p>{snippet.title}</p>
       <p className='text-black' >{statistics.viewCount} views</p>
    </div>
  )
}

export default VideoCard

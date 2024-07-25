import React from 'react'

const VideoCard = ({video}) => {
  const {snippet} = video
  return (
    <div>
       <img alt = "thumbnail" src = {snippet.thumbnails.medium.url}/>
    </div>
  )
}

export default VideoCard

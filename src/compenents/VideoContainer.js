import React from 'react'
import Videos from "./VideoCard"
import { useState , useEffect } from 'react'
import { YOUTUBE_API } from '../utils/Constant'
import VideoCard from './VideoCard'


const VideoContainer = () => {
  const [videos , setVideos] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = async() => {
   try{
    const response = await fetch(YOUTUBE_API)
    const json = await response.json()
    setVideos(json.items)
   }catch(err){
    console.error(err)
   }
  }

  return (
    <div className='flex m-4 gap-4 flex-wrap'>
      {videos.map(video => (
        <VideoCard key = {video.id} video = {video} />
      ))}
      
    </div>
  )
}

export default VideoContainer
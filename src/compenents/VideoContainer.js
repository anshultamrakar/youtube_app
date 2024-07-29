import React from 'react'
import { useState , useEffect } from 'react'
import { YOUTUBE_API } from '../utils/Constant'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'


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
       <Link to = {"/watch?v=" + video.id}><VideoCard key = {video.id} info= {video} /></Link> 
      ))}
      
    </div>
  )
}

export default VideoContainer
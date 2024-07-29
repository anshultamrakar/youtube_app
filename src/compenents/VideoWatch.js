import React from 'react'
import { useEffect , useState } from 'react'
import { VIDEO_WATCH_API } from '../utils/Constant'
import { useDispatch } from 'react-redux'
import { closeMenu, toggleMenu } from '../utils/appSlice'

const VideoWatch = () => {
  const [myVideo , setMyVideo] = useState([])
  const dispatch = useDispatch()
  const url_string = window.location.href
  const url = new URL(url_string) 
  const videoId = url.searchParams.get("v");


  useEffect(() => {
    getVideoData()
    dispatch(closeMenu())
  },[])
  
 const getVideoData = async() => {
  try{
    const response = await fetch(VIDEO_WATCH_API)
    const json = await response.json()
    console.log(json)
   }catch(err){
    console.error(err)
   }
 }
    
  return (
    <div>
      <p>Video Watch</p>
    </div>
  )
}

export default VideoWatch

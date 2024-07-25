import React from 'react'
import { useState , useEffect } from 'react'
import { YOUTUBE_API } from '../utils/Constant'

const Videos = () => {
  const [videoData , setVideoData] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = async() => {
    try{
      const response = await fetch(YOUTUBE_API)
      const json = await response.json();
      setVideoData(json.items);
    }catch(err){
      console.error(err)
    }
  }
  return (
    <div>
        <ul>
          {videoData.map(item => (
            <li className='flex'>
              <img src = {item.snippet.thumbnails.default.url} width={item.snippet.thumbnails.default.width} height={item.snippet.thumbnails.default.height}/>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Videos

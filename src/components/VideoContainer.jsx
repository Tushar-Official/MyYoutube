import React, { useEffect,useState } from 'react'
import {YOUTUBE_VIDEOS_API} from '../Constant'
import VideoCard from './VideoCard';
import {Link} from 'react-router-dom' 
function VideoContainer() {
    const [videos,SetVideos]=useState([]);
    useEffect(()=>{
        getVideos();
    },[])
    const getVideos=async()=>{
        const data=await fetch(YOUTUBE_VIDEOS_API)
        const json=await data.json();
        
        SetVideos(json.items)
    }
  return (
    <div className='flex flex-wrap'>
    {videos.map((video)=>(
       <Link to={"/watch/?v="+video.id}> 
       <VideoCard key={video.id} info={video} />
       </Link>
    
       ))}

    </div>
  );
};

export default VideoContainer
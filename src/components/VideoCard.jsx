import React from 'react'

function VideoCard({info}) {
    console.log(info);
    const {snippet,statistics}=info;
    const {thumbnails}=snippet;
    
  return (
    <div className='p-2 h-full m-2 w-80  
     shadow-lg border-1 border-gray-800 rounded-lg '>
    
    <img className='rounded-lg h-1/2'
     alt="thumbnail" src={thumbnails.medium.url} />
    <ul className='h-1/2 p-2'>
    <li className='font-bold py-2 font-sans'>{snippet.title}</li>
    <li className='font-semibold text-gray-600'>{snippet.channelTitle}</li>
    <li className='text-gray-500'>{statistics.viewCount}k Views</li>
    
    </ul>
    
    </div>
  )
}


export default VideoCard
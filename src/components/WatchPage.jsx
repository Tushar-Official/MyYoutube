import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../Utils/aapSlice'
import CommentsContainer from './CommentsContainer';
//import CommentsContainer from './CommentsContainer';

function WatchPage() {

    const [searchParams]=useSearchParams();
    console.log(searchParams.get("v"))

    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

  return (
    <div>
    <div className='px-5 py-2'>
    <iframe width="1000" 
    height="500" 
    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    allowFullscreen>
    </iframe>
    </div>
    <CommentsContainer/>
    
    </div>
  )
};

export default WatchPage
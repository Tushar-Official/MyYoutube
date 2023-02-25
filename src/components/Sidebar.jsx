import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
function Sidebar() {
  const ismenuOpen=useSelector(store=>store.app.ismenuOpen)
  if(!ismenuOpen) return null;
  //Early return pattern
  return (
    <div className='p-5 shadow-lg w-48'>
    
    <ul className='py-2'>
    <li><Link to="/">Home</Link></li>
    <li>Shorts</li>
    <li>Gaming</li>
    <li>Videos</li>
    <li>Live</li>
    </ul>
    
    <h1 className='font-bold  pt-5'>Subscriptions</h1>
    <ul className='py-2' >
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movies</li>
    </ul>
    <h1 className='font-bold pt-5'>Watch later</h1>
    <ul className='py-2'>
    <li>Music</li>
    <li>Sports</li>
    <li>Gaming</li>
    <li>Movies</li>
    </ul>
    
    </div>
  )
}

export default Sidebar
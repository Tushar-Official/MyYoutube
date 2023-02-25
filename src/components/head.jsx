import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { togggleMenu } from '../Utils/aapSlice';

function Head() {
  const [searchquery,SetsearchQuery]=useState("")
  
  useEffect(()=>{
    console.log(searchquery)
  },[searchquery])
  const dispatch=useDispatch();
  const togggleMenuHandler=()=>{
    dispatch(togggleMenu());

  };
  
  return (
    <div className='grid grid-flow-col  p-5 shadow-lg'>
    <div className="flex col-span-1 mx-1">
    <img 
    onClick={()=>togggleMenuHandler()}
    className="h-7 cursor-pointer "
    src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png" alt="menu"/>
    <a href="/">
    <img 
    className="h-7 ml-1 cursor-pointer"
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png" alt="logo" />
    </a>
    </div>
    <div className="w-2/11 col-span-11 text-center flex justify-center">
    <input
    className="border h-8 px-2 border-gray-200 bg-gray-100 w-1/3 rounded-l-full" 
    type="text" 
    value={searchquery}
    onChange={(e)=>SetsearchQuery(e.target.value)}
    />
    <button className="rounded-r-full border-gray-200 border h-8 bg-gray-100 w-16">🔍</button>
    </div>
    <div className="col-span-1">
    <img alt="" 
    className="h-7"
    src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"/>
    </div>
    
    </div>
  )
  }

export default Head
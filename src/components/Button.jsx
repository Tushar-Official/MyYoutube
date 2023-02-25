import React from 'react'

function Button({name}) {
  return (
    <div>
    <button className='bg-gray-200 font-semibold py-3 px-3 m-2 rounded-lg hover:bg-gray-300 '>{name}</button>
    </div>
  )
}

export default Button
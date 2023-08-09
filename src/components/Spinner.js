import React from 'react'
import "./Spinner.css"

export const Spinner = () => {
  return (
    <div className='flex flex-col items-center space-y-6'>
      <div className='custom-loader'></div>
      <p>Loading...</p>
    </div>
  )
}

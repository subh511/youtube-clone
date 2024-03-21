import React from 'react'
import Searchbar from './Searchbar'

export default function() {
  return (
    <div className='flex justify-between p-8'>
        <div className='font-semibold text-2xl inline-flex items-center'>
            YouTube
        </div>
        <div>
            <Searchbar/>
        </div>
        <div className='text-md inline-flex items-center'>
            Sign In
        </div>
    </div>
  )
}

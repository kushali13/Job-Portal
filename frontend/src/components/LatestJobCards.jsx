import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = () => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
            <h1 className='font-medium text-lg'>Company Name</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-600'>Job profile that you work in it</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 bg-white hover:bg-white font-bold'>12 Positions</Badge>
            <Badge className='text-[#F83002] bg-white hover:bg-white font-bold'>Part Time</Badge>
            <Badge className='text-[#7209b7] bg-white hover:bg-white font-bold'>24LPA</Badge>
        </div>

    </div>
  )
}

export default LatestJobCards
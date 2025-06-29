import React from 'react'
import { Badge } from './ui/badge'

const LatestJobCards = ({job}) => {
  return (
    <div className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
        <div>
            <h1 className='font-medium text-lg'>{job?.company?.name}</h1>
            <p className='text-sm text-gray-500'>India</p>
        </div>
        <div>
            <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
            <p className='text-sm text-gray-600'>{job?.description}</p>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Badge className='text-blue-700 bg-white hover:bg-white font-bold'>{job?.positions} Positions</Badge>
            <Badge className='text-[#F83002] bg-white hover:bg-white font-bold'>{job?.jobType}</Badge>
            <Badge className='text-[#7209b7] bg-white hover:bg-white font-bold'>{job?.salary}LPA</Badge>
        </div>

    </div>
  )
}

export default LatestJobCards
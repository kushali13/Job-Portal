import React from 'react'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'

const LatestJobCards = ({job}) => {
    const navigate = useNavigate();
    return (
        <div
            onClick={()=> navigate(`/description/${job._id}`)}
            className='p-6 rounded-xl shadow-lg bg-gradient-to-br from-white to-blue-50 border border-gray-200 cursor-pointer transition-transform hover:scale-105 hover:shadow-2xl duration-200'
        >
            <div className='flex items-center justify-between mb-2'>
                <h1 className='font-semibold text-lg text-[#7209b7]'>{job?.company?.name}</h1>
                <span className='text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded'>{job?.location}</span>
            </div>
            <div>
                <h1 className='font-bold text-xl my-2 text-gray-800'>{job?.title}</h1>
                <p className='text-sm text-gray-600 line-clamp-2'>{job?.description}</p>
            </div>
            <div className='flex flex-wrap items-center gap-2 mt-4'>
                <Badge className='text-blue-700 font-bold bg-blue-50 border border-blue-200'>{job?.position} Positions</Badge>
                <Badge className='text-[#F83002] font-bold bg-red-50 border border-red-200'>{job?.jobType}</Badge>
                <Badge className='text-[#7209b7] font-bold bg-purple-50 border border-purple-200'>{job?.salary} LPA</Badge>
            </div>
        </div>
    )
}

export default LatestJobCards
import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { useNavigate } from 'react-router-dom'
import { mongo } from 'globals'

const BACKEND_URL = "http://localhost:8000";
const getLogoUrl = (logoPath) => {
  if (!logoPath) return undefined;
  if (logoPath.startsWith('/uploads/')) {
    return BACKEND_URL + logoPath;
  }
  return logoPath;
};

const Job = ({job}) => {
    const navigate=useNavigate();
    //const jobId="abcdefgh";
    const daysAgoFunction=(mongodbTime)=>{
        const createdAt=new Date(mongodbTime);
        const currentTime=new Date();
        const timeDiff=currentTime-createdAt;
        return Math.floor(timeDiff/(1000*24*60*60));
    }
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>{daysAgoFunction(job?.createdAt)== 0 ? "Today" : `${daysAgoFunction(job?.createdAt)}days ago`}</p>
                <Button variant="outline" className='rounded-full' size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className='bg-white hover:bg-white p-6' variant="outline" size="icon">
                    <Avatar >
                        <AvatarImage src={getLogoUrl(job?.company?.logo)} />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium tect-lg'>{job?.company?.name}</h1>
                    <p className='text-sm text-gray-500'> India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>{job?.title}</h1>
                <p className='text-sm text-gray-600'>{job?.description}</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 bg-white hover:bg-white font-bold'>{job?.positions}  Positions</Badge>
                <Badge className='text-[#F83002] bg-white hover:bg-white font-bold'>{job?.jobType}</Badge>
                <Badge className='text-[#7209b7] bg-white hover:bg-white font-bold'>{job?.salary}LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button onClick={()=>navigate(`/description/${job?._id}`)}variant="outline">Details</Button>
                <Button className='bg-[#7209b7]'>Save for Later</Button>
            </div>
        </div>
    )
}

export default Job
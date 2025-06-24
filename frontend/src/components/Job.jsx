import React from 'react'
import { Button } from './ui/button'
import { Bookmark } from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'

const Job = () => {
    return (
        <div className='p-5 rounded-md shadow-xl bg-white border-gray-100'>
            <div className='flex items-center justify-between'>
                <p className='text-sm text-gray-500'>2 days ago</p>
                <Button variant="outline" className='rounded-full' size="icon"><Bookmark /></Button>
            </div>
            <div className='flex items-center gap-2 my-2'>
                <Button className='bg-white hover:bg-white p-6' variant="outline" size="icon">
                    <Avatar >
                        <AvatarImage src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className='font-medium tect-lg'>Compnay Name</h1>
                    <p className='text-sm text-gray-500'> India</p>
                </div>
            </div>
            <div>
                <h1 className='font-bold text-lg my-2'>Title</h1>
                <p className='text-sm text-gray-600'>Description</p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <Badge className='text-blue-700 bg-white hover:bg-white font-bold'>12 Positions</Badge>
                <Badge className='text-[#F83002] bg-white hover:bg-white font-bold'>Part Time</Badge>
                <Badge className='text-[#7209b7] bg-white hover:bg-white font-bold'>24LPA</Badge>
            </div>
            <div className='flex items-center gap-4 mt-4'>
                <Button variant="outline">Details</Button>
                <Button className='bg-[#7209b7]'>Save for Later</Button>
            </div>
        </div>
    )
}

export default Job
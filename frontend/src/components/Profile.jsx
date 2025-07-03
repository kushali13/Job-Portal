import React, { useState } from 'react'
import Navbar from './shared/Navbar';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { Contact, Mail, Pen } from 'lucide-react';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import AppliedJobTable from './AppliedJobTable';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';
import useGetAppliedJobs from '@/hooks/useGetAppliedJobs';

const BACKEND_URL = "http://localhost:8000";
const getResumeUrl = (resumePath) => {
  if (!resumePath) return undefined;
  if (resumePath.startsWith('/uploads/')) {
    return BACKEND_URL + resumePath;
  }
  return resumePath;
};

const isResume=true;
//const skills = ["Python", "Django", "HTML", "CSS"];
const Profile = () => {
  useGetAppliedJobs();
    const [open, setOpen] = useState(false);
    const {user}=useSelector(store=>store.auth);

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className='h-24 w-24'>
              <AvatarImage src="https://static.vecteezy.com/system/resources/previews/047/656/219/non_2x/abstract-logo-design-for-any-corporate-brand-business-company-vector.jpg" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user?.fullname}</h1>
              <p>{user?.profile?.bio}</p>
            </div>
          </div>
          <Button onClick={() => setOpen(true)} className="text-right" variant="outline"><Pen /></Button>        </div>

        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>{user?.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Contact />
            <span>{user?.phoneNumber}</span>
          </div>
        </div>

        <div className='my-5'>
          <h1 className='mb-2 font-medium'>Skills</h1>
          <div className="flex flex-wrap gap-1">
            {
              user?.profile?.skills.length !== 0
                ? user?.profile?.skills.map((item, index) => (
                    <Badge key={index}>{item}</Badge>
                
                ))
                : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
            <Label className='text-md font-bold'>Resume</Label>
            {
                isResume? <a target="_blank" href={`${getResumeUrl(user.profile.resume)}#toolbar=0`}  rel="noopener noreferrer" className='text-blue-500 w-full hover:underline cursor-pointer'>{user?.profile?.resumeOriginalName}</a>:<span>NA</span>
            }
        </div>
        
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
            <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>
            <AppliedJobTable/>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  )
}

export default Profile;

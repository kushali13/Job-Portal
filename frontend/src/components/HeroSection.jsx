import React, { useState } from 'react'
import { Button } from './ui/button'
import { Search } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = () => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative w-full min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f3e8ff] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#6A38C2" fillOpacity="0.08" d="M0,160L80,170.7C160,181,320,203,480,197.3C640,192,800,160,960,133.3C1120,107,1280,85,1360,74.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
                </svg>
            </div>
            <div className='flex flex-col gap-7 my-16 z-10 items-center w-full'>
                <span className='mx-auto px-6 py-2 rounded-full bg-gradient-to-r from-[#6A38C2] to-[#F83002] text-white font-semibold shadow-lg tracking-wide text-base'>No. 1 Job Hunt Website</span>
                <h1 className='text-5xl md:text-6xl font-extrabold leading-tight text-gray-900 drop-shadow-lg'>Search, Apply & <br /> Get Your <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#6A38C2] to-[#F83002]'>Dream Jobs</span></h1>
                <p className='text-lg text-gray-600 max-w-2xl mx-auto'>Find your next opportunity from thousands of jobs. Fast, easy, and tailored for you.</p>
                <div className='flex w-full max-w-xl shadow-xl border border-gray-200 pl-3 rounded-full items-center gap-4 bg-white/80 backdrop-blur-md mx-auto'>
                    <input
                        type="text"
                        placeholder='Find your dream jobs'
                        onChange={(e) => setQuery(e.target.value)}
                        className='outline-none border-none w-full bg-transparent text-lg px-2 py-3 rounded-l-full'
                    />
                    <Button onClick={searchJobHandler} className="rounded-r-full bg-gradient-to-r from-[#6A38C2] to-[#F83002] px-6 py-3 text-lg font-semibold text-white hover:from-[#5b30a6] hover:to-[#d72600] transition-all duration-200 flex items-center justify-center h-[48px] min-w-[48px]">
                        <Search className='h-6 w-6' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default HeroSection
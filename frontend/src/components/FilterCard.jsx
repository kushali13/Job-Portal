import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'

const filtedData=[
    {
        filterType:"Location",
        array:["Delhi NCR","Banglore","Pune","Ahmedabad"]
    },
    {
        filterType:"Industry",
        array:["Frontend Developer","Backend Developer","FullStack Developer"]
    },
    {
        filterType:"Salary",
        array:["0-40k","42k-1lakh","1lakh-5lakh"]
    },
]
const FilterCard = () => {
  return (
    <div className='w-full bg-white p-3 rounded-md' >
        <h1 className='font-bold text-lg'>Filter Jobs</h1>
        <hr className='mt-3'/>
        <RadioGroup>
            {
                filtedData.map((data,index)=>(
                    <div>
                        <h1 className='font-bold text-lg'>{data.filterType}</h1>
                        {
                            data.array.map((item,index)=>{
                                return (
                                    <div className='flex items-center space-x-2 my-2'>
                                        <RadioGroupItem value={item}/>
                                        <Label>{item}</Label>

                                    </div>
                                )
                            })
                        }
                    </div>
                )
                )
            }
        </RadioGroup>

    </div>
  )
}

export default FilterCard
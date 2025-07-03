import React, { useEffect, useState } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { useDispatch } from 'react-redux'
import { setSearchedQuery } from '@/redux/jobSlice'
import axios from 'axios'

const FilterCard = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const [locations, setLocations] = useState([]);
    const [roles, setRoles] = useState([]);
    const [salaries, setSalaries] = useState([]);
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(() => {
        dispatch(setSearchedQuery(selectedValue));
    }, [selectedValue]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/v1/company/locations', { withCredentials: true })
            .then(res => {
                if (res.data.success) setLocations(res.data.locations);
            });
        axios.get('http://localhost:8000/api/v1/job/roles', { withCredentials: true })
            .then(res => {
                if (res.data.success) setRoles(res.data.roles);
            });
        axios.get('http://localhost:8000/api/v1/job/salaries', { withCredentials: true })
            .then(res => {
                if (res.data.success) setSalaries(res.data.salaries);
            });
    }, []);

    return (
        <div className='w-full bg-white p-3 rounded-md'>
            <h1 className='font-bold text-lg'>Filter Jobs</h1>
            <hr className='mt-3' />
            <RadioGroup value={selectedValue} onValueChange={changeHandler}>
                <div>
                    <h1 className='font-bold text-lg'>Location</h1>
                    {
                        locations.map((item, idx) => {
                            const itemId = `location-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className='font-bold text-lg'>Role</h1>
                    {
                        roles.map((item, idx) => {
                            const itemId = `role-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
                <div>
                    <h1 className='font-bold text-lg'>Salary</h1>
                    {
                        salaries.map((item, idx) => {
                            const itemId = `salary-${idx}`
                            return (
                                <div className='flex items-center space-x-2 my-2' key={itemId}>
                                    <RadioGroupItem value={item} id={itemId} />
                                    <Label htmlFor={itemId}>{item}</Label>
                                </div>
                            )
                        })
                    }
                </div>
            </RadioGroup>
        </div>
    )
}

export default FilterCard
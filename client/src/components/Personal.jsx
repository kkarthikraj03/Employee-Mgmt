import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Personal = () => {
    const [perData, SetPerData] = useState({
        id: '',
        email: '',
        college: '',
        gradYear: '',
        phno: '',
        address: '',
        dob: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetPerData({
            ...perData,
            [name]: value
        });
    }
    const handlePerAdd = async (e) => {
        try {
            e.preventDefault();
            // console.log(perData);
            const response = await fetch('http://localhost:3001/personal', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(perData)
            });
            SetPerData({
                id: '',
                email: '',
                college: '',
                gradYear: '',
                phno: '',
                address: '',
                dob: '',
            })
        } catch (error) {
            console.error("Error: ", error);
        }

    }
    return (
        <div className='h-min flex justify-center items-center flex-col text-center my-20'>
            <div className='h-min w-1/3 bg-blue-100'>
                <h2 className='text-3xl my-4 font-bold'>Personal Details</h2>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="id">ID</label>
                    <input className='p-1 flex-1' type="text" name='id' id='id' value={perData.id} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="email">Email</label>
                    <input className='p-1 flex-1' type="text" name='email' id='email' value={perData.email} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="dob">DOB</label>
                    <input className='p-1 flex-1' type="date" name='dob' id='dob' value={perData.dob} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="college">College</label>
                    <input className='p-1 flex-1' type="text" name='college' id='college' value={perData.college} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="gradYear">Graduation Year</label>
                    <select className='p-1 flex-1' name='gradYear' id='gradYear' value={perData.gradYear} onChange={handleChange}>
                        <option value=''>Select...</option>
                        <option value='2019'>2019</option>
                        <option value='2020'>2020</option>
                        <option value='2021'>2021</option>
                        <option value='2022'>2022</option>
                        <option value='2023'>2023</option>
                    </select>
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="phno">Phone Number</label>
                    <input className='p-1 flex-1' type="number" name='phno' id='phno' value={perData.phno} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="address">Address</label>
                    <input className='p-1 flex-1' type="text" name='address' id='address' value={perData.address} onChange={handleChange} />
                </div>
                <button className='my-2 border-2 border-neutral-950 bg-white p-1 rounded-md' onClick={handlePerAdd}>Submit</button>
            </div>
            <div className='my-10 text-xl'>
                <Link to='/view'>
                    <button className='border-neutral-950 rounded-md bg-blue-100 p-2'>View Table</button>
                </Link>
            </div>
        </div>
    )
}

export default Personal

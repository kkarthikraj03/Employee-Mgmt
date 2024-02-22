import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
    const [empData, SetEmpData] = useState({
        name: '',
        id: '',
        dept: '',
        dob: '',
        gender: '',
        designation: '',
        salary: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        SetEmpData({
            ...empData,
            [name]: value
        });
    }
    const handleAdd = async (e) => {
        try {
            e.preventDefault();
            // console.log(empData);
            if (empData.name.length > 30) {
                alert('Name Should be within 30 characters');
                return;
            }
            if (empData.salary.length > 8) {
                alert('Salary Should be within 8 digits');
                return;
            }
            if (!empData.name || !empData.id || !empData.dept || !empData.doj || !empData.gender || !empData.designation || !empData.salary) {
                alert('Please Fill in all the fields!');
                return;
            }
            const response = await fetch('http://localhost:3001/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(empData)
            });
            const data = await response.json();
            console.log(data.message);
            SetEmpData({
                name: '',
                id: '',
                dept: '',
                doj: '',
                gender: '',
                designation: '',
                salary: ''
            })
        } catch (error) {
            console.error("Error: ", error);
        }

    }
    return (
        <div className='h-min flex justify-center items-center flex-col text-center my-20'>
            <div className='h-min w-1/3 bg-blue-100'>
                <h2 className='text-3xl my-4 font-bold'>Employee Form</h2>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="name">Name</label>
                    <input className='p-1 flex-1' type="text" name='name' id='name' value={empData.name} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="id">ID</label>
                    <input className='p-1 flex-1' type="text" name='id' id='id' value={empData.id} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="dept">Department</label>
                    <select className='p-1 flex-1' name='dept' id='dept' value={empData.dept} onChange={handleChange}>
                        <option value=''>Select...</option>
                        <option value='Marketing'>Marketing</option>
                        <option value='Development'>Development</option>
                        <option value='Human Resources'>Human Resources</option>
                        <option value='Deployment'>Deployment</option>
                    </select>
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="doj">Joining Date</label>
                    <input className='p-1 flex-1' type="date" name='doj' id='doj' value={empData.doj} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="gender">Gender</label>
                    <input className='mx-3' type="radio" name='gender' value='Male' checked={empData.gender === 'Male'} onChange={handleChange} />Male
                    <input className='mx-3' type='radio' name='gender' value='Female' checked={empData.gender === 'Female'} onChange={handleChange} />Female
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="designation">Designation</label>
                    <input className='p-1 flex-1' type="text" name='designation' id='designation' value={empData.designation} onChange={handleChange} />
                </div>
                <div className='m-5 text-xl flex items-center'>
                    <label className='w-1/3' htmlFor="salary">Salary</label>
                    <input className='p-1 flex-1' type="number" name='salary' id='salary' value={empData.salary} onChange={handleChange} />
                </div>
                <button className='my-2 border-2 border-neutral-950 bg-white p-1 rounded-md' onClick={handleAdd}>
                    <Link to='/personal'>Goto Page 2</Link>
                </button>
            </div>
            <div className='my-10 text-xl'>
                <Link to='/view'>
                    <button className='border-neutral-950 rounded-md bg-blue-100 p-2'>View Table</button>
                </Link>
            </div>
        </div>
    )
}

export default Form

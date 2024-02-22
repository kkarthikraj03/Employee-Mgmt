import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Details = () => {
    const [tabData, SetTabData] = useState([]);
    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:3001/fetch');
            const data = await response.json();
            SetTabData(data);
        } catch (error) {
            console.error("Error: ", error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    return (
        <div>
            <h2 className='text-center text-2xl font-bold my-10'>Employee Details</h2>
            <div className='flex items-center justify-center'>
                <table className='border-4 text-center w-full bg-blue-100'>
                    <thead>
                        <tr>
                            <th className='p-4'>ID</th>
                            <th>Name</th>
                            <th>Department</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>DOJ</th>
                            <th>College</th>
                            <th>Grad_Year</th>
                            <th>Phone_No</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tabData.map(employee => (
                            <tr key={employee.id}>
                                <td className='p-4'>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{formatDate(employee.dob)}</td>
                                <td>{employee.gender}</td>
                                <td>{employee.designation}</td>
                                <td>{employee.salary}</td>
                                <td>{formatDate(employee.doj)}</td>
                                <td>{employee.college}</td>
                                <td>{employee.grad_year}</td>
                                <td>{employee.phone_no}</td>
                                <td>{employee.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className='text-center text-xl my-10'>
                <Link to='/'>
                    <button className='border-neutral-950 rounded-md bg-blue-100 p-2'>Back to Form</button>
                </Link>
            </div>
        </div>
    )
}

export default Details

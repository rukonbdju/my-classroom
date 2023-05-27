import React, { useEffect, useState } from 'react';

const ClassroomInfo = ({id}) => {
    const [classroom,setClassroom]=useState({})
    useEffect(()=>{
        const dataFetching=async(id)=>{
            const response=await fetch(`http://localhost:3000/classrooms/${id}`)
            const result=await response.json();
            setClassroom(result)
        }
        dataFetching(id)
    },[id])
    return (
        <div className='bg-slate-300 my-4 p-4 rounded-md cursor-pointer shadow-md hover:bg-blue-700 hover:text-slate-50'>
            <h4 className="text-md font-bold uppercase">{classroom.classroomName}</h4>
            <h4 className="text-md uppercase">{classroom.className}</h4>
        </div>
    );
};

export default ClassroomInfo;
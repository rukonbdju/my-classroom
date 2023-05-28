import React from 'react';

const Student = ({student}) => {
    return (
        <div className='flex flex-row items-center gap-3 mb-6'>
            <div className='w-12 h-12 p-4 rounded-full flex items-center justify-center  bg-blue-700'>
                <span className='inline-block text-slate-50 font-bold'>{student.name.slice(0,1)}</span>
            </div>
            <div>
            <p className="text-md font-bold">{student.name}</p>
            <p className="text-sm">{student.email}</p>
            </div>
        </div>
    );
};

export default Student;
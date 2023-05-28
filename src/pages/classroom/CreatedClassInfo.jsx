import React from 'react';

const CreatedClassInfo = ({classroom}) => {
    return (
        <div className='bg-slate-200 relative p-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-300'>
            <h1 className='text-2xl mb-2'>{classroom.name}</h1>
            <p className='font-bold uppercase'>{classroom._class}</p>
            <p className='font-bold uppercase'>{classroom.creator}</p>
        </div>
    );
};

export default CreatedClassInfo;
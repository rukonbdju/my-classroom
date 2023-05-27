import React from 'react';

const CreatedClass = ({classInfo}) => {
    return (
        <div className='bg-slate-300 my-4 p-4 rounded-md cursor-pointer shadow-md hover:bg-blue-700 hover:text-slate-50'>
            <h4 className="text-md font-bold uppercase">{classInfo.classroomName}</h4>
            <h4 className="text-md uppercase">{classInfo.className}</h4>
        </div>
    );
};

export default CreatedClass;
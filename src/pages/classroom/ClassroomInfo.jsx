import React, { useEffect, useState } from 'react';

const ClassroomInfo = ({classroom}) => {
    return (
        <div className='bg-slate-300 my-4 p-4 rounded-md cursor-pointer shadow-md hover:bg-blue-700 hover:text-slate-50'>
            <h4 className="text-md font-bold uppercase">{classroom.name}</h4>
            <h4 className="text-md uppercase">{classroom._class}</h4>
        </div>
    );
};

export default ClassroomInfo;
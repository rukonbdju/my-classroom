import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EnrolledClass = ({ id }) => {
  const [classroom, setClassroom] = useState({});
  useEffect(() => {
    const getClassroom = async () => {
      try {
        const response = await fetch(`http://localhost:3000/classrooms/${id}`);
        const result = await response.json();
        setClassroom(result);
      } catch {
        (err) => console.log(err);
      }
    };
    getClassroom();
  }, [id]);
  return (
    <div className='bg-slate-300 my-4 p-4 rounded-md cursor-pointer shadow-md hover:bg-blue-700 hover:text-slate-50'>
            <Link to={`/classroom/${id}`}>
            <h4 className="text-md font-bold uppercase hover:underline">{classroom?.name}</h4>
            </Link>
            <h4 className="text-md uppercase">{classroom?._class}</h4>
        </div>
  );
};

export default EnrolledClass;

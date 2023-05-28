import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const EnrolledClassInfo = ({ id }) => {
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
  console.log(classroom);
  return (
    <div className="bg-slate-200 p-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-300">
      <Link to={`classroom/${classroom._id}`}><h1 className="text-2xl mb-2">{classroom.name}</h1></Link>
      <p className="font-bold uppercase">{classroom._class}</p>
      <p className="font-bold uppercase">{classroom.creator}</p>
    </div>
  );
};

export default EnrolledClassInfo;

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const JoinClassroom = () => {
  const navigate=useNavigate()
  const authInfo=useContext(AuthContext)
  const{user}=authInfo;
  const [classrooms, setClassrooms] = useState([]);
  const [classroomId, setClassroomId] = useState("");
  const [classroomCode, setClassroomCode] = useState("");
  const [isJoined, setIsJoined] = useState(false);


  useEffect(() => {
    const dataFetching = async () => {
      try {
        const response = await fetch("http://localhost:3000/classrooms");
        const result = await response.json();
        setClassrooms(result);
      } catch {
        (error) => console.log(error);
      }
    };
    dataFetching();
  }, []);

  const handleClassroomId = (e) => {
    const classroomID = e.target.value;
    setClassroomId(classroomID);
    const selectedClassroomId = classrooms.find(
      (classroom) => classroomID === classroom._id
    );
    setClassroomCode(selectedClassroomId.code)
  };

  const handleJoinClassroom = async (e) => {
    e.preventDefault();
    try {
      const data={id:classroomId}
      const res=await fetch(`http://localhost:3000/users/${user.uid}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(data)
      })
      const result=await res.json();
      console.log(result)
      if(result.acknowledged){
        const uid=user.uid;
        const name=user.displayName;
        const email=user.email;
        const userInfo={uid,name,email}
        console.log(userInfo)
        const res=await fetch(`http://localhost:3000/classrooms/${classroomId}`,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(userInfo)
      })
      const updateRes=await res.json()
      console.log(updateRes)
        e.target.reset();
        setIsJoined(true)
        navigate('/')
      }
    } catch {
      (error) => console.log(error);
    }
  };
  return (
    <div className="max-w-xl mx-auto pt-28 rounded-lg bg-slate-100">
      <h1 className="text-5xl mb-6 text-center">Join Classroom!</h1>
      <form
        onSubmit={handleJoinClassroom}
        className="flex flex-col gap-6 items-center justify-center max-w-xl mx-auto"
      >
        <div className="w-full">
            <span className="text-orange-500 mb-2 inline-block">You have access all the class ID and code only for developing purpose. In real life ID and code is provided by your teacher !!!</span>
          <select
            onChange={handleClassroomId}
            required
            className="border-2 rounded-lg p-2 w-full"
            name="className"
            id="className"
          >
            <option value="">Select a classroom</option>
            {classrooms?.map((classroom) => (
              <option key={classroom._id} value={classroom._id}>
                {classroom._id}
              </option>
            ))}
          </select>
          {classroomCode && (
            <span className="text-orange-500">
              Your class code is {classroomCode}
            </span>
          )}
        </div>
        <input
          className="p-2 border-2 rounded-lg w-full"
          placeholder="Enter class code"
          type="text"
          name="classCode"
          id="code"
        />
        <button
          className="w-full font-bold rounded-lg shadow-xl mb-4
             bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3"
          type="submit"
        >
          Join Classroom
        </button>
      </form>
      <span>if you are a teacher create classroom <Link className="text-blue-700 hover:underline" to={'/createClassroom'}>here</Link></span>
    </div>
  );
};

export default JoinClassroom;

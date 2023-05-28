import React, { useContext, useEffect, useState } from "react";
import math from "../../assets/maths.png";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import CreatedClassInfo from "../classroom/CreatedClassInfo";
import EnrolledClassInfo from "../classroom/EnrolledClassInfo";
const Home = () => {
  const authInfo = useContext(AuthContext);
  const { user } = authInfo;
  const [createdClassrooms, setCreatedClassrooms] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  //fetching function
  const getCreatedClassroom = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCreatedClassrooms(result);
    } catch {
      (error) => console.log(error);
    }
  };
  const getCurrentUser = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCurrentUser(result);
    } catch {
      (error) => console.log(error);
    }
  };

  useEffect(() => {
    if (user.uid) {
      const url = `http://localhost:3000/classrooms/${user.uid}`;
      const userUrl = `http://localhost:3000/users/${user.uid}`;
      getCreatedClassroom(url);
      getCurrentUser(userUrl);
    }
  }, [user]);
  return (
    <div className="pt-24 flex flex-col items-center justify-center">
      <div className="w-5/6 text-center mb-12">
        <h1 className="text-2xl md:text-4xl lg:text-5xl capitalize font-bold ">
          Welcome {user?.displayName} to your{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            classroom
          </span>
        </h1>
        <p className="mt-4">
          Join your classroom and see your class materials, schedule and so on
          or create a new classroom.
        </p>
      </div>
      <div className="w-5/6">
        <h3 className="text-2xl pb-2 border-b border-slate-700">
          Created Classroom
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-6 my-6">
          {createdClassrooms?.map((classroom) => (
            <CreatedClassInfo
              key={classroom._id}
              classroom={classroom}
            ></CreatedClassInfo>
          ))}
          <Link to={'/createClassroom'}>
          <div className="bg-slate-200 p-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-300 text-center">
            <span className="text-5xl font-bold">+</span>
            <p className="font-bold">Create New Classroom</p>
          </div></Link>
        </div>
      </div>
      <div className="w-5/6">
        <h3 className="text-2xl pb-2 border-b border-slate-700">
          Enrolled Classroom
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-6 my-6">
          {currentUser?.classroomList?.map((id) => (
            <EnrolledClassInfo key={id} id={id}></EnrolledClassInfo>
          ))}
          <Link to={'/joinClassroom'}>
          <div className="bg-slate-200 p-6 rounded-lg shadow-md cursor-pointer hover:bg-blue-300 text-center">
            <span className="text-5xl font-bold">+</span>
            <p className="font-bold">Join New Classroom</p>
          </div></Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

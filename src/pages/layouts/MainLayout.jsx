import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import ClassroomInfo from "../classroom/ClassroomInfo";
import CreatedClass from "../classroom/CreatedClass";
const MainLayout = () => {
  const { user, loading } = useContext(AuthContext);
  const [createdClassrooms, setCreatedClassrooms] = useState();
  const [joinedClassrooms, setJoinedClassrooms] = useState([]);
  console.log(loading);
  useEffect(() => {
    const dataFetching = async (url, option) => {
      try {
        const response = await fetch(url);
        const result = await response.json();
        if (option == "user") {
          setJoinedClassrooms(result.joinedClassroomList);
        }
        if (option == "classroom") {
          setCreatedClassrooms(result);
        }
      } catch {
        (error) => console.log(error);
      }
    };
    if (user.email) {
      const userUrl = `http://localhost:3000/users/${user.email}`;
      const classroomUrl = `http://localhost:3000/classrooms/${user.email}`;
      dataFetching(userUrl, "user");
      dataFetching(classroomUrl, "classroom");
    }
  }, [user]);
  console.log(createdClassrooms)
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      <div className="flex justify-between relative">
        <aside className="pt-16 sticky top-0 w-80 h-screen  bg-slate-100">
          <div className="h-full p-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Joined Classes</h1>
            {joinedClassrooms?.map((id) => (
              <ClassroomInfo key={id} id={id}></ClassroomInfo>
            ))}
          </div>
        </aside>
        <main className="pt-16 w-1/2 bg-slate-100">
          <div className="p-6 flex  justify-center">
            <h1 className="text-5xl bg-white">This is main section</h1>
          </div>
        </main>
        <aside className="pt-16 sticky top-0 w-80 h-screen  bg-slate-100">
          <div className="h-full p-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Created Classes</h1>
            {createdClassrooms?.map((classInfo)=><CreatedClass key={classInfo._id} classInfo={classInfo}></CreatedClass>)}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;

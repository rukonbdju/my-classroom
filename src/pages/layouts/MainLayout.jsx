import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { AuthContext } from "../contexts/AuthProvider";
import ClassroomInfo from "../classroom/ClassroomInfo";
import PostModal from "../modal/PostModal";
import EnrolledClass from "../classroom/EnrolledClass";
import { useParams } from "react-router-dom";
import Student from "../classroom/Student";
import Post from "../classroom/Post";
const MainLayout = () => {
  const {id}=useParams()
  const { user, loading } = useContext(AuthContext);
  const [createdClassrooms, setCreatedClassrooms] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [modal, setModal] = useState(false);
  const [currentClassroom,setCurrentClassroom]=useState({})
  const [posts,setPosts]=useState([])
  console.log(posts)
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

  
  const getCurrentClassroom=async(url)=>{
    try {
      const response = await fetch(url);
      const result = await response.json();
      setCurrentClassroom(result);
    } catch {
      (error) => console.log(error);
    }
  }

  const getPosts=async(url)=>{
    try {
      const response = await fetch(url);
      const result = await response.json();
      setPosts(result);
    } catch {
      (error) => console.log(error);
    }
  }
  useEffect(() => {
    if (user.uid) {
      const classroomUrl = `http://localhost:3000/classrooms/${user.uid}`;
      const currentClassroomUrl = `http://localhost:3000/classrooms/${id}`;
      const userUrl = `http://localhost:3000/users/${user.uid}`;
      const postsUrl='http://localhost:3000/posts'
      getCreatedClassroom(classroomUrl);
      getCurrentUser(userUrl);
      getCurrentClassroom(currentClassroomUrl);
      getPosts(postsUrl)
    }
  }, [user,id]);
  return (
    <div className="bg-slate-100">
      <Navbar></Navbar>
      {modal && (
        <div className="absolute h-screen w-screen mx-auto flex items-center justify-center bg-slate-500 bg-opacity-50 z-50">
          <PostModal id={currentClassroom._id} setPosts={setPosts} setModal={setModal}></PostModal>
        </div>
      )}
      <div className="flex justify-between relative">
        <aside className="pt-16 sticky top-0 w-80 h-screen  bg-slate-200">
          <div className="h-full p-6 overflow-y-auto">
            <div>
              <h1 className="text-xl font-bold">Created Class</h1>
              {createdClassrooms?.map((classroom) => (
                <ClassroomInfo
                  key={classroom._id}
                  classroom={classroom}
                ></ClassroomInfo>
              ))}
            </div>
            <div
              style={{ height: "1px" }}
              className="w-full bg-black my-6"
            ></div>
            <div>
              <h1 className="text-xl font-bold">Enrolled Class</h1>
              {currentUser?.classroomList?.map((id) => (
                <EnrolledClass key={id} id={id}></EnrolledClass>
              ))}
            </div>
          </div>
        </aside>
        <main className="pt-16 w-1/2 bg-slate-100">
          <div className="bg-blue-300 mt-4 rounded-lg">
            <div className="p-4">
              <h1 className="text-4xl font-bold">{currentClassroom.name}</h1>
              <p className="mb-6 uppercase">{currentClassroom._class}</p>
              <p className="font-bold">{currentClassroom.creator}</p>
              <p className="font-bold">{currentClassroom.institute}</p>

            </div>
          </div>
          <div className="p-6 flex gap-2  justify-center">
            <div>
              <div className="flex items-center justify-center bg-blue-700 text-white rounded-full border-2 w-12 h-12">
                <span className="font-bold">R</span>
              </div>
            </div>
            <div
              onClick={() => {
                setModal(true);
              }}
              className="border-2 w-full rounded-full flex items-center cursor-pointer hover:bg-slate-300"
            >
              <p className="px-4">Let's start discuss</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            {
              posts?.map((post)=><Post key={post._id} post={post}></Post>)
            }
          </div>
        </main>
        <aside className="pt-16 sticky top-0 w-80 h-screen  bg-slate-200">
          <div className="h-full p-6 overflow-y-auto">
            <h1 className="text-xl font-bold">Students</h1>
            <div className="my-6">
              {currentClassroom?.students?.map((student)=><Student key={student.uid} student={student}></Student>)}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default MainLayout;

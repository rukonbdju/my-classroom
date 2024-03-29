import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const CreateClassroom = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const { user } = userInfo;
  const [createClass, setCreateClass] = useState({});
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const classes = [
    "class one",
    "class two",
    "class three",
    "class four",
    "class five",
    "class six",
    "class seven",
    "class eight",
    "class nine",
    "class ten",
    "class eleven",
    "class twelve",
    "honours first year",
    "honours second year",
    "honours third year",
    "honours final year",
    "masters",
    "others",
  ];
  const handleClassroomData = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const institute = e.target.institute.value;
    const _class = e.target.class.value;
    const email = user.email;
    const creator = user.displayName;
    const uid = user.uid;
    const formData = { name, institute, _class, email, uid, creator };
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/classrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      setCreateClass(result);
      setModalActive(true);
      setLoading(false);
    } catch {
      (error) => console.error(error);
    }
  };

  const handleCloseModal = () => {
    setModalActive(false);
    navigate("/");
  };
  return (
    <div className="max-w-xl  mx-auto pt-28 rounded-lg bg-slate-100">
      <h1 className="text-5xl mb-12 text-center">Create a new Classroom!</h1>
      <form
        onSubmit={handleClassroomData}
        className="flex flex-col gap-6 items-center justify-center max-w-xl mx-auto"
      >
        <input
          className="p-2 border-2 rounded-lg w-full"
          placeholder="Enter classroom name"
          type="text"
          name="name"
          id="name"
        />
        <input
          className="p-2 border-2 rounded-lg w-full"
          placeholder="Enter school/college/university"
          type="text"
          name="institute"
          id="school"
        />
        <select
          required
          className="border-2 rounded-lg p-2 w-full"
          name="class"
          id="class"
        >
          <option value="">Select an class</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        <button
          className="w-full font-bold rounded-lg shadow-xl mb-4
             bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3"
          type="submit"
        >
          Create Classroom
        </button>
      </form>
      <span>
        if you are a student join classroom{" "}
        <Link className="text-blue-700 hover:underline" to={"/joinClassroom"}>
          here
        </Link>
      </span>
      {modalActive && (
        <div className="absolute h-screen w-screen bg-slate-700 bg-opacity-50 top-0 left-0 flex items-center justify-center">
          <div className="bg-slate-100 rounded-xl p-6 ">
            <div>
              <p className="text-right mb-2">
                <span
                  onClick={() => handleCloseModal()}
                  className="p-2 bg-slate-500 rounded-xl text-slate-50 font-bold cursor-pointer hover:bg-slate-700"
                >
                  Close
                </span>
              </p>
              <h1 className="text-2xl">
                Your classroom is Successfully created!
              </h1>
              <div className="my-2">
                <p>
                  Your classroom ID is{" "}
                  <span className="text-blue-500 underline">
                    {createClass.insertedId}
                  </span>{" "}
                </p>
                <p>
                  Your classroom code is{" "}
                  <span className="text-blue-500 underline">
                    {createClass.classCode}
                  </span>{" "}
                </p>
              </div>
              <p className="bg-slate-400 p-2 rounded-md">Share with your students</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateClassroom;

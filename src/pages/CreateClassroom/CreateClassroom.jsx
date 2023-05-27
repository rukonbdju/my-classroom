import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { Link, useNavigate } from "react-router-dom";

const CreateClassroom = () => {
  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const { user } = userInfo;
  const [classroomCreationResult, setClassroomCreationResult] = useState({});
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
    const classroomName = e.target.classroomName.value;
    const school = e.target.school.value;
    const className = e.target.className.value;
    const userEmail = user.email;
    const classroomData = { classroomName, school, className, userEmail };
    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/classrooms", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(classroomData),
      });
      const result = await response.json();
      if (result.acknowledged) {
        console.log(result);
        setClassroomCreationResult(result);
        const data = { option: "create", id: result.insertedId };
        const res = await fetch(`http://localhost:3000/users/${user.email}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const result1 = await res.json();
        e.target.reset();
        console.log(result1);
      }
      setModalActive(true);
      setLoading(false);
    } catch {
      (error) => console.error(error);
    }
  };

  const handleCloseModal = () => {
    setModalActive(false);
    navigate("/classroom");
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
          name="classroomName"
          id="name"
        />
        <input
          className="p-2 border-2 rounded-lg w-full"
          placeholder="Enter school/college/university"
          type="text"
          name="school"
          id="school"
        />
        <select
          required
          className="border-2 rounded-lg p-2 w-full"
          name="className"
          id="className"
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
              <p>Your classroom ID is {classroomCreationResult.insertedId}</p>
              <p>Your classroom code is {classroomCreationResult.classCode}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateClassroom;

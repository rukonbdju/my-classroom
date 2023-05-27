import React, { useContext } from "react";
import math from "../../assets/maths.png";
import { AuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
const Home = () => {
  const authInfo = useContext(AuthContext);
  const { user} = authInfo;
  console.log(user);
  return (
      <div className="pt-24 flex flex-col items-center justify-center">
        <span className="mb-4">
          <img src={math} alt="" width={100} />
        </span>
        <div className=" shadow-md bg-gradient-to-r from-green-400/40 to-green-200/40 p-12 rounded-lg backdrop-blur-sm backdrop-opacity-50">
          <h1 className="text-5xl capitalize font-bold ">
            Welcome {user?.displayName} to your{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              classroom
            </span>
          </h1>
          <p className="mt-4">
            Join your classroom and see your class materials, schedule and so on
            or create a new classroom.
          </p>
          <div className="flex flex-row gap-3 items-center mt-10">
            <Link to={"/joinClassroom"}>
              <button className="font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3 ">
                Join your class
              </button>
            </Link>
            <span className="text-xl font-bold">or</span>
            <Link to={"/createClassroom"}>
              <button className="font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3 ">
                Create new classroom
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Home;

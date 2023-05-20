import React from "react";
import bg from "../../assets/grid-bg.png";
import math from "../../assets/maths.png";
const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="w-screen h-screen flex flex-col items-center justify-center"
    >
      <span className="mb-4">
        <img src={math} alt="" width={100} />
      </span>
      <div className=" shadow-md bg-gradient-to-r from-green-400/40 to-green-200/40 p-12 rounded-lg backdrop-blur-sm backdrop-opacity-50">
        <h1 className="text-5xl capitalize font-bold ">
          Welcome to your <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">classroom</span>
        </h1>
        <p className="mt-4">Join your classroom and see your class materials, schedule and so on or create a new classroom.</p>
        <div className="flex flex-row gap-3 items-center mt-10">
          <button className="font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3 ">
            Join your class
          </button>
          <span className="text-xl font-bold">or</span>
          <button className="font-bold rounded-lg shadow-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3 ">
            Create new classroom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;

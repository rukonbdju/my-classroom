import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Login = () => {
  const authInfo = useContext(AuthContext);
  const { signInWithEmail } = authInfo;
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      await signInWithEmail(email, password);
    } catch {
      (error) => console.log(error);
    }
  };
  return (
    <div className=" bg-slate-100">
      <div className="w-5/6 mx-auto">
      <form onSubmit={handleLogin} className="h-screen flex flex-col items-center justify-center max-w-lg mx-auto gap-4">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mb-12 font bold">Welcome Back!</h1>
        <input
          className="w-full p-2 border-2 rounded-lg"
          placeholder="Enter Email"
          type="email"
          name="email"
          id="email"
        />
        <input
          className="w-full p-2 border-2 rounded-lg"
          placeholder="Enter Password"
          type="password"
          name="password"
          id="password"
        />
        <button
        type="submit"
          className="w-full font-bold rounded-lg shadow-xl
             bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-2 md:py-3 lg:py-3"
        >
          Login
        </button>
        <div>
          <p>
            New user? Please register{" "}
            <Link
              to="/register"
              className="text-blue-600 font-bold hover:underline"
            >
              here
            </Link>
          </p>
        </div>
      </form>
      </div>
    </div>
  );
};

export default Login;

import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const authInfo=useContext(AuthContext)
    const{user,emailLogOut}=authInfo;
    return (
        <div className="shadow-md fixed top-0 z-50 bg-slate-50 w-full h-16">
        <div className="w-11/12 mx-auto flex flex-row items-center justify-between py-2">
          <h1 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            MyClassroom
          </h1>
          <div className="flex flex-row items-center gap-2">
            <Link to={'/classroom'} className='bold hover:text-blue-700'>Classroom</Link>
            <Link to={'/createClassroom'} className='bold hover:text-blue-700'>Create</Link>
            <Link to={'/joinClassroom'} className='bold hover:text-blue-700'>Join</Link>
            <h2 className="text-2xl">{user?.displayName}</h2>
            <div>
                {user?.uid && (
                  <button
                  onClick={()=>emailLogOut()}
                    className="w-full font-bold rounded-lg shadow-xl
             bg-gradient-to-r from-violet-500 to-fuchsia-500 text-slate-100 px-4 uppercase py-3"
                  >
                    Logout
                  </button>
                )}
              </div>
            <div className="flex flex-row items-center justify-center bg-blue-700 text-white rounded-full border-2 w-12 h-12">
              <span className="text-xl font-bold">
                {user?.displayName?.slice(0, 1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;
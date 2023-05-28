import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';
import MainLayout from '../layouts/MainLayout';
import { Navigate } from 'react-router-dom';

const MainRoute = () => {
    const authInfo=useContext(AuthContext)
    const {user,loading}=authInfo;
    console.log(loading)
    if(loading){return <p>loading...</p>}
    if(!user){
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            <MainLayout></MainLayout>
        </div>
    );
};

export default MainRoute;
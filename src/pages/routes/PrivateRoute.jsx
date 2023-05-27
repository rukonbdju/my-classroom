import React, { useContext } from 'react';
import { Navigate} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import HomeLayout from '../layouts/HomeLayout';

const PrivateRoute = () => {
    const authInfo=useContext(AuthContext)
    const {user,loading}=authInfo;
    console.log(loading)
    if(loading){return <p>loading...</p>}
    if(!user){
        return <Navigate to="/login"/>;
    }
    return (
        <div>
            <HomeLayout></HomeLayout>
        </div>
    );
};

export default PrivateRoute;
import React, { createContext } from 'react';
import useAuth from '../../utilities/useAuth';

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={useAuth()}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
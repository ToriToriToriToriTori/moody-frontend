import { AuthContext } from '../../context/auth-context'
import { useContext, useState } from 'react';
import {Navigate} from 'react-router-dom'

export const RequireAuth = ({children}) => {
    const { AuthStatus, userId } = useContext(AuthContext);

    if (!AuthStatus.AuthStatus){
       return <Navigate to='/auth'/> 
    }else{
        return children;
    }

}
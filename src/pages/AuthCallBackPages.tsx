import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useRef } from 'react'
import {useCreateUserMutation} from "../api/userApiSlice"
import {useCreateMyUser} from "../api/MyUserApi"

import { useNavigate } from 'react-router-dom';

const AuthCallBackPages = () => {
    const {user}=useAuth0()
    // const [createUser]=useCreateUserMutation()
    const {createUser}=useCreateMyUser()
   
    const navigate=useNavigate();
    const hasUserCreated=useRef(false)


    

    useEffect(()=>{
        if (user?.sub && user?.email && user.name&&!hasUserCreated.current) {
            createUser({ auth0Id: user.sub, email: user.email ,name:user.name});
            hasUserCreated.current = true;
          }
          navigate("/");
        
    },[createUser,navigate,user])
  return (
    <div>Loading...</div>
  )
}

export default AuthCallBackPages
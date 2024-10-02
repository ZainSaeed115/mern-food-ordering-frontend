import { User } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";

import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL=import.meta.env.VITE_API_BASE_URL;


export const useGetMyUser=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const GetCurrentUserRequest=async():Promise<User>=>{
        const accessToken= await getAccessTokenSilently()
        const response= await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"GET",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },
         
        })
        if(!response.ok){
            throw new Error("Failed to Fetch ")
        }
        return response.json()
    }
    const {data:getCurrentUser,isLoading,isSuccess,error}=useQuery("fetchCurrentUser",GetCurrentUserRequest)
    
    if(error){
        toast.error(error.toString())
    }

    if(isSuccess){
        toast.success("User detail fetched successfully")
    }
    return{
        getCurrentUser,
        isLoading,
        isSuccess,
        error
    }
}

type CreateUserRequest={
    auth0Id:string,
    email:string,
    name:String,

}


// fetch create user api

export const useCreateMyUser=()=>{
    const {getAccessTokenSilently}=useAuth0();
    const CreateUserRequest=async(user:CreateUserRequest)=>{
        const accessToken= await getAccessTokenSilently()
        const response= await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"POST",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        });
        if(!response.ok){
            throw new Error("Failed to Create User")
        }
    }
    const {mutateAsync:createUser,isLoading,isError,error,isSuccess}=useMutation(CreateUserRequest);
    if(isSuccess){
        toast.success("User Created Successfully");
    }
    if(error){
        toast.error(error.toString())
     }
    return{
        createUser,
        isLoading,
        isError,
        isSuccess
    }
}

type UpdateUserRequest={
    name:string,
    addressLine1:string,
    city:string,
    country:string,
}


// fetch update profile 
export const userUpdateProfile=()=>{
    const {getAccessTokenSilently}=useAuth0();

    const UpdateMyUserRequest=async(formData:UpdateUserRequest)=>{
        const accessToken= await getAccessTokenSilently();
        console.log("Access Token:", accessToken); 
        const response = await fetch(`${API_BASE_URL}/api/my/user`,{
            method:"PUT",
            headers:{
                Authorization:`Bearer ${accessToken}`,
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        });
        if(!response.ok){
            throw new Error("Failed to update User")
        }
        return response.json();
    }

    const {mutateAsync:updateUser,isLoading,isError,isSuccess,error,reset}=useMutation(UpdateMyUserRequest)
     
    if(isSuccess){
        toast.success("User Updated Profile Successfully");
    }

    if(error){
       toast.error(error.toString())
    }
    return{
        updateUser,
        isLoading,
        isError,
        isSuccess,
        reset
    }
}
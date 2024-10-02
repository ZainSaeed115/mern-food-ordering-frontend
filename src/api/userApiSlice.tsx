import {apiSlice} from "./CreateApiSlice"

type CreateUserRequest={
    auth0Id:string,
    email:string

}
export const userApiSlice=apiSlice.injectEndpoints(
    {
        endpoints:(builder)=>({
           createUser:builder.mutation({
            query:(data:CreateUserRequest)=>({
                url:`/api/my/user`,
                method:'POST',
                body:data
            })
           })
        })
    }
);

export const {useCreateUserMutation}=userApiSlice
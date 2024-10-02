
import UserProfileForm from "@/form/user-profile-form/UserProfileForm"
import {useGetMyUser, userUpdateProfile} from "../api/MyUserApi"
import Loading from "@/components/Loading"
import Error from "@/components/Error"

const UserProfilePage = () => {
  const {getCurrentUser,isLoading:isGetLoading}=useGetMyUser()
  const {updateUser,isLoading:isUpdateLoading}=userUpdateProfile()

  if(isGetLoading){
    return<Loading/>
  }
  
  if(!getCurrentUser){
    return<Error/>
  }
  return (
  <UserProfileForm currentUser={getCurrentUser} onSave={updateUser} isLoading={isUpdateLoading}/>
  )
}

export default UserProfilePage